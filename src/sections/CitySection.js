import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';
import * as styles from './styles';

const CitySection = () => {
  return (
    <div>
      <ParallaxLayer offset={2} speed={0.75} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'circle.svg'}
          style={styles.moonStyles}
          alt="A full moon"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5} style={styles.buildingSilWrapper}>
        <img
          src={process.env.PUBLIC_URL + 'buildings_sill.svg'}
          style={styles.buildingSil}
          alt="silhouette of city buildings"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0} style={styles.backgroundWrapper}>
        <img
          src={process.env.PUBLIC_URL + 'city_sill.svg'}
          style={styles.backgroundSil}
          alt="silhouette of city buildings"
        />
      </ParallaxLayer>
    </div>
  );
};

export default CitySection;
