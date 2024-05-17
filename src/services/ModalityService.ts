import { prisma } from '@/libs/prisma'
import { TeamService } from '@/services/TeamService'
import { CreateModalitySchema, UpdateModalitySchema } from '@/utils/schemas'
import { CreateModalityType, UpdateModalityType } from '@/utils/types'
export class ModalityService {

  create(data: CreateModalityType) {
    return prisma.modality.create({
      data: CreateModalitySchema.parse(data)
    })
  }


  findAll({ unityId }: { unityId: number }) {
    return prisma.modality.findMany({
      where: { unityId }
    })
  }

  findOne(id: number) {
    return prisma.modality.findUniqueOrThrow({
      where: { id }
    })
  }


  update(id: number, data: UpdateModalityType) {
    return prisma.modality.update({
      where: { id },
      data: UpdateModalitySchema.parse(data)
    })

  }

  async delete(id: number) {
    const modalitiesInTeamExist = await new TeamService().findAll({ modalityId: id })

    if (modalitiesInTeamExist.length) {
      throw new Error('Não foi possível deletar :(\nPossui Equipes com essa modalidade.')
    }
    return await prisma.modality.delete({
      where: { id }
    })
  }
}