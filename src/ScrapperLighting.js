import React from 'react';

const smallLightStyles = {
  background: 'red',
  height: '10px',
  width: '4px',
  borderColor: '#FFC51C',
  borderStyle: 'solid',
  borderWidth: '2px',
  position: 'absolute',
  zIndex: '9999',
  top: `${(props) => (props.top ? props.top : '210px')}`,
  right: '740px',
  opacity: '1'
};

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
      <div style={smallLightStyles} top="210px"></div>
    </React.Fragment>
  );
}
