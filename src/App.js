import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/Home';


class App extends Component {

  state = {
    isAuthenticated: false,
    refreshToken: 'none'
  };

  handleLogin = () => {
    this.setState({
      isAuthenticated: true
    })
  }

  handleLogout = () => {
    this.setState({
      isAuthenticated: false
    })
  }

  setRefreshToken = (refreshToken) => {
    this.setState({
      refreshToken: refreshToken
    })
    this.getAccessToken(refreshToken)
  }

  getAccessToken = (refreshToken) => {
    let url = 'http://rhserverpi.localtunnel.me/getAccessToken';//http://righthand.localtunnel.me
    let data = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, same-origin, *omit
      headers: {
          "Content-Type": "application/json; charset=utf-8",// "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({"refreshToken": refreshToken}) // body data type must match "Content-Type" header
    }
    fetch(url, data) // Call the fetch function passing the url of the API as a parameter
    .then((response) => {
      console.log(`Access token received: ${response}`)
      this.setAccessToken(response)
    })
    .catch((error) => console.log(error))
  }

  setAccessToken = (accessToken) => {
    sessionStorage.accessToken = accessToken
    this.handleLogin()
  }

  render() {
    return (
        <div className="App">
          {this.state.isAuthenticated ? <Home /*accessToken={this.props.accessToken}*//> : <Login setRefreshToken={this.setRefreshToken}/>}
        </div>
    );
  }
}

export default App;