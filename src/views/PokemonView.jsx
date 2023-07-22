import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from '../components/Pokemon/Form';
import PokemonInfo from '../components/Pokemon/Info';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}