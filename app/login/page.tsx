// app/login/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here, such as sending a request to the server
    console.log('Login submitted:', email, password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe" className="ml-2">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
