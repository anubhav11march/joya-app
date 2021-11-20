import React from 'react';
import joy_logo from './images/joya_logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='imageDiv'>
        <img src={joy_logo} alt='logo' />
        <p className='para'>
          We are dressing up our website for you, come back soon...
        </p>
      </div>
    </div>
  );
}

export default App;
