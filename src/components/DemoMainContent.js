import React, { useState, useEffect} from "react";



import CategoryPage from './CategoryPage';



const DemoMainContent = props => {
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if(window.location.pathname == '/portfolio/demos') {
      setCategoryTitle('All');
    }

    return () => setCategoryTitle('');
  }, [])

  return (
    <div className="demo-main-content">
      <h1 className="category-title">{`${categoryTitle}`}</h1>
        
       <CategoryPage setCategoryTitle={setCategoryTitle} posts={props.posts} />
    </div>
  );
};

export default DemoMainContent;
