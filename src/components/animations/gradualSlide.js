import gsap from 'gsap';


const gradualSlide = (elem, duration) => {
    gsap.from(elem, {
        xPercent: 300,
        duration,
        ease: 'back'
    })
}

export default gradualSlide;