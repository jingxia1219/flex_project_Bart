import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
    <h2>Welcome to BartVenture</h2>

    <form action="/register" method="post" >
    <label>Enter Name:
        <input type="text" id="register-name" />
    </label>
    <label>
        Enter Email:
        <input type="text" id="register-email" />
    </label>
    <label>
        Enter Password:
        <input type="text" id="register-password" />
    </label>
    <label>
        Repeat Password:
        <input type="text" id="register-password2" />
    </label>
    <input type="submit" value="Create User" />
    </form>
      </div>
    );
  }
}

export default App;
