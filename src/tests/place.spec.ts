import { GameService } from "@/services/GameService";
import { PlaceService } from "@/services/PlaceService";
import { CreatePlaceType } from "@/utils/types";
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

    // it('Place crud', async () => {

  //   const data = {
  //     name: 'name place del',
  //     unityId: 2
  //   }
  //   /**
  //    * Create
  //    */
  //   const place = await PlaceService.create(data)
  //   expect(place).toHaveProperty('name', data.name)

  //   /**
  //    * Show
  //    */
  //   const placeShow = await PlaceService.findById(place.id)
  //   expect(placeShow).toHaveProperty('name')


  //   /**
  //    * Update
  //    */
  //   const placeUpdate = await PlaceService.update(place.id, { ...data, name: 'test-update' })
  //   expect(placeUpdate).toHaveProperty('name', 'test-update')
  //   /**
  //    * Delete
  //    */
  //   await PlaceService.delete(place.id)
  // })


  // it('Try to delete a place that has a game', async () => {
  //   const place = {
  //     name: 'place with game',
  //     unityId: 2
  //   }

  //   const { id: placeId } = await PlaceService.create(place)

  //   const game = {
  //     date: new Date().toISOString(),
  //     startHours: '07:00',
  //     endHours: '08:00',
  //     placeId: placeId,
  //     modalityId: 1,
  //     userId: 1,
  //     teams: [
  //       { id: 1, goals: 1, fairPlay: 0, points: 3 },
  //       { id: 2, goals: 0, fairPlay: 0, points: 1 },
  //     ]
  //     // teams: [53, 40]
  //   }

  //   const { id: gameId } = await GameService.create(game)

  //   await expect(() => PlaceService.delete(placeId)).rejects.toThrow('Não foi possível deletar :(\nPossui Jogos com este local.')

  //   await GameService.delete(gameId)
  //   await PlaceService.delete(placeId)
  // })
})