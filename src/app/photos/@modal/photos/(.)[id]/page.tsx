
'use client';
import { useRouter } from 'next/navigation';
export default function PhotoModal({ params }: any) {
  const router = useRouter();
  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
      onClick={() => router.back()}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: 20 }}>
        <h2>Photo modal {params.id}</h2>
        <p>Modal content — opened by client navigation.</p>
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
