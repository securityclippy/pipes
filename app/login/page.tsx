// app/login/page.tsx

'use client';

import { useAuth0 } from '@auth0/nextjs-auth0';

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleLogin}
        >
          Log In with Auth0
        </button>
      </div>
    </div>
  );
}
