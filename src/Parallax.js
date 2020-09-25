import React, { Component } from 'react';
import { Parallax } from 'react-spring/addons';

import BatsSection from './sections/BatsSection';
import CitySection from './sections/CitySection';
import CloudsSection from './sections/CloudsSection';

const topFade = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,25,121,1) 100%)`;

class ParallaxDemo extends Component {
  render() {
    return (
      <Parallax
        ref={(ref) => (this.parallax = ref)}
        pages={3}
        style={{ backgroundImage: topFade }}
      >
        <CloudsSection />
        <BatsSection />
        <CitySection />
      </Parallax>
    );
  }
}

export default ParallaxDemo;
