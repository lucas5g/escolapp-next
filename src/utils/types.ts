import { CreateModalitySchema, CreatePlaceSchema, UpdateModalitySchema, UpdatePlaceSchema } from '@/utils/schemas'
import { z } from 'zod'
export type CreatePlaceType = z.infer<typeof CreatePlaceSchema>
export type UpdatePlaceType = z.infer<typeof UpdatePlaceSchema>

export type CreateModalityType = z.infer<typeof CreateModalitySchema>
export type UpdateModalityType = z.infer<typeof UpdateModalitySchema>
