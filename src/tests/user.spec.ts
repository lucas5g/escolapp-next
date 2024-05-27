import { describe, expect, it } from 'vitest'
import { UserService } from '@/services/UserService'
import { CreateUserType } from '@/utils/types'

describe('User', () => {

  const service = new UserService()
  const properties = ['id', 'email', 'profile', 'unityId']

  it('create', async () => {

    const data: CreateUserType = {
      email: 'test-delete@mail.com',
      password: 'qweqwe',
      profile: 'admin',
      unityId: 2
    }

    const res = await service.create(data)
    await service.remove(res.id)


    expect(res).toMatchObject({
      email: 'test-delete@mail.com',
      profile: 'admin',
      unityId: 2
    })


  })

  it('find all', async () => {

    const res = await service.findAll({})
    expect(Object.keys(res[0])).toEqual(properties)

  })

  it('find one', async () => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)

  })

  it('update', async () => {
    const data = {
      email: 'admin@mail.com',
      password: 'qweqwe',
      unityId: 2
    }

    const res = await service.update(2, data)

    expect(res).toMatchObject({
      email: 'admin@mail.com',
      unityId: 2
    })
  })


  it('find by profile', async () => {
    const res = await service.findAll({ profile: 'judge' })

    for(const row of res){
      expect(row).toMatchObject({ profile: 'judge' })
    }

  })

})