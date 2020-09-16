import React from 'react';

const StreetLight = () => {
  const streetLighting = {
    position: 'absolute',
    top: '40px',
    left: '120px',
    height: '15px',
    width: '13px',
    zIndex: '999999',
    background: 'yellow',
    transform: 'skew(40deg, -40deg) rotate(-30deg)',
    borderRadius: '6px'
  };
  return <div style={streetLighting}></div>;
};

export default StreetLight;
