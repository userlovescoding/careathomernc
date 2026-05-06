import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <Link to="/">[Return Home Placeholder]</Link>
    </div>
  );
};

export default NotFound;
