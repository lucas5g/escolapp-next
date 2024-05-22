import { prisma } from "@/libs/prisma";
import { FindPointSchema } from "@/utils/schemas";
import { FindPointType } from "@/utils/types";
import { Prisma } from "@prisma/client";
export class PointService {
  async findAll(data: FindPointType) {
    const games = await prisma.game.findMany({
      where: FindPointSchema.parse(data)
    })
    
    const gamesTeams =  games.map(game => (
      game.teams
    )).flat()
    //let uniqueObjArray = [...new Map(objArray.map((item) => [item["id"], item])).values()];
    // const teamsIds = [...new Set] gamesTeams.map((gameTeam:any) => gameTeam.id
    // const teamsIds = [...new Set(gamesTeams.)]
    // const teamsIds = []
    

    // console.log(gamesTeams, teamsIds)

    return '
    '

    return await prisma.team.findMany({
      where:{
        id:{
          in: teamsIds
        }
      }
    })

  }
}