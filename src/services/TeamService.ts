import { prisma } from "@/libs/prisma"
import { CreateTeamSchema, FindTeamSchema, UpdateTeamSchema } from "@/utils/schemas"
import { CreateTeamType, FindTeamType, UpdateTeamType } from "@/utils/types"

export class TeamService {

  async create(createTeam: CreateTeamType) {

    const data = CreateTeamSchema.parse(createTeam)
    const teamsNameExist = await this.findAll({ name: data.name })
    if (teamsNameExist.length) {
      throw new Error(`Já foi cadastrado o time com o nome ${data.name}!`)
    }

    return prisma.team.create({
      data
    })
  }

  findAll(data: FindTeamType) {
    return prisma.team.findMany({
      where: FindTeamSchema.parse(data)
    })
  }

  findOne(id: number) {
    return prisma.team.findUniqueOrThrow({
      where: { id }
    })
  }

  update(id: number, data: UpdateTeamType) {
    return prisma.team.update({
      where: { id },
      data: UpdateTeamSchema.parse(data)
    })
  }

  async remove(id: number) {

    const gameWithTeam = await prisma.game.findFirst({
      where: {
        teams: {
          path: '$[*].id',
          array_contains: id
        }
      }
    })

    if (gameWithTeam) {
      throw new Error('Não foi possível deletar :(\nPossui jogos com essa equipe.')
    }

    return await prisma.team.delete({
      where: { id }
    })

  }
}