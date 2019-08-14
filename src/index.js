import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Users from './component/users'
import Contact from './component/contact'
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import phone from './component/layout/images/phone.png';
import message from './component/layout/images/message.png';
import logo from './component/layout/images/logo.png';


const routing = (
  <Router>
  <Header/>
<header id="header" role="banner">
    <div class="top_header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="header_nav">
                    <ul class="nav navbar-nav">
                        <li><a href="#">
                        <img src={phone} alt="phone"/> <b>Contact:</b> 1-800-915-62701</a></li>
                        <li><a href="#"><img src={message} alt="message"/> <b>Email:</b> medicalschoolquizzes@gmail.com</a></li>
                    </ul>
                    <ul class="nav navbar-nav"><li><a href="#">Login</a></li> 
                    <li><a>|</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
                </div>
                </div>
              
        </div>
    </div>
</div>

    <div id="navbar" class="main_head navbar navbar-default"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button><div class="container">  
    
        <div class="navbar-header">
            
            <a class="navbar-brand" href="#"><img src={logo} alt="logo"/></a> 
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><Link to="/">Home</Link></li>
                     <li><Link to="/users">Members</Link></li> 
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </header>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Footer/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
