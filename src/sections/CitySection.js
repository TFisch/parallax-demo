import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';

const moonStyles = {
  display: 'block',
  width: '200px',
  height: '200px',
  position: 'absolute',
  bottom: '600px',
  left: '300px'
};

const buildingSilWrapper = {
  opacity: 0.9,
  width: '100%',
  marginTop: '200px'
};

const buildingSil = {
  display: 'block',
  width: '100%'
};

const backgroundWrapper = {
  opacity: 1,
  width: '100%',
  marginTop: '110px',
  marginLeft: '100px',
  position: 'relative'
};

const backgroundSil = {
  display: 'block',
  width: '100%'
};

const CitySection = () => {
  return (
    <div>
      <ParallaxLayer offset={2} speed={0.75} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'circle.svg'}
          style={moonStyles}
          alt="A full moon"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5} style={buildingSilWrapper}>
        <img
          src={process.env.PUBLIC_URL + 'buildings_sill.svg'}
          style={buildingSil}
          alt="silhouette of city buildings"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0} style={backgroundWrapper}>
        <img
          src={process.env.PUBLIC_URL + 'city_sill.svg'}
          style={backgroundSil}
          alt="silhouette of city buildings"
        />
      </ParallaxLayer>
    </div>
  );
};

export default CitySection;
