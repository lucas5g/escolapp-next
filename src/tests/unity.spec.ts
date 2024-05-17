import { UnityService } from "@/services/UnityService";
import { CreateUnityType, UpdateUnityType } from "@/utils/types";
import { randomInt } from "crypto";
import { describe, expect, it } from "vitest";

describe('unity', () => {
  const service = new UnityService()
  const properties = ['id', 'name', 'spreedsheetId']
  it('create', async () => {
    const data: CreateUnityType = {
      name: 'name unity',
      spreedsheetId: 'some-id'
    }

    const res = await service.create(data)
    expect(res).contain(data)

    await service.delete(res.id)
  })

  it('find all', async () => {

    const res = await service.findAll()

    for (const row of res) {
      expect(Object.keys(row)).toEqual(properties)
    }
  })

  it('find one', async () => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async () => {
    const data:UpdateUnityType = {
      name: `bh ${randomInt(10)}`
    }

    const res = await service.update(1, data)

    expect(res).toMatchObject(data)
    
  })


})