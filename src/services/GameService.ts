import { prisma } from "@/libs/prisma";
import { CreateGameSchema, FindGameSchema, UpdateGameSchema } from '@/utils/schemas'
import { CreateGameType, FindGameType, UpdateGameType, } from "@/utils/types";


export class GameService {

  create(data: CreateGameType) {
    return prisma.game.create({
      data: CreateGameSchema.parse(data)
    })
  }

  findAll(data: FindGameType) {

    return prisma.game.findMany({
      where: FindGameSchema.parse(data)
    })

  }

  findOne(id: number) {
    return prisma.game.findUniqueOrThrow({
      where: { id }
    })
  }

  update(id: number, data: UpdateGameType) {
    return prisma.game.update({
      where: { id },
      data: UpdateGameSchema.parse(data)
    })
  }

  remove(id: number) {
    return prisma.game.delete({
      where: { id }
    })
  }
}