import React from 'react';

/**
 * Standardized Success/Error feedback to ensure user trust after action
 */
export const FormStatusMessage = ({ type, message }) => {
  if (!message) return null;

  const styles = {
    padding: 'var(--space-4)',
    borderRadius: 'var(--radius-md)',
    marginBottom: 'var(--space-4)',
    fontSize: '0.9375rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    backgroundColor: type === 'success' ? 'rgba(37, 211, 102, 0.1)' : 'rgba(220, 38, 38, 0.1)',
    color: type === 'success' ? 'var(--clr-secondary-dark)' : 'var(--clr-emergency-dark)',
    border: \1px solid \\
  };

  return (
    <div style={styles} role="alert">
      <span>{type === 'success' ? '?' : '??'}</span>
      {message}
    </div>
  );
};

export const FieldError = ({ error }) => {
  if (!error) return null;
  return (
    <span style={{ 
      color: 'var(--clr-emergency-dark)', 
      fontSize: '0.8125rem', 
      marginTop: 'var(--space-1)',
      display: 'block' 
    }}>
      {error}
    </span>
  );
};
