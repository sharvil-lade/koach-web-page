// src/components/BorderWrapper.jsx
import React from 'react';

const Border = ({ children }) => {
  return (
    <div className="border border-black h-full">
      {children}
    </div>
  );
}

export default Border;
