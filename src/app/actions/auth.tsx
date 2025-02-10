'use server'

import { SignupFormSchema } from "@/app/lib/definitions"
import { createSession } from "../lib/sessions";


export async function signup(state, formData) {

    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        ci: formData.get('ci'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),

    })

    if(!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors
        }
    }

    //crear usuario

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db
        .insert(users)
        .values({name, ci, password, hashedPassword})
        .returning({id: users.id})
    const user = data[0];


    //crear sesion

    await createSession(user.id) 
}