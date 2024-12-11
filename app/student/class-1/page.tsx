'use client';

import { useState } from 'react';

export default function ClassFeedback() {
  const [feedback, setFeedback] = useState('');
  const emojis = [
    { emoji: '😡', label: 'Muy mal' },
    { emoji: '😞', label: 'Mal' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😊', label: 'Bien' },
    { emoji: '😁', label: 'Muy bien' },
  ];

  const handleSubmit = () => {
    if (feedback.trim()) {
      const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
      const updatedFeedback = [...storedFeedback, feedback];
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback));

      alert('Tu feedback ha sido enviado.');
      setFeedback('');
    } else {
      alert('Por favor, ingresa tu feedback.');
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    const storedFeedback = JSON.parse(localStorage.getItem('emojiFeedback') || '[]');
    const updatedFeedback = [...storedFeedback, emoji];
    localStorage.setItem('emojiFeedback', JSON.stringify(updatedFeedback));

    alert(`Tu estado "${emoji}" ha sido registrado.`);
  };

  return (
    <div className="flex flex-col gap-8">
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Clase Matemática 1</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escribe tu feedback aquí..."
        className="w-full h-32 p-2 border rounded-md mb-4 text-black"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-3 rounded-md"
      >
        Enviar
      </button>
    </div>
    <div className="flex flex-col items-center justify-center h-full p-4">
    <h2 className="text-xl font-semibold mb-6">Clase Matemática 1</h2>
    <p className="mb-4">¿Cómo te sientes con la clase?</p>
    <div className="flex space-x-4">
      {emojis.map((e) => (
        <button
          key={e.emoji}
          onClick={() => handleEmojiSelect(e.emoji)}
          className="text-3xl"
          aria-label={e.label}
        >
          {e.emoji}
        </button>
      ))}
    </div>
  </div>
  </div>
  );
}
