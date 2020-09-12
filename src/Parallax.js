import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import StarsBackground from './StarsBackground';
import ScrapperLighting from './ScrapperLighting';
const topFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 100%)`;

class ParallaxDemo extends Component {
  render() {
    return (
      <Parallax
        ref={(ref) => (this.parallax = ref)}
        pages={3}
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
              top: '480px',
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
              top: '400px',
              left: '10px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ opacity: 0.8 }}>
          <img
            src={process.env.PUBLIC_URL + 'bat_one.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '300px',
              right: '200px',
              transform: 'scaleX(-1) rotate(35deg)'
            }}
          />
          <img
            src={process.env.PUBLIC_URL + 'bat_two.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '450px',
              right: '400px',
              transform: 'rotate(15deg)'
            }}
          />
          <img
            src={process.env.PUBLIC_URL + 'bat_four.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '400px',
              left: '400px',
              transform: 'rotate(15deg)',
              border: 'solid pink 1px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.8 }}>
          <img
            src={process.env.PUBLIC_URL + 'bat_one.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '400px',
              left: '200px',
              transform: 'scaleX(-1) rotate(35deg)'
            }}
          />
          <img
            src={process.env.PUBLIC_URL + 'bat_five.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '500px',
              left: '800px',
              transform: 'scaleX(-1) rotate(35deg)'
            }}
          />
          <img
            src={process.env.PUBLIC_URL + 'bat_three.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '200px',
              left: '800px',
              transform: 'scaleX(-1) rotate(35deg)'
            }}
          />
          <img
            src={process.env.PUBLIC_URL + 'bat_group_one.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100px',
              height: '100px',
              position: 'absolute',
              top: '200px',
              right: '800px',
              transform: 'scaleX(-1) rotate(35deg)'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.8 }}>
          <div
            style={{
              height: '100%',
              width: '100%'
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0} style={{ opacity: 0.7 }}>
          <img
            src={process.env.PUBLIC_URL + 'bat.png'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100%',
              width: '200px',
              height: '200px',
              position: 'absolute',
              bottom: '400px',
              left: '300px'
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.8 }}>
          <img
            src={process.env.PUBLIC_URL + 'circle.svg'}
            style={{
              zIndex: -1,
              display: 'block',
              width: '100%',
              width: '200px',
              height: '200px',
              position: 'absolute',
              bottom: '600px',
              right: '300px'
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{ opacity: 0.9, width: '100%', marginTop: '300px' }}
        >
          <img
            src={process.env.PUBLIC_URL + 'buildings_sill.svg'}
            style={{ display: 'block', width: '100%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
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
            style={{
              display: 'block',
              width: '100%'
            }}
          />

          <ScrapperLighting />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default ParallaxDemo;
