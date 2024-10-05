import { z } from 'zod';

export const contactShcema = z.object({
  email: z.string(),
  fullName: z.string(),
  message: z.string(),
});
