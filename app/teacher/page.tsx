'use client';

import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function Teacher() {
  const [showQR, setShowQR] = useState(false);
  const [classCode, setClassCode] = useState('');

  const generateClassCode = () => {
    const randomCode = Math.random().toString(36).substr(2, 6).toUpperCase(); // Código único
    setClassCode(randomCode);
  };

  const handleCreateClass = () => {
    generateClassCode(); // Generar el código único
    setShowQR(true); // Mostrar QR y código
  };

  const handleViewClass = () => {
    window.location.href = '/teacher/class-1';
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Menú Profesor</h2>
      <button
        onClick={handleCreateClass}
        className="bg-blue-500 text-white px-6 py-3 mb-4 rounded-md"
      >
        Crear Clase
      </button>
      <button
        onClick={handleViewClass}
        className="bg-green-500 text-white px-6 py-3 rounded-md"
      >
        Ver Clase
      </button>

      {showQR && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Clase creada:</h3>
          <QRCodeCanvas value={`https://edufeedback-mvp.vercel.app/login?classCode=${classCode}`} size={150} />
          <p className="mt-4 text-white">Código de clase: <strong>{classCode}</strong></p>
        </div>
      )}
    </div>
  );
}
