
import { PlaceService } from "@/services/PlaceService";
import { CreatePlaceType, UpdatePlaceType } from "@/utils/types";
import { randomInt } from "crypto";
import { describe, expect, it } from "vitest";

describe('Place', () => {
  const service = new PlaceService()

  const properties = ['id', 'name', 'unity_id']

  it('create', async () => {
    const data: CreatePlaceType = {
      name: 'some place',
      unity_id: 2
    }
    const res = await service.create(data)

    await service.delete(res.id)

    expect(res).toMatchObject(data)
  })


  it('find all', async () => {
    const res = await service.findAll()
    res.forEach(row => {
      expect(Object.keys(row)).toEqual(properties)
    })
  })

  it('find one', async() => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {
    const data:UpdatePlaceType = {
      name: `place ${randomInt(50)}`
    }
    const res = await service.update(1, data)

    expect(res).toMatchObject(data)
  })

})