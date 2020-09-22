import React from 'react';

const StarsBackground = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '10px',
          height: '20px',
          position: 'absolute',
          top: '300px',
          left: '300px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '5px',
          height: '10px',
          position: 'absolute',
          top: '270px',
          left: '600px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '5px',
          height: '10px',
          position: 'absolute',
          top: '240px',
          left: '800px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '25px',
          height: '60px',
          position: 'absolute',
          top: '160px',
          left: '100px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '25px',
          height: '50px',
          position: 'absolute',
          top: '300px',
          left: '1100px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '25px',
          height: '50px',
          position: 'absolute',
          top: '300px',
          left: '1100px'
        }}
        alt="a star shining in the distance"
      />
      <img
        src={process.env.PUBLIC_URL + 'circle.svg'}
        style={{
          display: 'block',
          width: '20px',
          height: '40px',
          position: 'absolute',
          top: '360px',
          right: '200px'
        }}
        alt="a star shining in the distance"
      />
    </div>
  );
};

export default StarsBackground;
