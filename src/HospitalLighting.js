import React from 'react';

const HospitalLighting = () => {
  const lightWrapper = {
    width: '115px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    justifyContent: 'space-between',
    top: '280px',
    right: '390px',
    zIndex: '99999',
    // background: 'pink',
    transform: 'rotate(-12deg)'
  };

  const lightRow = {
    height: '6px',
    background: 'yellow',
    width: '100%',
    border: 'solid black 1px',
    opacity: '.7'
  };

  return (
    <div style={lightWrapper}>
      <div style={lightRow}></div>
      <div style={lightRow}></div>
      <div style={lightRow}></div>
      <div style={lightRow}></div>
    </div>
  );
};

export default HospitalLighting;
