import React from 'react';

 const Landing = (props) => {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">Welcome to Dragons 'R Us</div>
            <div className="intro-lead-in">The online resoure for purchasing and styling your fire-breathing pets</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Sign Up</a>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">See What We Do</a>
            {props.loginButton}
          </div>
        </div>
      </header>
    )
  }

  export default Landing;
