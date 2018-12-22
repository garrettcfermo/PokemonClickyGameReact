import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
     <>
     <Router>
          <div style={{ backgroundColor: '#9e2A2b'}}>
         <Navbar />
         <Route exact path='/' component={Home}/>
         <Route path='/game' component={Game} />
         <Route path='/leaderboard' component={LeaderBoard} />
       </div>
     </Router>
     </>
    )
  }
}

export default App
