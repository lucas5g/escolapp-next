import { GameService } from "@/services/GameService";
import { FindGameType, UpdateGameType } from "@/utils/types";
import { randomInt } from "crypto";
import { format } from "date-fns";
import { describe, expect, it } from "vitest";



describe('Game', () => {

  const service = new GameService()
  const properties = ['id', 'date', 'startHours', 'endHours', 'comments', 'teams', 'placeId', 'modalityId', 'userId', 'unityId', 'createdAt', 'updatedAt']
  const date = format(new Date(), 'yyyy-MM-dd')

  it('create', async () => {
    const data = {
      date,
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

    expect(res).toMatchObject(data)


  })

  it('find all', async () => {
    const res = await service.findAll({})

    for (const row of res) {
      expect(Object.keys(row)).toEqual(properties)
    }
  })

  it('find by userId', async () => {
    const data:FindGameType = {
      userId: 2,
      date
    }

    const res = await service.findAll(data)

    for(const row of res){
      expect(row).toMatchObject(data)
    }

  })

  it('find one', async() => {
    const res = await service.findOne(1)
    expect(Object.keys(res)).toEqual(properties)
  })

  it('update', async() => {

    const data:UpdateGameType = {
      comments: `Comentario ${randomInt(10)}`
    }

    const res = await service.update(1, data)

    expect(res).toMatchObject(data)
  })

  

})