import { prisma } from "@/libs/prisma"
import { GameService } from "@/services/GameService"
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

  async remove(id: number) {

    const placesInGameExist = await new GameService().findAll({placeId: id}) 

    if(placesInGameExist.length){
      throw new Error('Não foi possível deletar!\nPossui jogos com esse local.')
    }

    return prisma.place.delete({
      where: { id }
    })

  }
}