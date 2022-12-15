import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Config from 'react-native-config';
import PokedexForm from './PokedexForm';
import { fetchPokemons } from '../../../redux/actions/pokedexAction';
import { removeUserAuth } from '../../../redux/actions/loginActions';
import { AppState } from '../../../redux/reducers';

const PokedexScreen = () => {
  const dispatch: any = useDispatch();
  const pokemons: any = useSelector<AppState>(
    state => state.pokedex.pokemons,
  );
  const nextUrl: any = useSelector<AppState>(
    state => state.pokedex.nextUrl,
  );
  const isFetching: any = useSelector<AppState>(
    state => state.pokedex.isFetching,
  );

  const onPressNextPokemons = async () => {
    await dispatch(removeUserAuth());
    // fetchPokemons(nextUrl)
  };

  useEffect(() => {
  }, [pokemons]);

  return (
    <PokedexForm
      pokemons={pokemons}
      imgUrl={Config.IMAGE_URL as string}
      onPressNextPokemons={onPressNextPokemons}
      isFetching={isFetching}
    />
  )
};

export default PokedexScreen;
