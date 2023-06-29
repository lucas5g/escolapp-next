import { ConfigService } from "@/services/ConfigService";
import { describe, expect, it } from "vitest";


describe('Cache', () => {
  it('List and clear caches', async() => {
    const data = await ConfigService.clearCaches()
    expect(data).toBe

  })
})