import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import StarsBackground from './StarsBackground';
const backgroundFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 59%, rgba(27,0,255,1) 100%)`;
const topFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 100%)`;
const bottomFade = `linear-gradient(180deg, rgba(9,44,121,1) 0%, rgba(9,44,121,1) 43%, rgba(49,66,116,1) 91%)`;

class ParallaxDemo extends Component {
  render() {
    return (
      <Parallax
        ref={(ref) => (this.parallax = ref)}
        pages={2}
        style={{ backgroundImage: topFade }}
      >
        <ParallaxLayer offset={0} speed={0}>
          <StarsBackground />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <img
            src={process.env.PUBLIC_URL + 'cloud_one.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '600px',
              height: '200px',
              position: 'absolute',
              top: '340px',
              left: '800px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <img
            src={process.env.PUBLIC_URL + 'cloud_two.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '600px',
              height: '200px',
              position: 'absolute',
              top: '270px',
              left: '10px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
          <div
            style={{
              height: '100%',
              width: '100%'
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} style={{ opacity: 0.8 }}>
          <img
            src={process.env.PUBLIC_URL + 'circle.svg'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100%',
              width: '200px',
              height: '200px',
              position: 'absolute',
              top: '300px',
              left: '300px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ opacity: 0.9, width: '100%', marginTop: '300px' }}
        >
          <img
            src={process.env.PUBLIC_URL + 'buildings_sill.svg'}
            style={{ display: 'block', width: '100%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-0}
          style={{
            opacity: 1,
            width: '100%',
            marginTop: '110px',
            marginLeft: '100px'
          }}
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
