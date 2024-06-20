import { z } from "zod";

const userVlidationSchema = z.object({
    
    password: z.string().max(20, {message: 'password can not be more then 20 characters'}).optional(),
    needsPasswordChange: z.boolean().optional().default(false),
    role: z.enum(['student', 'faculty','admin']),
    
   
});

export const UserValidation = {
    userVlidationSchema,
}