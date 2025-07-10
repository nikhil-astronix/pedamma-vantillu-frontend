import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <LoadingSpinner />
    </div>
  );
};

export default Loader; 