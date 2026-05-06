import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyRender defers the rendering of heavy components (like Testimonials, FAQ) 
 * until they are about to enter the viewport, saving CPU cycles on initial load.
 */
const LazyRender = ({ children, threshold = 0.1, rootMargin = '200px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight: isVisible ? 'auto' : '100px' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyRender;
