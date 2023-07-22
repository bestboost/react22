import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../../services/pokemon-api';


export default class Info extends Component {
   state = {
      pokemon: null,
      error: null,
      status: 'idle',
   };

   componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({status: 'pending'})
    
        pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => this.setState({pokemon, status: 'resolved'}))
          .catch(error => this.setState({error, status: 'rejected'}))

      
    };
   };

  render() {
       const {pokemon, error, status} = this.state;
       const {pokemonName} = this.props;
        
       if(status === 'idle') {
         return <div>Введіть імʼя покемона</div>
       }

       if (status === 'pending') {
         return <PokemonPendingView pokemonName={pokemonName}/>
       }

       if(status === 'rejected') {
         return <PokemonErrorView message={error.message}/>
       }

       if(status === 'resolved') {
               return <PokemonDataView pokemon={pokemon}/>
       }
    }
 };