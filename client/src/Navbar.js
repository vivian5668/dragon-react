import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
  	super(props)
  }
  render() {
  	console.log(this.props.user)
	if (this.props.user) {
		return (
		 	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
		      <div className="container">
		        <a className="navbar-brand js-scroll-trigger" href="#page-top">Dragon Shop</a>
		        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          Menu
		          <i className="fa fa-bars"></i>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav text-uppercase ml-auto">
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#services">Products & Services</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#portfolio">Catalog</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#about">About</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#team">Dragon Trainers</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
		            </li>
		       
		            <li className="nav-item">
			          <a className="nav-link js-scroll-trigger">Hello, {this.props.user.name}!</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link js-scroll-trigger" onClick={this.props.logout}>Logout</a>
			        </li>

		          </ul>
		        </div>
		      </div>
		    </nav>
	      )
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
		      <div className="container">
		        <a className="navbar-brand js-scroll-trigger" href="#page-top">Dragon Shop</a>
		        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          Menu
		          <i className="fa fa-bars"></i>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav text-uppercase ml-auto">
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#services">Products & Services</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#portfolio">Catalog</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#about">About</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#team">Dragon Trainers</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
		            </li>
				    <li className="nav-item">
			          <a className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#loginModal">Login</a>
			        </li>
		          </ul>
		        </div>
		      </div>
		    </nav>
	    )
	}
  }
}

export default Navbar


 








