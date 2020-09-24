import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';
import StarsBackground from '../StarsBackground';
import * as styles from './styles';

const CloudsSection = () => {
  return (
    <div>
      <StarsBackground />

      <ParallaxLayer offset={0} speed={0}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_six.png'}
          alt="large cloud"
          style={styles.cloudSixStyles}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_one.png'}
          alt="large cloud"
          style={styles.cloudOneStyles}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <img
          src={process.env.PUBLIC_URL + 'cloud_two.png'}
          alt="large cloud"
          style={styles.cloudTwoStyles}
        />
      </ParallaxLayer>
    </div>
  );
};

export default CloudsSection;
