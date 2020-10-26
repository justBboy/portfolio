import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@material-ui/core';


import gradualSlide from './animations/gradualSlide';



const CategoryPage = props => {
  const { slug } = useParams();
  let categoryList = useRef(null);
  const [categoryPost, setCategoryPost] = useState([]);
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    props.setCategoryTitle(slug);
    }, [])
    
    useEffect(() => {
      let temPosts = [];
      if(slug == 'all'){
        temPosts = props.posts;
      }
      else{
        props.posts.forEach(p => {
          for(let cat of p.categories){ 
            if(cat.feature == slug){
              temPosts.push(p)
              break;
            }
          }
        })
      }
      setCategoryPost(temPosts);
    }, [])

    useEffect(() => {
      if(!animationEnded) {
        let categoryListElements = Array.from(categoryList.childNodes);
        if(categoryListElements.length > 0) {
          categoryListElements.forEach((el, index) => gradualSlide(el, 1*index));
  
          setAnimationEnded(true);
        }
      }
    })

    const handleClick = (e, id) => {
        e.preventDefault();
    
        window.location.pathname = `/demos/${id}`;
      }
    return (
        <React.Fragment>
          <div className="category-list" ref={el => (categoryList = el)}>
            {
              
              categoryPost && categoryPost.map(post => (
                <a key={post.id} className="card-link" onClick={e => handleClick(e, post.id)} href="">
                  <Card className="card">
                  <div className="card-header">
                    <h2 className="card-title">{post.title}</h2>
                    <ul className="list-elements">
                      {
                        post.categories.map(category => <li className="list-element" key={category.id}>{category.feature}</li>)
                      }
                    </ul>
                  </div>
                  <div className="card-img">
                    <img src={'http://localhost:1337'+post.images[0].formats.small.url} width="100%" height="100%" />
                  </div>
                  </Card>
                </a>
              ))
              /* categoryPost && categoryPost.map(post => (
                <a key={post.id} className="card-link" onClick={e => handleClick(e, post.id)} href="">
                  <Card className="card">
                  <div className="card-header">
                    <h2 className="card-title">{post.title}</h2>
                    <ul className="list-elements">
                      {
                        post.categories.map(category => <li className="list-element" key={category.id}>{category.feature}</li>)
                      }
                    </ul>
                  </div>
                  <div className="card-img">
                    <img src={'http://localhost:1337'+post.images[0].formats.small.url} width="100%" height="100%" />
                  </div>
                  </Card>
                </a>
              )) */              
            }
            </div>
        </React.Fragment>
    )
}

export default CategoryPage;