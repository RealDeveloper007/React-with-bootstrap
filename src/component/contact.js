import React from 'react'
import {PostData} from '../services/PostData';
// import {Redirect} from 'react-router-dom';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"; // optional styles

class Contact extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}



handleFormSubmit = e => {
  e.preventDefault();

  PostData('contact',this.state).then((result) => {
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
    return <section id="contact">
    <div class="container">
        <div class="box">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Find Us</h3>
                    <p>Write a message, we will get back to you.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <div class="status alert alert-success" style={{"display": "none"}}></div>
                    <form action="#" role="form" id="contact_form" class="contact-form" method="post" accept-charset="utf-8">                    
                        <input type="hidden" name="token" value="1565883965"/>
                        <div class="row">
                            <div class="col-sm-6 col-xs-12 minpadding">
                               <input type="text" name="name" placeholder="Your Name " class="form-control" id="name"  value={this.state.name}
                               onChange={e => this.setState({ name: e.target.value })} required="required"/>        </div>
                            <div class="col-sm-6 col-xs-12 minpadding">
                               <input type="text" name="email" id="email" pattern="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="you@domain.com" placeholder="Your Email Address" class="form-control"  value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })} required="required"/>                            </div>
                            <div class="col-sm-12 minpadding">
                                <input type="text" name="subject" id="subject" placeholder="Subject" class="form-control" value={this.state.subject}
    onChange={e => this.setState({ subject: e.target.value })} required="required"/> 
                                </div>
                            <div class="col-sm-12 minpadding">
                                <div class="form-group">
                                    <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Message" onChange={e => this.setState({ message: e.target.value })}>{this.state.message}</textarea>
                                </div>
    <button type="submit" class="custom-btn" onClick={e => this.handleFormSubmit(e)}><i class="fa fa-envelope-o"></i> Send Message</button>
                            </div>
                        </div>
                    </form>                
                    </div>
                <div class="col-md-5 col-sm-12">
                    <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.it/maps?q=Mohali&amp;output=embed"></iframe>
                </div>

                <div class="col-md-2 col-md-12">
                    <div class="row">
                        <div class="col-md-12 col-sm-6">
                            <h3 style={{"margin-top": "0px"}}>Location </h3>
                              <address>Mohali <br/>Phone: 728218291                            </address>
                        </div>
                        <div class="col-md-12 col-sm-6">
                            <h3>Be Social</h3>
                            <ul class="social">
                            <li><a class="text-muted" href="https://twitter.com/" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a></li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  }
}
export default Contact