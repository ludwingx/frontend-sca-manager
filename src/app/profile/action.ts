// services/fetchProfileData.ts
'use server'; // Marca esta función como una función de servidor

import { cookies } from "next/headers";

type User = {
    id: number;
    full_name: string;
    ci: string;
    contraseña: string;
    rol_id: number;
};

export const fetchProfileData = async (): Promise<User | null> => {
    const token = (await cookies()).get('token')?.value;
    const userId = (await cookies()).get('user_id')?.value;

    try {
        const response = await fetch('https://8bc6-189-28-75-153.ngrok-free.app/api/user/' + userId, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al obtener los datos del usuario');
        }

        const userData: User = await response.json();
        return userData;
    } catch (error) {
        console.error(error);
        return null;
    }
};