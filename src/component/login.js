import React from 'react'
import {PostData} from '../services/PostData';
import toaster from "toasted-notes";
import {Redirect} from 'react-router-dom';
import login_image from '../component/layout/images/login.png';
import "toasted-notes/src/styles.css"; // optional styles

class Login extends React.Component {

constructor(props){
super(props);
this.state = {
    email: '',
    password: '',
    redirectToReferrer: false
};
}

handleFormSubmit = e => {
  e.preventDefault();

  PostData('login',this.state).then((result) => {
    let responseJson = result.data;

       toaster.notify(responseJson.message, {
              position: "top-right", // top-left, top, top-right, bottom-left, bottom, bottom-right
              duration: 2000 // This notification will not automatically close
        });

        if (responseJson.status===true)
        {
           sessionStorage.setItem('userData',JSON.stringify(responseJson));
            this.setState({redirectToReferrer: true});
            /* setTimeout(function() {
                    location.reload();
             }, 2000);*/
        }

    });
}


render() {

    if (sessionStorage.getItem('userData')){
    return (<Redirect to={'/dashboard'}/>)
    }

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
                
                <div class="login_head">
                        <h3>Log <span>in</span></h3>
                    </div>
 			      <form action="#" method="post">                   
 				      <div class="col-md-12">
                    <div class="form-group"><label>Email</label>
						          <input type="text" name="email" id="email" type="email" placeholder="Email address" class="form-control" required="required" value={this.state.email}
                               onChange={e => this.setState({ email: e.target.value })} />
					         </div>
                    <div class="form-group"><label>Password</label>
                       <input type="password" name="password" id="password" placeholder="Password" class="form-control" required="required" value={this.state.password}
                               onChange={e => this.setState({ password: e.target.value })} />                        
                       </div>
                    <div class="forgod form-group">
						         <li> <a href="#"> Forgot Password?</a></li>
                           <li>Don't have an account?<a href="#"> Register here</a> </li>
                    </div>
                </div>
                <button type="submit" class="custom-btn" onClick={e => this.handleFormSubmit(e)}>Login</button>
            </form>
                </div>
                </div>
                </div>
            </div> 
	</section>
  }
}

export default Login