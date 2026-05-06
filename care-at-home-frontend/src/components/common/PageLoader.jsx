import React from 'react';

const PageLoader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      width: '100%',
      color: 'var(--clr-primary)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(15, 76, 129, 0.2)',
        borderTopColor: 'var(--clr-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style>{@keyframes spin { to { transform: rotate(360deg); } }}</style>
    </div>
  );
};

export default PageLoader;
