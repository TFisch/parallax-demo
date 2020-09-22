import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';
import StarsBackground from '../StarsBackground';

const CloudsSection = () => {
  return (
    <div>
      <StarsBackground />

      <ParallaxLayer offset={0} speed={0}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_six.png'}
          alt="large cloud"
          style={{
            display: 'block',
            width: '500px',
            height: '300px',
            position: 'absolute',
            top: '100px',
            right: '300px'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_one.png'}
          alt="large cloud"
          style={{
            display: 'block',
            width: '600px',
            height: '200px',
            position: 'absolute',
            top: '540px',
            left: '800px'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_two.png'}
          alt="large cloud"
          style={{
            display: 'block',
            width: '600px',
            height: '200px',
            position: 'absolute',
            top: '400px',
            left: '10px'
          }}
        />
      </ParallaxLayer>
    </div>
  );
};

export default CloudsSection;
