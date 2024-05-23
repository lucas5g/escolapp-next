import { prisma } from "@/libs/prisma"
import { CreateSetupSchema, FindSetupSchema, UpdateSetupSchema } from "@/utils/schemas"
import { CreateSetupType, FindSetupType, UpdateSetupType } from "@/utils/types"

export class SetupServive {

  create(data: CreateSetupType) {
    return prisma.setup.create({
      data: CreateSetupSchema.parse(data)
    })
  }

  findAll(data: FindSetupType) {
    return prisma.setup.findMany({
      where: FindSetupSchema.parse(data)
    })
  }

  findOne(id: number) {
    return prisma.setup.findUniqueOrThrow({
      where: { id }
    })
  }

  update(id: number, data: UpdateSetupType) {
    return prisma.setup.update({
      where: { id },
      data: UpdateSetupSchema.parse(data)
    })
  }

  remove(id: number) {
    return prisma.setup.delete({
      where: { id }
    })
  }
}