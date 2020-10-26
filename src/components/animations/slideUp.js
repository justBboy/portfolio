import gsap from 'gsap';
import { Power1 } from 'gsap'

const slideUp = elem => {
    gsap.from(elem, {
        yPercent: 500,
        duration: 1,
        ease: Power1.easeIn
    })
}

export default slideUp