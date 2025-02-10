import 'server-only'
import {SignJWT, jwtVerify} from "jose";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from 'next/headers';
const key = new TextEncoder().encode(process.env.SECRET)

const coockie ={
    name: 'session',
    options: {httpOnly: true, secure: true, sameSite: 'lax', path: '/'},
    duration: 24 * 60 * 60 * 1000
}

export async function encrypt() {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1day')
        .sign(key)
}
export async function decrypt(cookie: any) {
    try{
        const {payload} = await jwtVerify(session, key,{
            algorithms: ['HS256'],
        })
        return payload
    } catch (error){
        return null
    }
}
export async function createSession(userId) {
    const expires = new Date(Date.now() + coockie.duration);
    const session = await encrypt({userId, expires})

    cookies().set(cookie, name, session, { ...coockie.options, expires })
    redirect('/')
}

export async function verifySession() {
    const cookie = cookies().get(cookie.name)?.value
    const session = await decrypt(cookie)

    if(!session?.userId){
        redirect('/auth/signin')
    }

    return { userId: session.userId}
}

export async function deleteSession() {

    cookies().delete(cookie.name)
    redirect('/auth/signin')
}