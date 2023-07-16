import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
state = {
  pokemonName: '',
}

  handleFromsubmit = pokemonName => {
    this.setState({pokemonName});
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
         <PokemonForm onSubmit={this.handleFromsubmit}/>
         <PokemonInfo pokemonName={this.state.pokemonName} />
         <ToastContainer position="top-center"/>
      </div>
    );
  }
}