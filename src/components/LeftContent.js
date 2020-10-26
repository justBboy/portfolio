import React, { useRef, useEffect} from 'react';
import { Button } from '@material-ui/core';

import textTyping from './animations/textTyping';

const LeftContent = props => {
    let textEl = useRef(null);
    let slideUpElem = useRef(null);

    useEffect(() => {
        textTyping(textEl, slideUpElem);
    }, [])

    function hireMeClick(e) {
        e.preventDefault();

        props.setOpen(true);
    }

    return (
            <React.Fragment>
                <div className="intro-area">
                    <h3 ref={el => (textEl = el)}></h3>
                </div>
                <div className="slide-up" ref={el => (slideUpElem = el)}>
                    <div className="knowledge-area">
                        <h2>Knowledge In</h2>
                        <div className="flex">
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>Nodejs</li>
                                <li>React</li>
                            </ul>
                            <ul>
                                <li>Jquery</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>Wordpress</li>
                                <li>Strapi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="hire-me-cont">
                        <Button onClick={e => hireMeClick(e)} variant="contained" className="hire-me-btn">Hire Me</Button>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default LeftContent;