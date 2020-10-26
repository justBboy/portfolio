import React, {useEffect, useState } from "react";


// component imports
import LeftSidebar from './LeftSidebar';
import DemoMainContent from './DemoMainContent';

// css imports
import "./css/components.css";

const DemoContent = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    props.setCurrentPage(window.location.pathname);

    return () => props.setCurrentPage('');
  }, [])

  useEffect(() => {
    fetch('https://ancient-scrubland-15155.herokuapp.com/categories')
    .then(res => res.json())
    .then(posts => setCategories(posts))

    return () => setCategories([]);
  }, [])

  return (
      <div className="content">
          <LeftSidebar categories={categories} />
          <DemoMainContent posts={props.posts} />
      </div>
  );
};

export default DemoContent;
