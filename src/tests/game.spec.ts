import { GameService } from "@/services/GameService";
import { describe, expect, it } from "vitest";



describe('Game', () => {

  const service = new GameService()
  const properties = ['id', 'date', 'startHours', 'endHours', 'comments', 'teams', 'placeId', 'modalityId', 'userId', 'unityId', 'createdAt', 'updatedAt']

  it('create', async () => {
    const today = new Date()
    const data = {
      date: today.toISOString(),
      startHours: '07:00',
      endHours: '08:00',
      placeId: 1,
      modalityId: 1,
      userId: 1,
      teams: [
        { id: 1, goals: 1, fairPlay: 0, points: 3 },
        { id: 2, goals: 0, fairPlay: 0, points: 1 },
      ]
    }

    const res = await service.create(data)
    await service.remove(res.id)

    expect(res).toMatchObject({ ...data, date: today })


  })

  it('find all', async () => {
    const res = await service.findAll({})

    for (const row of res) {
      expect(Object.keys(row)).toEqual(properties)
    }
  })

  it.only('find one', async() => {
    const res = await GameService.findById(id)
    expect(gameShow).toHaveProperty('startHours')
  })

  it('Game crud', async () => {




    /**
     * Update
     */
    const gameUpdate = await GameService.update(game.id, { ...data, startHours: moment().format('HH:MM') })
    expect(gameUpdate).toHaveProperty('startHours', moment().format('HH:MM'))
    // expect(gameUpdate.teams).deep.equal(data.teams)

    /**
     * Delete
     */
    await GameService.delete(game.id)
  })

  it('List game by userId', async () => {
    const userId = 73
    const date = moment(moment().format('YYYY-MM-DD')).toISOString()
    const games = await GameService.findMany({ userId, date })
    // console.log(games)
    games.forEach(game => {
      expect(game).contain({ userId })
    })

  }, 5100)

})