import React, { useEffect, useRef } from "react";
import { Modal } from 'react-responsive-modal';
import { Card, Button } from '@material-ui/core';

import { useAlert } from 'react-alert';

// css imports
import "./css/components.css";
import 'react-responsive-modal/styles.css';

const Nav = props => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const alert = useAlert();

  let bboyLink = useRef(null);
  let demosLink = useRef(null);

  useEffect(() => {
    switch(props.currentPage){
      case '/':
        bboyLink.classList.value = 'underline-1';
        break  
      case '/demos':
        demosLink.classList.value = 'underline-2';
        break
    }
  }, [props.currentPage])

  const handleLinkClick = (e, dest) => {
    e.preventDefault();
  
    window.location.pathname = dest
  }

  const leaveAMessageHandler = e => {
    e.preventDefault();

    props.setOpen(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      from: email,
      username,
      message
    }

    setMessage('');
    setEmail('');
    setUsername('');

    fetch('http://localhost:5000/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => {
      props.setOpen(false);
      alert.success(msg.message);
    })
    .catch(err => {
        props.setOpen(false);
        alert.error('There was an error, Please try again')
      }
    )
  }

  return (
    <React.Fragment>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link current">
            <a onClick={e => {handleLinkClick(e, '/')}} href="/">BBOY</a>
            <div ref={el => (bboyLink = el)} className=""></div>
          </li>
          <li className="nav-link right">
            <a className="btn-pink" onClick={e => leaveAMessageHandler(e)} href="/contact">Leave A Message</a>
          </li>
          <li className="nav-link right">
            <a onClick={e => {handleLinkClick(e, '/demos')}} href="/demos">DEMOS</a>
            <div ref={el => (demosLink = el)} className=""></div>
          </li>
        </ul>
      </nav>
      <Modal open={props.open} onClose={() => props.setOpen(false)} center>
          <Card>
            <form onSubmit={e => {handleFormSubmit(e)}} className="modal-form">
              <div className="form-area">
                <label>Username*: </label>
                <input type="text" onChange={e => setUsername(e.target.value)} value={username} required />
              </div>
              <div className="form-area">
                <label>Email*: </label>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email} required />
              </div>
              <div className="form-area">
                <label>Message*: </label>
                <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Card>
      </Modal>
    </React.Fragment>
  );
};

export default Nav;
