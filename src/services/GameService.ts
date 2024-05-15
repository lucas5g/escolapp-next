import { prisma } from "@/libs/prisma";
import { CreateGameSchema, FindGameSchema } from '@/utils/schemas'
import { CreateGameType, FindGameType,  } from "@/utils/types";


export class GameService {

  create(data: CreateGameType) {
    return prisma.game.create({
      data: CreateGameSchema.parse(data)
    })
  }


  async findAll(data: FindGameType) {

    const filter = FindGameSchema.parse(data)

    return await prisma.game.findMany({
      where:filter
    })

    const gamesWithoutTeams = await GameRepository.findMany(filter)
    const students = await StudentRepository.findMany({ unity: 'contagem' })
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


  static async update(id: number, data: GameType) {
    cache.flushAll()
    const game = gameSchema.parse(data)
    return await GameRepository.update(id, game)
  }

  remove(id: number) {
    return prisma.game.delete({
      where: { id }
    })
  }
}