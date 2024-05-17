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



  it('try to delete modality that has a team', async () => {
    const res = service.delete(1)

    expect(() => res).rejects.toThrow('Não foi possível deletar :(\nPossui Equipes com essa modalidade.')
  })

})