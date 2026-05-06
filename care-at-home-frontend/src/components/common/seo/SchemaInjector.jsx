import React from 'react';

/**
 * Reusable component to safely inject JSON-LD schema into the DOM.
 * Takes a pre-built schema object from schemaBuilders.js.
 */
const SchemaInjector = ({ schema }) => {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaInjector;
