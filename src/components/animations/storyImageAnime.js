import gsap from 'gsap';


const storyImageAnime = elem => {
    gsap.from(elem, {
        opacity: 0,
        yPercent: -5,
        duration: 10,
        ease: 'back'
    })
}

export default storyImageAnime