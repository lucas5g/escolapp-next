import moment from "moment";
import { describe, expect, it } from "vitest";
import { GameService } from "../services/GameService";

describe('Game', () => {
  it('Game list', async () => {
    const games = await GameService.findMany()
  
    games.forEach((game:any) => {

      expect(game).toHaveProperty('modalityId')
      expect(game).toHaveProperty('userId')
      expect(game).toHaveProperty('teams')
      expect(game).toHaveProperty('hours')
    })
  })

  it('Game show', async() => {

    const gameShow = await GameService.findById(1)
    expect(gameShow).toHaveProperty('startHours')

  })

  it('Game update', async() => {

    const data = {
      date: new Date().toISOString(),
      startHours: '07:00',
      endHours: '08:00',
      placeId: 1,
      modalityId: 1,
      userId: 1,
      teams: [
        {id: 1, goals: 1, fairPlay:0,  points: 3},
        {id: 2, goals: 0, fairPlay:0,  points: 1},
      ]
      // teams: [53, 40]
    }

    const gameUpdate = await GameService.update(1, { ...data, startHours: moment().format('HH:MM') })
    expect(gameUpdate).toHaveProperty('startHours', moment().format('HH:MM'))

  })

  it('Game create and delete',async() => {
    const data = {
      date: new Date().toISOString(),
      startHours: '07:00',
      endHours: '08:00',
      placeId: 1,
      modalityId: 1,
      userId: 1,
      teams: [
        {id: 1, goals: 1, fairPlay:0,  points: 3},
        {id: 2, goals: 0, fairPlay:0,  points: 1},
      ]
      // teams: [53, 40]
    }
    const game = await GameService.create(data)
    expect(game).toHaveProperty('startHours', data.startHours)
    expect(game).toHaveProperty('teams')

    await GameService.delete(game.id)

  })

})