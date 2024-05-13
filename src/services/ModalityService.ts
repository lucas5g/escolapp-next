import { prisma } from '@/libs/prisma'
import { CreateModalitySchema } from '@/utils/schemas'
import { CreateModalityType } from '@/utils/types'
export class ModalityService {

  async create(data: CreateModalityType) {
    return prisma.modality.create({
      data: CreateModalitySchema.parse(data)
    })
  }


  static async findMany({ unityId }: { unityId: number }) {
    return await ModalityRepository.findMany({ unityId })
  }

  static async findById(id: number) {
    return await ModalityRepository.findById(id)
  }



  static async update(id: number, data: any) {

    const modality = modalitySchema.parse(data)

    return await ModalityRepository.update(id, modality)
  }

  async delete(id: number) {
  //   if (await prisma.game.findUnique({ where: {id} })) {
  //     throw new Error('Não foi possível deletar :(\nPossui Equipes com essa modalidade.')
  //   }
    return await prisma.modality.delete({
      where: { id }
    })
  }
}