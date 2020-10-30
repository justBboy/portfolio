import React from "react";
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useHistory } from "react-router-dom";



const LeftSidebar = props => {
  const history = useHistory();
  const smallerScreen = useMediaQuery('(max-width: 550px)');

  function handleCategoryLinkMobile(e, link) {
    history.push(link);
  }

  return (
      <React.Fragment>
        {
          !smallerScreen ?
          <div className="left-sidebar">
            <h4 className="left-sidebar-header-text">pick your category</h4>
            <div className="rule"></div>
            <div>
            <a href={`/portfolio/demos/categories/all`} className="category-link">All</a>
                {
                  !!props.categories.length && props.categories.map(category => <Link to={`/portfolio/demos/categories/${category.feature}`} className="category-link" key={category.id} >{category.feature}</Link>)
                }
            </div>
        </div>
        :
        <div className="category-links-mobile">
          {
                  !!props.categories.length && props.categories.map(category => <Button onClick={e => handleCategoryLinkMobile(e, `/portfolio/demos/categories/${category.feature}`)} variant="contained" key={category.id}>{category.feature}</Button>)
              }
        </div>
        }
      </React.Fragment>
        
  );
};

export default LeftSidebar;
