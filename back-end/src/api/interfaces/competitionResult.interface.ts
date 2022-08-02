import { z } from 'zod';

export const competitionResultSchema = z.object({
  competition_name: z
    .string({
      required_error: 'competition name is required',
      invalid_type_error: 'competition name must be a string',
    })
    .min(3, { message: 'competition name must be 3 or more characters long' }),
  athelete_name: z
    .string({
      required_error: 'athelete name is required',
      invalid_type_error: 'athelete name must be a string',
    })
    .min(2, { message: 'competition name must be 2 or more characters long' }),
  value: z
    .number({
      required_error: 'value is required',
      invalid_type_error: 'value must be a number',
    })
    .min(0, { message: 'value must be 0 or more' }),
  unit: z
    .string({
      required_error: 'unit is required',
      invalid_type_error: 'unit must be a string',
    }),
});

export type CompetitionResult = z.infer<typeof competitionResultSchema>;