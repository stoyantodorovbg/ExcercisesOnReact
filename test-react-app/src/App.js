import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header.js'
import Header from './components/Header';
import Routes from './Routes.js'

class App extends Component {
    formatUser(firstName, lastName) {
        return firstName + ' ' + lastName
    }
    clock() {
       return <h1>{new Date().toLocaleDateString()}</h1>
    }
  render() {
      let firstName = 'Pesho';
      let lastName = 'Gosho';

      const element = <h2>
          Hi {firstName} {lastName} {1 + 2 * 3}!
      </h2>

      const otherElement = <h3>name: </h3>

      return (
          <div className='App'>
              <Header/>
              <div className='container'>
                <Routes/>
              </div>
          {otherElement}
      {this.formatUser(firstName, lastName)};
              {setInterval(this.clock, 1000)}
          </div>

  )
  }
}

export default App;
