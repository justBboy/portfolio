import gsap from 'gsap';


const slideRight = elem => {
    gsap.from(elem, {
        xPercent: -300,
        duration: 0.5,
        ease: 'back'
    })
}

export default slideRight