import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { transitions, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// component imports
import Nav from "./components/Nav";
import HomeContent from "./components/HomeContent";
import DemoContent from "./components/DemoContent";
import Footer from "./components/Footer";
import BGParticles from "./components/BGParticles";
import SingleDemo from "./components/SingleDemo";

//css imports
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [posts, setPosts] = useState([]);
  const [open, setOpen ] = React.useState(false);

  useEffect(() => {
    fetch("https://ancient-scrubland-15155.herokuapp.com/demoposts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });

    return () => setPosts([]);
  }, []);

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>

    <div className="App">
      <Router>
        <BGParticles />
        <Nav currentPage={currentPage} open={open} setOpen={setOpen} />
        <Switch>
          <Route exact path="/demos">
            <Redirect to="/demos/categories/all" />
          </Route>
          
          <Route
            path="/demos/categories/:slug"
            component={() => (
              <DemoContent setCurrentPage={setCurrentPage} posts={posts} />
            )}
          />
          <Route
            path="/demos/:id"
            component={() => <SingleDemo posts={posts} />}
          />
          <Route
            path="/"
            exact={true}
            component={() => <HomeContent open={open} setOpen={setOpen} setCurrentPage={setCurrentPage} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
    </AlertProvider>
  );
}

export default App;
