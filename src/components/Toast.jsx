import React from 'react';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();
  if (!toast) return null;

  const isInfo = toast.type === 'info';
  const isWarn = toast.type === 'warn';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 10050,
        backgroundColor: '#0B1B2D',
        color: '#FAF6F0',
        padding: '14px 20px',
        borderRadius: '10px',
        border: '1px solid #D8A24A',
        boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '420px',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {isWarn ? (
        <AlertTriangle size={20} color="#F59E0B" />
      ) : isInfo ? (
        <Info size={20} color="#D8A24A" />
      ) : (
        <CheckCircle2 size={20} color="#10B981" />
      )}
      <span style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.4 }}>
        {toast.message}
      </span>
    </div>
  );
}
