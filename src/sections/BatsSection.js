import React from 'react';
import { ParallaxLayer } from 'react-spring/addons';
import * as styles from './styles';

const BatsSection = () => {
  return (
    <div>
      <ParallaxLayer offset={1} speed={0.25} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_two.png'}
          style={styles.batTwoStyles}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_four.png'}
          style={styles.batFourStyles}
          alt="a bat flying in the night sky"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.15} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_one.png'}
          alt="bat flying upwards"
          style={styles.batOneStyles}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_five.png'}
          style={styles.batFiveStyles}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_three.png'}
          style={styles.batThreeStyles}
          alt="a bat flying in the night sky"
        />
        <img
          src={process.env.PUBLIC_URL + 'bat_group_one.png'}
          style={styles.batGroupOneStyles}
          alt="a group of bats flying in the night sky"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} style={{ opacity: 0.8 }}>
        <img
          src={process.env.PUBLIC_URL + 'bat_group_two.png'}
          style={styles.batGroupTwoStyles}
          alt="a group of bats flying in the night sky"
        />
      </ParallaxLayer>
    </div>
  );
};

export default BatsSection;
