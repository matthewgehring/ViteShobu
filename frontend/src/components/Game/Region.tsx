import * as React from 'react';

const Region = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1 bg-brown">
      {Array.from({ length: 16 }, (_, i) => (
        <div key={i} className="h-12 w-12 border border-black rounded-md"></div>
      ))}
    </div>
  );
};

export default Region;