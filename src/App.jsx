import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Menu from './components/Menu'
import Footer from './components/Footer/Footer'

import './Tailwind.css'
import './App.scss'

export const App = () => {
    return (
      <Router>
        <Menu />
        <Routes />
        <Footer />
      </Router>
    )
}

export default App;
