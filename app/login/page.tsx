'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [classCode, setClassCode] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const codeFromURL = searchParams.get('classCode');
    if (codeFromURL) {
      setClassCode(codeFromURL); // Guardar el código de clase de la URL
    }
  }, [searchParams]);

  const handleLogin = () => {
    if (username === 'estudiante' && password === '12345') {
      router.push(`/student?classCode=${classCode}`);
    } else if (username === 'profesor' && password === '67890') {
      router.push('/teacher');
    } else {
      setError('Credenciales incorrectas. Intenta nuevamente.');
    }
  };

  return (
    <Suspense>
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md text-black"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md text-black"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-purple-500 text-white px-6 py-3 rounded-md"
      >
        Iniciar Sesión
      </button>
    </div>
    </Suspense>
  );
}
