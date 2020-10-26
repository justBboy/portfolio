import React from "react";
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const LeftSidebar = props => {
  const smallerScreen = useMediaQuery('(max-width: 550px)');

  function handleCategoryLinkMobile(e, link) {
    window.location.pathname = link;
  }

  return (
      <React.Fragment>
        {
          !smallerScreen ?
          <div className="left-sidebar">
            <h4 className="left-sidebar-header-text">pick your category</h4>
            <div className="rule"></div>
            <div>
            <a href={`/demos/categories/all`} className="category-link">All</a>
                {
                  props.categories.map(category => <a href={`/demos/categories/${category.feature}`} className="category-link" key={category.id}>{category.feature}</a>)
                }
            </div>
        </div>
        :
        <div className="category-links-mobile">
          {
                  props.categories.map(category => <Button onClick={e => handleCategoryLinkMobile(e, `/demos/categories/${category.feature}`)} variant="contained" key={category.id}>{category.feature}</Button>)
              }
        </div>
        }
      </React.Fragment>
        
  );
};

export default LeftSidebar;
