import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Landing from './Landing';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Products from './Products';
import About from './About';
import Team from './Team';
import { UserProfile } from './UserProfile';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data) {
    console.log("THIS LIFTS TOKEN TO STATE")
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log("Logging out")
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: {}})
  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      axios.post('/auth/me/from/token', {
        token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch( err => console.log(err) )
    }
  }

  render() {

    let dragons = [
      {
        name: 'Toothless',
        image: '../public/img/dragons/dragon1.png',
        description: 'A fun-loving dragon who enjoys eating fish and plummeting from the sky at high speeds. A great companion and riding dragon. Just make sure to hold on tight!'
      },
      {
        name: 'Rhaegal',
        image: '../public/img/dragons/dragon2.png',
        description: 'Rhaegal was one of three dragon pups, he was rescued when his mother emigrated to a land across the sea. He needs a firm hand but will be loyal when you gain his trust.'
      },
      {
        name: 'Viserion',
        image: '../public/img/dragons/dragon3.png',
        description: 'Viserion was rescued as an egg and later hatched after being incubated in flames with a queen. After a tough life, he found his way to a shelter...he has been living in a cold climate as of late, so he needs just the right cave man or woman to bring him back to life!'
      },
      {
        name: 'Puff',
        image: '../public/img/dragons/dragon4.png',
        description: "Some of our staff say he's magical. We'll leave that up to you to decide. He is laid-back in nature but loves to spend time with his friends."
      },
      {
        name: 'Smaug',
        image: '../public/img/dragons/dragon5.png',
        description: "Smaug loves shiny objects. Gold, jewels, you name it. Learn some witchcraft called alchemy and he'll be your friend for life."
      },
      {
        name: 'Drogon',
        image: '../public/img/dragons/dragon6.png',
        description: "Drogon is another one of our rescued dragons. He has had ups and downs but at one point lived with royalty. Anyone would be lucky to have him as a companion - just keep your hands to yourself and don't make eye contact."
      }
    ]

    let theUser = this.state.user
    console.log('this is in app.js:', theUser)
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <div>
          <UserProfile user={theUser} logout={this.logout} />
          <Navbar user={theUser} logout={this.logout}/>
          <Landing user={theUser} logout={this.logout}/>
          <Products />
        </div>
      )
    } else {

      let loginButton = <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" 
          data-toggle="modal" data-target="#loginModal" data-backdrop="false">Log In</button>
      let signupButton = <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" 
          data-toggle="modal" data-target="#signupModal" data-backdrop="false">Sign Up</button>
      

      return (
        <div className="App">
          <div id="loginSignup">
            <Signup liftToken={this.liftTokenToState} />
            <Login liftToken={this.liftTokenToState} />
          </div>
          <Navbar />


          <Landing loginButton={loginButton} signupButton={signupButton} user={theUser} logout={this.logout}/>
           <Products />

        </div>
      )
    }
  }
}

export default App;
