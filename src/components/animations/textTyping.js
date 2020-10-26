import Typed from "typed.js";
import slideUp from './slideUp';

const textTyping = (elem, slideUpElem) => {
    slideUpElem.style.display = 'none';
  new Typed(elem, {
    typeSpeed: 30,
    backSpeed: 10,
    strings: [
      "Hi, my name is Asare Tutu Yaw. I am a Programmer. Since childhood I have always been the guy behind the pc as it always has been something that gives me meaning and purpose. I'm a very passionate programmer who doesn't just like what he does but really does it well",
    ],
    onComplete: () => {
        slideUpElem.style.display = 'block';
        slideUp(slideUpElem);
    }
  });
};

export default textTyping;
