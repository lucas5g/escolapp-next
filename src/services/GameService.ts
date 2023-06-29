import { cache } from "@/libs/node-cache";
import { GameRepository } from "@/repositories/GameRepository";
import { StudentRepository } from "@/repositories/StudentRepository";
import { TeamRepository } from "@/repositories/TeamRepository";
import { GameFilterType, GameType, gameFilterSchema, gameSchema } from "@/utils/schemas";
import { Prisma } from "@prisma/client";
import moment from "moment";

export class GameService {

  static async findMany(data:GameFilterType) {

    const gamesCache = `games_${data.userId}_${data.date}`
    if(cache.has(gamesCache)){
      return cache.get(gamesCache) as any[]
    }

    const filter = gameFilterSchema.parse(data)

    const gamesWithoutTeams = await GameRepository.findMany(filter)
    const students = await StudentRepository.findMany({unity:'contagem'}) 
    const teams = await TeamRepository.findMany({})


    const games = gamesWithoutTeams.map(game => {
      const gameTeams = game.teams as Prisma.JsonArray
      return {
        ...game,
        datetime: `${moment(game.date).format('DD/MM')} | ${game.startHours} - ${game.endHours}`,
        teams: gameTeams?.map((team: any) => {
          const teamFind = teams.find(row => row.id === team.id)
          // console.log(teamFind)
          // return ''
          const studentsJson = teamFind?.students as Prisma.JsonArray
          return {
            ...teamFind,
            goals: team.goals,
            points: team.points,
            fairPlay: team.fairPlay,
            students: studentsJson.map(ra => {
              return students.find(student => student.ra === ra)
            })
          }
        }),
      }
    })

    cache.set(gamesCache, games)

    return games
  }

  static async findById(id: number) {
    return await GameRepository.findById(id)
  }

  static async create(data: GameType) {
    cache.flushAll()
    const game = gameSchema.parse(data)
    return await GameRepository.create(game)
  }

  static async update(id: number, data: GameType) {
    cache.flushAll()
    const game = gameSchema.parse(data)
    return await GameRepository.update(id, game)
  }

  static async delete(id: number) {
    cache.flushAll()
    return await GameRepository.delete(id)
  }
}