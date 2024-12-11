'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ClassView() {
  const [comments, setComments] = useState<string[]>([]);
  const [emojiCounts, setEmojiCounts] = useState<Record<string, number>>({
    '😡': 0,
    '😞': 0,
    '😐': 0,
    '😊': 0,
    '😁': 0,
  });

  // Opciones para el gráfico
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: Object.keys(emojiCounts), // Los emojis como etiquetas
  };

  const chartSeries = Object.values(emojiCounts); // Los valores dinámicos de los emojis

  useEffect(() => {
    const fetchFeedback = () => {
      // Leer comentarios almacenados
      const storedComments = JSON.parse(localStorage.getItem('feedback') || '[]');
      setComments(storedComments);

      // Leer feedback de emojis almacenados
      const storedEmojis = JSON.parse(localStorage.getItem('emojiFeedback') || '[]');
      const counts: Record<string, number> = { '😡': 0, '😞': 0, '😐': 0, '😊': 0, '😁': 0 };


      storedEmojis.forEach((emoji: string) => {
        counts[emoji] = (counts[emoji] || 0) + 1;
      });

      setEmojiCounts(counts); // Actualizar los conteos dinámicos
    };

    fetchFeedback(); // Cargar feedback inicial

    // Actualizaciones en tiempo real
    const interval = setInterval(fetchFeedback, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-3xl font-semibold mb-6">Clase Matemática 1</h2>
      <Chart options={chartOptions} series={chartSeries} type="donut" width="300" />
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comentarios:</h3>
        <ul className="text-left">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">
              - {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
