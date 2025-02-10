import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .trim(),
  ci: z
    .string()
    .min(1, { message: 'El C.I. es obligatorio.' })
    .regex(/^\d+$/, { message: 'El C.I. debe contener solo números.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener al menos 8 caracteres.' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos un carácter especial.',
    })
    .trim(),
  confirmPassword: z.string().min(1, { message: 'La confirmación de la contraseña es obligatoria.' }),
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword'], // Esto asegura que el error se asocie al campo confirmPassword
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        ci?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;