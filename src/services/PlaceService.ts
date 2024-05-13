import { prisma } from "@/libs/prisma"
import { CreatePlaceSchema, UpdatePlaceSchema } from "@/utils/schemas"
import { CreatePlaceType, UpdatePlaceType } from "@/utils/types"

export class PlaceService {

  create(data: CreatePlaceType) {
    return prisma.place.create({
      data: CreatePlaceSchema.parse(data)
    })
  }

  findAll() {
    return prisma.place.findMany()
  }

   findOne(id: number) {
    return prisma.place.findUniqueOrThrow({
      where:{id}
    })
  }


  update(id: number, data: UpdatePlaceType) {

    return prisma.place.update({
      where:{id},
      data: UpdatePlaceSchema.parse(data)
    })
  }

  delete(id: number) {
    return prisma.place.delete({
      where: { id }
    })

    // if (await GameRepository.findByColumn('placeId', id)) {
    //   throw new Error('Não foi possível deletar :(\nPossui Jogos com este local.')
    // }

    // return await PlaceRepository.delete(id)
  }
}