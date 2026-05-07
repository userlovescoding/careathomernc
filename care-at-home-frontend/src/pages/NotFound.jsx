import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div className="page-not-found" style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--clr-primary-dark, #333)' }}>
        {error ? "Oops! The page crashed." : "404 - Page Not Found"}
      </h1>
      
      {error ? (
        <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '20px', borderRadius: '8px', marginTop: '20px', border: '1px solid #ffcdd2' }}>
          <h3 style={{ marginBottom: '10px' }}>Diagnostic Error Log:</h3>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            {error.statusText || error.message}
          </p>
          <pre style={{ overflowX: 'auto', marginTop: '15px', fontSize: '0.85rem', lineHeight: '1.4' }}>
            {error.stack}
          </pre>
        </div>
      ) : (
        <p style={{ marginTop: '20px' }}>The URL you requested does not exist.</p>
      )}

      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={{ padding: '10px 20px', backgroundColor: 'var(--clr-primary, #0056b3)', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Attempt to Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;