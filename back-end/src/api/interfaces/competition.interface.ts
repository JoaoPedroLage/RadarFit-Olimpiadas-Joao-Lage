import { z } from 'zod';

export const competitionSchema = z.object({
  competition_name: z
    .string({
      required_error: 'competition name is required',
      invalid_type_error: 'competition name must be a string',
    })
    .min(3, { message: 'competition name must be 3 or more characters long' }),
});

export type Competition = z.infer<typeof competitionSchema>;