import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';

const backgroundFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 59%, rgba(27,0,255,1) 100%)`;
const topFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 100%)`;
const bottomFade = `linear-gradient(180deg, rgba(9,44,121,1) 0%, rgba(9,44,121,1) 43%, rgba(49,66,116,1) 91%)`;

class ParallaxDemo extends Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={2}>
        <ParallaxLayer offset={0} speed={0}>
          <div
            style={{
              height: '100%',
              width: '100%',
              background: topFade
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
          <div
            style={{
              height: '100%',
              width: '100%'
              // background: bottomFade
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
          <img
            src={process.env.PUBLIC_URL + 'circle.svg'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100%',
              marginLeft: '420px',
              width: '200px',
              height: '200px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{ opacity: 0.9, width: '100%' }}
        >
          <img
            src={process.env.PUBLIC_URL + 'buildings_sill.svg'}
            style={{ display: 'block', width: '100%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0}
          style={{ opacity: 1, width: '100%' }}
        >
          <img
            src={process.env.PUBLIC_URL + 'city_sill.svg'}
            style={{ display: 'block', width: '100%' }}
          />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default ParallaxDemo;
