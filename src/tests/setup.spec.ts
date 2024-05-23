import { SetupServive } from "@/services/SetupService";
import { describe, expect, it } from "vitest";

describe('Setup', () => {
  const service = new SetupServive()
  const properties = ['id', 'documentLink', 'unityId']
  it('create', async() => {

    const data = {
      documentLink: 'https://drive.google.com/drive/folders/18XwnFVAuLfwOXZ4mcwfscj_u1JqEAUIQ?usp=drive_link',
      unityId: 2
    }

    const res = await service.create(data)
    await service.remove(res.id)
    expect(res).contain(data)

  })

  it('find all', async() => {
    const res = await service.findAll({unityId: 2})
    expect(Object.keys(res[0])).toEqual(properties)
    expect(res[0]).toMatchObject({unityId: 2})
    
  })

  it('find one', async() => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {
    const data = {
      documentLink: 'https://docs.google.com/document/d/1U0uJvTwSmepAQZgiPAlbNiqYBY4RggBCV4bjtO5H9zY/edit?usp=drive_link',
      unityId: 2
    }

    const res = await service.update(1, data)
    expect(res).contain(data)
  })

  



})