import React from 'react'
class Contact extends React.Component {
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
                               <input type="text" name="name" value="" placeholder="Your Name " class="form-control" id="name" required="required"/>        </div>
                            <div class="col-sm-6 col-xs-12 minpadding">
                               <input type="text" name="email" value="" id="email" pattern="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="you@domain.com" placeholder="Your Email Address" class="form-control" required="required"/>                            </div>
                            <div class="col-sm-12 minpadding">
                                <input type="text" name="subject" value="" id="subject" placeholder="Subject" class="form-control" required="required"/> 
                                </div>
                            <div class="col-sm-12 minpadding">
                                <div class="form-group">
                                    <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="custom-btn"><i class="fa fa-envelope-o"></i> Send Message</button>
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