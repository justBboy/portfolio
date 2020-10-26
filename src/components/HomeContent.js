import React, { useRef, useEffect } from "react";

// component imports
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

import homePageTransition from './animations/homePageTransition';

// css imports
import "./css/components.css";

// asset imports
import nextArrow from "./assets/next-arrow.svg";

const HomeContent = props => {
  let leftContent = useRef(null);
  let rightContent = useRef(null);
  
  useEffect(() => {
    props.setCurrentPage(window.location.pathname);
  }, [])

  const handleLinkClick = (e, dest) => {
    e.preventDefault();
    let elems = {leftContent, rightContent}
    let animation = homePageTransition(elems)

    animation.eventCallback('onComplete', () => {
      window.location.pathname = dest;
    })
  }
  return (
    <div className="content">
      <div className="main-content">
        <a onClick={e => {handleLinkClick(e, '/demos')}} href="/demos">
          <img src={nextArrow} className="next-arrow arrow" alt="next arrow" />
        </a>
        <div ref={el => (leftContent = el)} className="left-content">
          <LeftContent open={props.open} setOpen={props.setOpen} />
        </div>
        <div ref={el => (rightContent = el)} className="right-content">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
