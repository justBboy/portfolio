import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useParams } from "react-router-dom";

import { Button } from "@material-ui/core"; 


import './css/components.css';

const SingleDemo = (props) => {
  const { id } = useParams();
  const post = props.posts.filter(post => post.id == id)[0];

  function handleUrlClick(e) {
    e.preventDefault();

    window.open(post.url, '_blank');
  }

  return (
    <React.Fragment>
      {
        post ?
        <div className="single-demo">
      <h3 className="single-title">
        {post.title}
        <span className="visit-btn">
          <Button onClick={e => {handleUrlClick(e)}} variant="contained" color="primary">
            Visit
          </Button>
        </span>
      </h3>
        <AliceCarousel className="single-img" infinite={true} autoPlay autoPlayInterval="3000">
            {
              post.images.map(img => <img key={img.id} src={img.formats.small.url} className="slide-img" />)
            }
        </AliceCarousel>
      <div className="single-content">
        <p>
          {post.description}
        </p>
      </div>
    </div>
    :
    ''
      }
    </React.Fragment>
  );
};

export default SingleDemo;
