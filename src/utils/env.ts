import 'dotenv/config'
import { z } from 'zod'

export const env = z.object({
  SPREAD_SHEET_ID: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_EMAIL: z.string(),
  GOOGLE_PRIVATE_KEY: z.string() 

  // googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),

}).parse(process.env)



