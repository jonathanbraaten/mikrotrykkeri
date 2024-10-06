import { z } from 'zod';

export const contactSchema = z
  .object({
    email: z.string().min(1, {
      message: 'Vennligst bruk en godkjent e-post adresse',
    }),
    fullName: z.string().min(1, { message: 'Vennligst fyll ut dette feltet' }),
    message: z.string().min(1, {
      message: 'Vennligst fyll ut dette feltet',
    }),
  })
  .required();
