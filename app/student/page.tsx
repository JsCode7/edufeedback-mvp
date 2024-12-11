'use client';

import { Suspense } from 'react';
import StudentContent from './components/StudentContent';

export default function Student() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
        <StudentContent />
    </Suspense>
  )
}
