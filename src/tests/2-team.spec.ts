import { TeamService } from "@/services/TeamService";
import { CreateTeamType, UpdateTeamType } from "@/utils/types";
import { randomInt } from "crypto";
import { describe, expect, it } from "vitest";


describe('team', () => {
  const service = new TeamService()
  const properties = ['id', 'name', 'group', 'genre', 'modalityId', 'unityId','students']

  it('create', async() => {
    const data:CreateTeamType = {
      name: 'Team delete',
      modalityId: 1,
      group: 'f1-test',
      genre: 'misto',
      unityId: 2,
      students: [
        'C123123',
        'C111222'
      ]
    }

    const res = await service.create(data)

    await service.remove(res.id)

    expect(res).toMatchObject(data)
  })


  it('find all', async () => {
    const res = await service.findAll({unityId: 2})

    for(const row of res){
      expect(Object.keys(row)).toEqual(properties)
    }
  })

  it('find one', async () => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {
    const data:UpdateTeamType = {
      name: `teste ${randomInt(10)}`
    }
    const res = await service.update(1, data)

    expect(res).toMatchObject(data)
  })

  it('filter by modality', async () => {
    const modalityId = 2
    const res = await service.findAll({ modalityId })

    expect(res[0]).toMatchObject({modalityId})

  })

  it.only('try to delete team that has a game', async() => {

    const res = await service.remove(1)

    console.log(res)

    // await expect(() => TeamService.delete(teamId)).rejects.toThrow('Possui jogos com essa equipe.')

  })

})

