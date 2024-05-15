import { ModalityService } from "@/services/ModalityService";
import { TeamService } from "@/services/TeamService";
import { CreateModalityType, UpdateModalityType } from "@/utils/types";
import { randomInt } from "crypto";
import { describe, expect, it } from "vitest";


describe('Modality', () => {
  const service = new ModalityService()
  const properties = ['id', 'name', 'type', 'membersQuantity', 'teamsQuantity', 'unityId']

  it('create', async () => {

    const data: CreateModalityType = {
      name: 'teste',
      membersQuantity: 22,
      teamsQuantity: 2,
      type: 'collective',
      unityId: 2
    }

    const res = await service.create(data)
    await service.delete(res.id)

    expect(res).toMatchObject(data)

  })

  it('find all', async () => {
    const res = await service.findAll({ unityId: 2 })

    for(const row of res){
      expect(Object.keys(row)).toEqual(properties)
    }

  })

  it('find one', async () => {
    const res = await service.findOne(1)

    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {
    const data:UpdateModalityType = {
      name: `test ${randomInt(10)}`
    }
    const res = await service.update(1, data)

    expect(res).toMatchObject(data)
  })



  it.skip('Try to delete modality that has a team', async () => {

    const modality: UpdateModalityType = {
      name: 'test modality del',
      membersQuantity: 1,
      teamsQuantity: 2,
      type: 'collective',
      unityId: 2
    }

    const { id: modalityId } = await ModalityService.create(modality)

    const team = {
      name: 'team del',
      students: ['c123123', 'c132132'],
      modalityId,
      groupId: 1,
      genreId: 1

    }
    const { id: teamId } = await TeamService.create(team)

    await expect(() => ModalityService.delete(modalityId)).rejects.toThrow('Possui Equipes com essa modalidade.')

    await TeamService.delete(teamId)
    await ModalityService.delete(modalityId)
  })

})