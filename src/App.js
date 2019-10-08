import React, { Component } from 'react';
import { Link  } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <section id="main-slider" class="carousel">
          <div class="carousel-inner">
                <div class="item active">
                  <div class="container">
                      <div class="carousel-content">
                          <h1>A COMMUNITY FOR <span>MEDICAL</span> STUDENTS	</h1>
                          <p class="lead">Medicalschoolquizzes.com provides a platform for rapid review of key concepts for all students of he...
                          <br/>
                          <Link to="/contact">Join Today!</Link>
                          </p>
                      </div>
                  </div>
              </div>
                <div class="item">
                  <div class="container">
                      <div class="carousel-content">
                          <h1> We provides a platform for <span>rapid review</span> of key concepts	</h1>
                          <p class="lead">Medicalschoolquizzes.com provides a platform for rapid review of key concepts for all students of he...
    <br/>
    <a href="#">Join Today!</a>
    </p>
                      </div>
                  </div>
              </div>
                      </div>
                <a class="prev" href="#main-slider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
                <a class="next" href="#main-slider" data-slide="next"><i class="fa fa-angle-right"></i></a> 
        </section>
     
    )
  }
}

export default App;
