import React from 'react'
import {PostData} from '../services/PostData';
import toaster from "toasted-notes";
import login_image from '../component/layout/images/login.png';
import "toasted-notes/src/styles.css"; // optional styles

class Signup extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    full_name: '',
    email: '',
    phone: '',
    password: '',
  }
}


handleFormSubmit = e => {
  e.preventDefault();

  PostData('register',this.state).then((result) => {
    let responseJson = result.data;

       toaster.notify(responseJson.message, {
              position: "top-right", // top-left, top, top-right, bottom-left, bottom, bottom-right
              duration: 2000 // This notification will not automatically close
        });

        if (responseJson.status===true)
        {
             setTimeout(function() {
                    location.reload();
             }, 2000);
        }

    });
}



  render() {
    return  <section id="login" class="login_register">
    <div class="container">
        <div class="box">
            <div class="row">

            <div class="col-sm-7">
                <div class="loginimg">
                    <img src={login_image} class="img-responsive" alt="Login Logo"/>
                </div>
            </div>
            <div class="col-sm-5">
            	<div class="row">
                     <div class="login_head">
                        <h3>Create <span>account</span></h3>
                    </div>
             	</div>

                    <form action="#" role="form" class="form-horizontal" method="post">

                            <div class="form-group">
                            	<label>Full Name</label>
                                <input type="text" name="user_name" id="user_name" placeholder="Full Name *" class="form-control" value={this.state.full_name}
                               onChange={e => this.setState({ full_name: e.target.value })}  required="required" />
                               </div>

                            <div class="form-group">
                            <label>Email</label>
                                <input type="text" name="user_email" id="user_email" type="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="you@domain.com" placeholder="Email address *" class="form-control" required="required" value={this.state.email}
                               onChange={e => this.setState({ email: e.target.value })} />
                             </div>

                            <div class="form-group">
                           		 <lable>Phone</lable>
                                <input type="text" name="user_phone" id="user_phone" pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$" title="Enter Valid Phone Number" minlength="10" maxlength="10" placeholder="Phone Number" class="form-control" value={this.state.phone}
                               onChange={e => this.setState({ phone: e.target.value })}/>
                             </div> 
                           
                                                  
                            <div class="form-group">
                            	<label>Password</label>
                                <input type="password" name="user_pass" id="user_pass" placeholder="Password * (Minimum 6 character)" class="form-control" required="required" value={this.state.password}
                               onChange={e => this.setState({ password: e.target.value })} />
                             </div>
                          
                            <div class="form-group">
                                <button type="submit" class="btn btn-warning btn-lg btn-block" onClick={e => this.handleFormSubmit(e)}>SIGNUP</button>
                            </div></form>

                            <p class="login_foot text-center">By continuing you agree to Medical School Quizzes <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Privacy Policy. </a></p>
                   <p class="login_foot text-center">Already have an account?   <a href="#"> Login Here!</a></p>
                    </div>
            </div>
            </div>

                </div>
	</section>
  }
}

export default Signup