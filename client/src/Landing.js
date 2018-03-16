import React from 'react';

 const Landing = (props) => {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">Welcome to Dragons 'R Us</div>
            <div className="intro-lead-in">The online resoure for purchasing and styling your fire-breathing pets</div>
            {props.signupButton}
            <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id='landingButton1' href="#services">See What We Do</button>
            {props.loginButton}
            <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" onClick={props.logout}>Log Out! </button>
          </div>
        </div>
      </header>
    )
  }

  export default Landing;
