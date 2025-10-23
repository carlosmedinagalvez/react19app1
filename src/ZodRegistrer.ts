import { z } from 'zod';

const registrationSchema = z.object({
    country: z.string().min(3, 'required'),
    zip: z.string().max(5,'5 max length')
});

export default registrationSchema