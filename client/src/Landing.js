import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  if (typeof this.props.user === 'object' && Object.keys(this.props.user).length > 0) {
       return (
          <header className="masthead">
            <div className="container">
              <div className="intro-text">
                <div className="intro-heading text-uppercase">Welcome to Dragons 'R Us</div>
                <div className="intro-lead-in">The online resoure for purchasing and styling your fire-breathing pets</div>
                <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id='landingButton1' href="#services">See What We Do</button>
                <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" onClick={this.props.logout}>Log Out! </button>
              </div>
            </div>
          </header>
        )
   
  } else  {
       return (
          <header className="masthead">
            <div className="container">
              <div className="intro-text">
                <div className="intro-heading text-uppercase">Welcome to Dragons 'R Us</div>
                <div className="intro-lead-in">The online resoure for purchasing and styling your fire-breathing pets</div>
                {this.props.signupButton}
                <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id='landingButton1' href="#services">See What We Do</button>
                {this.props.loginButton}
              </div>
            </div>
          </header>
        )
     }  
    }
}

export default Landing;