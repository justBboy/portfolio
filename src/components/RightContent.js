import React, { useRef, useEffect} from 'react';

import storyImageAnime from './animations/storyImageAnime';

// asset import
import bboy from './assets/bboy.png';

const RightContent = () => {
    let img = useRef(null);
    useEffect(() => {
        storyImageAnime(img);
    }, [])

    return (
        <img src={bboy} ref={(el) => (img=el)} width="100%" height="100%" alt="bboy's image" />
    )
}

export default RightContent;