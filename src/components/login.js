import React, { Component, Fragment } from "react";
import { GoogleLogin } from 'react-google-login';
import NavBar from "./NavBar";


class Login extends Component {

    constructor(props, context) {
        super(props, context);    
        this.responseGoogle = this.responseGoogle.bind(this);        
    }

    
    

    responseGoogle (response) {
        let url = 'http://rhserverpi.localtunnel.me/login';//http://righthand.localtunnel.me
        let data = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",// "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify({"idToken": response.tokenObj.id_token}) // body data type must match "Content-Type" header
        }
        fetch(url, data) // Call the fetch function passing the url of the API as a parameter
        .then((response) => response.json())
        .then((JSONResponse) => {
            console.log(`Refresh token received: ${JSONResponse}`)
            this.props.setRefreshToken(JSONResponse.message)
        })
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <GoogleLogin
                    clientId="25667199244-iai99upvkk90dg71asi1hvaqpdv0m8vt.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </Fragment>
        )
    }
}
 
export default Login;