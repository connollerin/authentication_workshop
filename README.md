## Welcome to our Authentication workshop!
![soexcited](https://admin.mashable.com/wp-content//uploads/2013/07/Friends1.gif)

How to implement authentication:

Ok so before we start, we need to go create a Google Developers Console project and client ID.

_Instructions gathered from (https://developers.google.com/identity/sign-in/web/devconsole-project)._

First go to: 
[google's API console](https://console.developers.google.com/project/_/apiui/apis/library)

and create a new project.

In the sidebar under "API Manager", select Credentials, then select the OAuth consent screen tab.
Choose an Email Address, specify a Product Name, and press Save.

In the Credentials tab, select the New credentials drop-down list, and choose OAuth client ID.

Under Application type, select Web application. 
Register the origins from which your app is allowed to access the Google APIs, as follows. An origin is a unique combination of protocol, hostname, and port.
In the Authorized JavaScript origins field, enter the origin for your app. You can enter multiple origins to allow for your app to run on different protocols, domains, or subdomains. You cannot use wildcards. In the example below, the second URL could be a production URL.

http://localhost:8080
https://myproductionurl.example.com

The Authorized redirect URI field does not require a value. Redirect URIs are not used with JavaScript APIs.

Press the Create button.

From the resulting OAuth client dialog box, copy the Client ID . The Client ID lets your app access enabled Google APIs.

Ok now we can add google sign in to our website! Yay!

![yay](https://m.popkey.co/9b305c/y6wJ7.gif)

Now go to your index.html file and make sure you have the script tag to include the google api library.

```
<script src="https://apis.google.com/js/platform.js" async defer></script>
```






