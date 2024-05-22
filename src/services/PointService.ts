import { prisma } from "@/libs/prisma";
import { FindPointSchema } from "@/utils/schemas";
import { FindPointType } from "@/utils/types";
import { Prisma } from "@prisma/client";

interface TeamInterface {
  id: number
}
export class PointService {
  async findAll(data: FindPointType) {
    const games = await prisma.game.findMany({
      where: FindPointSchema.parse(data)
    })

    const gamesTeams = games.map(game => (
      game.teams
    )).flat()

    console.log(gamesTeams)

    const teamsIds = [...new Map(gamesTeams.map((item: any) => [item.id, item.id])).values()];

    const teams = await prisma.team.findMany({
      where: {
        id: {
          in: teamsIds
        }
      }
    })

    const pointsByGroup = gamesTeams.reduce<Record<string, {group:string, points: number}>>((acc, game:any) => {
      const team = teams.find(team => team.id === game.id);

      if (team) {
        const group = team.group;
        if (!acc[group]) {
          acc[group] = { group, points: 0 };
        }
        acc[group].points += game.points;
      }
      return acc;
    }, {});
    
    return Object.values(pointsByGroup).sort((a, b) =>  b.points - a.points)
    
  }
}