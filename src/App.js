import React from 'react';
import joy_logo from './images/joya_logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='imageDiv'>
        <img src={joy_logo} alt='logo' />
        <p className='para'>
          The company to disrupt the technology, coming in March 2022...
          <br>
          <br>
          Koxfin is a software design and deployment partner that helps you to built successful tech products.<br>
          We offer full-service UI/UX development for IOS, Android and web platforms including backend programming, project management, testing, launching and maintenance.
        </p>
      </div>
    </div>
  );
}

export default App;
