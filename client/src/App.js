import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Landing from './Landing';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Products from './Products';
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
        description: ''
      },
      {
        name: 'Viserion',
        image: '../public/img/dragons/dragon3.png',
        description: ''
      },
      {
        name: 'Puff',
        image: '../public/img/dragons/dragon4.png',
        description: "Some of our staff say he's magical. We'll leave that up to you to decide. He is laid-back in nature but loves to spend time with his friends."
      },
      {
        name: 'Smaug',
        image: '../public/img/dragons/dragon5.png',
        description: ''
      },
      {
        name: 'Drogon',
        image: '../public/img/dragons/dragon6.png',
        description: ''
      }
    ]

    let theUser = this.state.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <div>
          <UserProfile user={theUser} logout={this.logout} />
          <Navbar />
          <Landing />
          <Products />
          <Gallery dragons={dragons} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <div id="loginSignup">
            <Signup liftToken={this.liftTokenToState} />
            <Login liftToken={this.liftTokenToState} />
          </div>
          <Navbar />
          <Landing />
          <Products />
          <Gallery dragons={dragons} />
        </div>
      )
    }
  }
}

export default App;
