import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';
// import pokemonAPI from '../services/pokemon-api';


export default class PokemonInfo extends Component {
   state = {
      pokemon: null,
      loading: false,
   };

   componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({loading: true})
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then(res => res.json())
          .then(pokemon => this.setState({pokemon}))
          .finally(() => this.setState({loading: false}));
    };
   };

  render() {
       const {pokemon, loading} = this.state;
       const {pokemonName} = this.props;

      return(       
         <div>
            {loading && <div>Завантажуємо...</div>}
            {!pokemonName && <div>Введіть імʼя покемона</div>}
            {pokemon && <div>{pokemon.name}</div>}
         </div>
      )
    }
 };
