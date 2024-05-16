import { Genre, Prisma, PrismaClient } from '@prisma/client'


import { games, groups, modalities, places, setups, teams, unities, users } from './data'

const prisma = new PrismaClient();

async function main() {
  for (const unity of unities) {
    await prisma.unity.upsert({
      where: { id: unity.id },
      create: unity,
      update: unity
    })

    for (const place of places) {
      await prisma.place.upsert({
        where: { id: place.id },
        create: place,
        update: place
      })
    }

    for (const modality of modalities) {
      await prisma.modality.upsert({
        where: { id: modality.id },
        create: modality,
        update: modality
      })
    }

    for(const user of users){
      await prisma.user.upsert({
        where: {id: user.id},
        create: user,
        update: user
      })
    }

    for(const team of teams){

      await prisma.team.upsert({
        where: {id: team.id},
        create:team,
        update: team
      })
    }

    for(const game of games){
      await prisma.game.upsert({
        where:{id: game.id},
        create: game,
        update: game
      })
    }
  }
}
main()

