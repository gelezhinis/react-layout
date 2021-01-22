import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

// import Container from './components/Container/Container';
import Main from './components/Main/Main';

const App = () => {
  
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
