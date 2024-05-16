import { TeamType, teamQuerySchema, teamSchema } from "../utils/schemas"
import { Prisma } from "@prisma/client"
import { StudentService } from "./StudentService"
import { prisma } from "@/libs/prisma"

export class TeamService {

  create(data: TeamType) {
  
    if (await TeamRepository.findByColumn('name', team.name)) {
      throw new Error(`Já foi cadastrado o time com o nome ${team.name}!`)
    }

    return prisma.team.create({
      
    })
  }

  findMany(data?: teamQuerySchema) {
    return prisma.team.findMany({
      
    })
  }

  static async findById(id: number) {
    return await TeamRepository.findById(id)
  }



  static async update(id: number, data: any) {
    cache.flushAll()

    const team = teamSchema.parse(data)
    return await TeamRepository.update(id, team)
  }

  static async delete(id: number) {
    cache.flushAll()

    const games = await GameRepository.findMany({})

    const gameTeam = games.find(game => {
      const teams = game.teams as Prisma.JsonArray
      return teams.find((team: any) => team.id === id)
    })

    if (gameTeam) {
      throw new Error('Não foi possível deletar :(\nPossui jogos com essa equipe.')
    }

    return await TeamRepository.delete(id)
  }
}