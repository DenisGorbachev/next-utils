import { ZodError, ZodSchema } from 'zod'

export function getPageParams<Input>(schema: ZodSchema<Input>, is404Error: (error: ZodError<Input>) => boolean, input: unknown) {
  const result = schema.safeParse(input)
  if (result.success) {
    return result.data
  } else {
    if (is404Error(result.error)) {
      return undefined
    } else {
      throw result.error
    }
  }
}
