import React, { useState, useEffect} from "react";



import CategoryPage from './CategoryPage';



const DemoMainContent = props => {
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if(window.location.pathname == '/demos') {
      setCategoryTitle('All');
    }

    return () => setCategoryTitle('');
  }, [])
  
  const handleClick = (e, id) => {
    e.preventDefault();

    window.location.pathname = `/demoposts/${id}`;
  }

  return (
    <div className="demo-main-content">
      <h1 className="category-title">{`${categoryTitle}`}</h1>
        
       <CategoryPage setCategoryTitle={setCategoryTitle} posts={props.posts} />
    </div>
  );
};

export default DemoMainContent;
