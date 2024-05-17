import { GroupService } from "@/services/GroupService";
import { TeamService } from "@/services/TeamService";
import { describe, expect, it } from "vitest";

describe('group', () => {
  const service = new GroupService()
  const properties = ['id', 'name', 'quantity']
  it('find all', async () => {

    const res = await service.findAll({unityId:2})

    for(const row of res){
      expect(Object.keys(row)).toEqual(properties)
    }
  })


})