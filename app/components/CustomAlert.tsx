"use client";

export default function CustomAlert({ message, type, onClose }: any) {
  if (!message) return null;

  return (
    <div className={`custom-alert ${type === 'error' ? 'alert-error' : 'alert-success'}`}>
      <span style={{ fontSize: '18px' }}>{type === 'error' ? '❌' : '✅'}</span>
      <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>{message}</p>
      <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '10px' }}>✕</button>
    </div>
  );
}