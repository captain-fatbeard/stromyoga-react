import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Menu from './components/Menu'

import './App.scss'

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
