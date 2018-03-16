import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log("THIS IS THE USER AND TOKEN")
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    })
  }

  render() {
    return (
      <div>
        <div id="signupModal" class="modal fade" role="dialog">
          <div class="modal-dialog">

            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Sign Up</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                
              </div>
              <div class="modal-body">
                  <div id='signupBox'>
                    <form onSubmit={this.handleSubmit}>
                      <div class="form-group"> 
                          <label for='nameSignup'>Name</label>
                          <br/>
                          <input type='text' id="nameSignup" value={this.state.name} onChange={this.handleNameChange} /><br />
                       </div> 
                       <div class="form-group">  
                          <label for='emailSignup'>Email</label>
                          <br/>
                          <input type='text' id='emailSignup' value={this.state.email} onChange={this.handleEmailChange} /><br />
                       </div>  
                       <div class="form-group"> 
                          <label for='passwordSignup'>Password</label>
                          <br/>
                          <input type='password' id='passwordSignup' value={this.state.password} onChange={this.handlePasswordChange} /><br />
                       </div> 
                       <button id="signupSubmitButton" type="submit" class="btn btn-primary">Signup</button>
                    </form>
                  </div>
              </div>
              <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Signup;
