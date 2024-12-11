'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function StudentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const classCodeFromURL = searchParams.get('classCode');
    if (classCodeFromURL) {
      setInputCode(classCodeFromURL); // Escribir el código automáticamente en el input
    }
  }, [searchParams]);

  const handleJoinWithCode = () => {
    const classCodeFromURL = searchParams.get('classCode');
    if (inputCode === classCodeFromURL) {
      router.push(`/student/class-1?classCode=${inputCode}`);
    } else {
      setError('El código ingresado es incorrecto. Intenta nuevamente.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Unirse a la Clase</h2>
      <p className="mb-4">Ingresa el código de la clase:</p>
      <input
        type="text"
        placeholder="Código de clase"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md text-black"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleJoinWithCode}
        className="bg-blue-500 text-white px-6 py-3 rounded-md"
      >
        Unirse
      </button>
    </div>
  );
}
