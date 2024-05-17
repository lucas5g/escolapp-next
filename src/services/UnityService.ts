import { prisma } from "@/libs/prisma"
import { CreateUnitySchema, UpdateUnitySchema } from "@/utils/schemas"
import { CreateUnityType, UpdateUnityType } from "@/utils/types"


export class UnityService {

  create(data: CreateUnityType) {
    return prisma.unity.create({
      data: CreateUnitySchema.parse(data)
    })
  }

  findAll() {
    return prisma.unity.findMany()
  }

  findOne(id:number) {
    return prisma.unity.findUniqueOrThrow({
      where:{id}
    })
  }

  update(id: number, data: UpdateUnityType) {
    return prisma.unity.update({
      where:{id},
      data: UpdateUnitySchema.parse(data)
    })
  }

  delete(id: number) {
    return prisma.unity.delete({
      where: { id }
    })
  }
}