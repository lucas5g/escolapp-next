import { prisma } from "@/libs/prisma"
import { CreatePlaceSchema } from "@/utils/schemas"
import { CreatePlaceType } from "@/utils/types"

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
    return await PlaceRepository.findById(id)
  }



  async update(id: number, data: any) {
    const place = placeSchema.parse(data)
    return await PlaceRepository.update(id, place)
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