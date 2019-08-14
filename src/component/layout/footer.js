import React, {Component} from 'react';
import logo from './images/logo.png';

class Footer extends Component {
    render(){
        return (
            <footer>
                <div class="top_footer">
    <div class="container">
<div class="socila_icons">
    <ul>
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
    </ul>
</div>
</div>
    <div class="container">
        <div class="col-sm-4">
            <img src={logo} class="main-logo img-responsive" alt="logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget loved venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor no amet dolor. Proin pretium p</p>
        </div>
        <div class="col-sm-2">
            <h4>General Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">Login </a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="col-sm-2">
            <h4>General Links</h4>
            <ul>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Lorem ipsum </a></li>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Lorem ipsum</a></li>
            </ul>
        </div>
        <div class="col-sm-4 newsletter">
            <h4>Newsletter</h4>
            <form>
                <input type="text" class="form-control" placeholder="Enter your mail here" />
                <button type="Submit" class="custom-btn">Subscribe</button>
            </form>
        </div>
        </div>
        
    </div>
    <div class="copyright text-center">Copyright 2019. All right reserved</div>
</footer>


        )
    }
}

export default Footer