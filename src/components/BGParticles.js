import React from 'react';
import Particles from 'react-particles-js';

import background from './assets/background.png';

console.log(background);

const BGParticles = () => {
    return (
        <Particles height='100vh' width='100vw' params={{
            particles: {
                line_linked: {
                    shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 2
                    }
                }
            }
        }} className="bg-particles" />
    )
}

export default BGParticles;