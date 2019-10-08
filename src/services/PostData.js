import axios from 'axios';

export function PostData(type, details) {
  


 return new Promise((resolve, reject) =>{

  if(type==='contact') 
  {
      let BaseURL = 'http://localhost/codeignator_api/auth/contact';

         axios({
            method: 'post',
            mode: 'cors',
            url: `${BaseURL}`,
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: details
        })
        .then((response) => response)
        .then((res) => {
         resolve(res);
        })
        .catch((error) => {
          reject(error);
        });

  }

  if(type==='register') {

      let BaseURL = 'http://localhost/codeignator_api/auth/signup';

       axios({
            method: 'post',
            mode: 'cors',
            url: `${BaseURL}`,
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: details
        })
        .then((response) => response)
        .then((res) => {
         resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
  }   


  if(type==='login') {

      let BaseURL = 'http://localhost/codeignator_api/auth/login';

       axios({
            method: 'post',
            mode: 'cors',
            url: `${BaseURL}`,
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
            data: details
        })
        .then((response) => response)
        .then((res) => {
         resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
  } 


});



    // .then(result => {
    //   this.setState({
    //     mailSent: alert(result.data.message)
    //   })
    // })
    // .catch(error => this.setState({ error: error.message }));

//  fetch(BaseURL+type, {
// method: 'POST',
// body: JSON.stringify(userData)
// })
// .then((response) => response.json())
// .then((res) => {
//  resolve(res);
// })
// .catch((error) => {
//  reject(error);
// });
// });

}