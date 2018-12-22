import React, { Component } from 'react'
import Pokemon from './pokemon.json'
import PokemonCard from './gameComponents/PokemonCard'
import shuffle from 'shuffle-array'
import Grid from '@material-ui/core/Grid'

class Game extends Component {
  state = {
    pokemon: [],
    clicked: []
  }

  componentDidMount = () => {
    this.setState({ pokemon: shuffle(Pokemon) })
  }
  handleClick = name => {
    if (this.state.clicked.indexOf(name) !== -1) {
      alert('You Lose!')
    } else {
      let clickedArr = this.state.clicked
      clickedArr.push(name)
      this.setState({ pokemon: shuffle(Pokemon), clicked: clickedArr })
    }
  }
  
  render() {
    return (
      <>
        <h1>Hello I am The Game Page!</h1>
        <Grid container spacing={16}>
          {
            this.state.pokemon.map((pokemon, index) => index < 16 ? <Grid onClick={() => this.handleClick(pokemon.name)} item xs={3}><PokemonCard name={pokemon.name} image={pokemon.image} /></Grid> : null)
          }
        </Grid>
      </>
    )
  }
}

export default Game
