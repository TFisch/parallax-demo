import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';

const BatsSection = () => {
  return (
    <div>
      <ParallaxLayer offset={1} speed={0.25} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_two.png'}
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '450px',
            right: '400px',
            transform: 'rotate(15deg)'
          }}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_four.png'}
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '400px',
            left: '400px',
            transform: 'rotate(15deg)'
          }}
          alt="a bat flying in the night sky"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.15} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_one.png'}
          alt="bat flying upwards"
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '300px',
            left: '200px',
            transform: 'scaleX(-1) rotate(35deg)'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_five.png'}
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '500px',
            right: '100px',
            transform: 'scaleX(-1) rotate(35deg)'
          }}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_three.png'}
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '200px',
            left: '800px',
            transform: 'scaleX(-1) rotate(35deg)'
          }}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_group_one.png'}
          style={{
            display: 'block',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '200px',
            right: '800px',
            transform: 'scaleX(-1) rotate(35deg)'
          }}
          alt="a group of bats flying in the night sky"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_group_two.png'}
          style={{
            display: 'block',
            width: '300px',
            height: '300px',
            position: 'absolute',
            top: '500px',
            right: '50%',
            transform: 'scaleX(-1)'
          }}
          alt="a group of bats flying in the night sky"
        />
      </ParallaxLayer>
    </div>
  );
};

export default BatsSection;
