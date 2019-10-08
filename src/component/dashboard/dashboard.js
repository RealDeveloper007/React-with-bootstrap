import React from 'react'
import dash from '../../component/layout/images/writinglaptop_0.jpg';
import {Redirect} from 'react-router-dom';

let UserData = sessionStorage.getItem('userData');

class Dashboard extends React.Component {



Logout = e => {
  e.preventDefault();

 sessionStorage.clear();
}

  render() {


    if (sessionStorage.getItem('userData')===null){
        return (<Redirect to={'/login'}/>)
    }

    return <section id="about-us">
    <div class="container">
        <div id="about">
        <div class="row">
             <div class="col-sm-5">        
                         <div class="about_img">
                            <img src={dash} class="img-responsive" alt="dashboard image" />                        
                        </div>
            </div>
            <div class="col-sm-7">
           
                 <h1>Dashboard</h1>
                        <p>Welcome to {UserData}</p>
                        <p><button type="button" onClick={e => this.Logout(e)}>Logout</button></p>
            </div>
            </div>
        </div>
</div>
</section>
  }
}
export default Dashboard