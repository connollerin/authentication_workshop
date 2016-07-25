// 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="63478560666-m1i4mi095m2ijn3mattc3ht3rncrmr3j.apps.googleusercontent.com"
    buttonText="Login"
    callback={responseGoogle}
  />,
  document.getElementById('googleButton')
);
