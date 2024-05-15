import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { setTimeout } from 'timers/promises'

import { games, groups, modalities, places, setups, teams, unities, users } from './data'

const prisma = new PrismaClient();
const types: any = {
  collective: 'collective',
  individual: 'individual'
};
const profiles: any = {
  manager: 'manager',
  judge: 'judge',
  coordinator: 'coordinator'
};

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
  }
}
main()

