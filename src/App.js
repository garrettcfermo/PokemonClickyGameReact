import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import Navbar from './components/Navbar'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: "AIzaSyBFBDSk9godsWsNypRzEVaCJjwHie4XSQ4",
  authDomain: "pokemonlclickygame.firebaseapp.com",
  databaseURL: "https://pokemonlclickygame.firebaseio.com",
  projectId: "pokemonlclickygame",
  storageBucket: "pokemonlclickygame.appspot.com",
  messagingSenderId: "1038181149499"
})

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

class App extends Component {

  state = {
    isSignedIn: false
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    )
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <>
        <Router>
          <div style={{ backgroundColor: '#9e2A2b' }}>
            <Navbar uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} />
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/leaderboard' component={LeaderBoard} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
