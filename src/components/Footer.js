import React, {useRef, useEffect} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import slideRight from './animations/slideRight';


const Footer = () => {
    let socialArea = useRef(null);
    useEffect(() => {
        slideRight(socialArea);
    }, [])
    return (
        <div className="footer">
            <div className="social-area" ref={el => (socialArea = el)}>
                <ul className="social-icons" id="social-icons">
                    <li><a href="https://github.com/justBboy" target="_blank"><GitHubIcon /></a></li>
                    <li><a href="https://web.facebook.com/asare.tutu.56" target="_blank"><FacebookIcon /></a></li>
                    <li><a href="https://www.instagram.com/bornscience/?hl=en" target="_blank"><InstagramIcon /></a></li>
                    <li><a href="https://twitter.com/@justbboy3" target="_blank"><TwitterIcon /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;