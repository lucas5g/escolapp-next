import { CreatePlaceSchema } from '@/utils/schemas'
import { z } from 'zod'
export type CreatePlaceType = z.infer<typeof CreatePlaceSchema>