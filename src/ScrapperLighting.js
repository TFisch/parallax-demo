import React from 'react';

const smallLightStyles = {
  background: '#FFC51C',
  height: '10px',
  width: '4px',
  borderColor: '#FFC51C',
  borderStyle: 'solid',
  borderWidth: '2px',
  position: 'absolute',
  zIndex: '9999',
  right: '740px',
  opacity: '.8'
};

const lightOne = { ...smallLightStyles, top: '190px' };
const lightTwo = { ...smallLightStyles, top: '210px' };
const lightThree = { ...smallLightStyles, top: '230px' };
const lightFour = { ...smallLightStyles, top: '250px' };
const lightFive = { ...smallLightStyles, top: '270px' };

export default function ScrapperLighting(props) {
  return (
    <React.Fragment>
      <div
        class="scrapper-long-light"
        style={{
          background: '#FFC51C',
          height: '40px',
          width: '4px',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          borderColor: '#FFC51C',
          borderStyle: 'solid',
          borderWidth: '2px',
          position: 'absolute',
          zIndex: '999',
          top: '140px',
          right: '740px',
          opacity: '1'
        }}
      ></div>
      <div style={lightOne}></div>
      <div style={lightTwo}></div>
      <div style={lightThree}></div>
      <div style={lightFour}></div>
      <div style={lightFive}></div>
    </React.Fragment>
  );
}
