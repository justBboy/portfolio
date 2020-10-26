import gsap from 'gsap';
import { Power1 } from 'gsap';


const homePageTransition = elems => {
    const tl = gsap.timeline();
    tl.to(elems.leftContent, {
        xPercent: -300,
        duration: 0.1,
        ease: Power1.easeIn
    })
    tl.to(elems.rightContent, {
        opacity: 0,
        delay: 0.1,
        ease: Power1.easeInOut
    })

    return tl;
}

export default homePageTransition;