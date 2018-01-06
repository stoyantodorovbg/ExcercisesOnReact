import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const Greeting = () => {
   return <h1>Hello!</h1>
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
