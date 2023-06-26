import { Prisma } from "@prisma/client"

export class GameRepository {

  static async findMany() {
    return await Prisma.game.findMany({
      orderBy: [
        { date: 'asc' },
        { startHours: 'asc' }
      ],
    })
  }

  static async findById(id: number) {
    return await prisma.game.findUnique({
      where: { id }
    })
  }

  static async create(data: GameType) {
    return await prisma.game.create({
      data
    })
  }

  static async update(id: number, data: GameType) {

    return await prisma.game.update({
      where: { id },
      data
    })
  }

  static async delete(id: number) {
    return await prisma.game.delete({
      where: { id },

    })
  }
}