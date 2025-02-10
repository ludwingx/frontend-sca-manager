// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const token = (await localStorage.getItem('token') || '').toString();
  
  // Rutas públicas (no requieren autenticación)
  const publicPaths = ['/auth/signin', '/auth/signup']; // Añade aquí las rutas públicas
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // Si no hay token y la ruta no es pública, redirigir a /auth/signin
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // Si hay token y está en una ruta pública, redirigir al perfil
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  return NextResponse.next();
}

// Especificar las rutas a las que se aplica el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};