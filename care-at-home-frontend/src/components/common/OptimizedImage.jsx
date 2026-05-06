import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, width, height, loading = 'lazy' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ 
      position: 'relative', 
      overflow: 'hidden',
      width: width || '100%',
      height: height || 'auto',
      backgroundColor: 'var(--clr-bg-alt)' 
    }} className={className}>
      
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'var(--clr-bg-alt)',
          animation: 'pulse 1.5s infinite ease-in-out'
        }}></div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <style>{
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      }</style>
    </div>
  );
};

export default OptimizedImage;
