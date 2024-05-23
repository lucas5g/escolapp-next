import { describe, expect, it } from 'vitest'
import { UserService } from '@/services/UserService'
import { CreateUserType } from '@/utils/types'

describe('User', () => {

  const service = new UserService()

  it.only('create', async() => {

    const data:CreateUserType = {
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

  it('User list', async () => {

    const users = await UserService.findMany({})
    users.forEach(user => {
      expect(user).not.toHaveProperty('password')
      expect(user).toHaveProperty('unityId')

    })
    expect(users.length).toBeGreaterThanOrEqual(0)
  })

  it('User find by profile', async() => {
    const users = await UserService.findMany({profile:'judge'})
    users.forEach(user => {
      expect(user).toContain({profile:'judge'})
    })
  })

  it('User update', async() => {
    const data = {
      email: 'admin@mail.com',
      name: `admin ${new Date().getMinutes()}`,
      password: 'qweqwe',
      unityId: 2
    }

    const userUpdate = await UserService.update(1, { ...data, name: 'update', profile:'admin' })
    expect(userUpdate).toHaveProperty('name', 'update')
  })

  it('User create', async () => {

    const data = {
      email: 'test-delete@mail.com',
      name: `admin ${new Date().getMinutes()}`,
      password: 'qweqwe',
      profile: 'admin',
      unityId: 2
    }

    /**
     * Create
     */
    const user = await UserService.create({...data, profile:'admin'})
    expect(user).toHaveProperty('email', data.email)


    /**
     * Show
     */
    const userShow = await UserService.findById(user.id)
    expect(userShow).toHaveProperty('email', data.email)

    /**
     * Delete
     */
    await UserService.delete(user.id)
  })

})