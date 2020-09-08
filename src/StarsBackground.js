import React from 'react';

const StarsBackground = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          zIndex: -1,
          display: 'block',
          width: '10px',
          height: '20px',
          position: 'absolute',
          top: '300px',
          left: '300px'
        }}
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          zIndex: -1,
          display: 'block',
          width: '5px',
          height: '10px',
          position: 'absolute',
          top: '270px',
          left: '600px'
        }}
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          zIndex: -1,
          display: 'block',
          width: '5px',
          height: '10px',
          position: 'absolute',
          top: '240px',
          left: '800px'
        }}
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          zIndex: -1,
          display: 'block',
          width: '25px',
          height: '60px',
          position: 'absolute',
          top: '160px',
          left: '100px'
        }}
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          zIndex: -1,
          display: 'block',
          width: '25px',
          height: '50px',
          position: 'absolute',
          top: '300px',
          left: '1100px'
        }}
      />
    </div>
  );
};

export default StarsBackground;
