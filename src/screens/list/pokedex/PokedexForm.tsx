import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView, TouchableOpacity, Text, Button } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Block } from 'components'
import _get from 'lodash.get';
// import { navigate } from '../../lib/navigation';
import styles from './styles';

type PokedexProps = {
  isFetching: boolean;
  onPressNextPokemons: () => void;
  imgUrl: string;
  pokemons: string;
};

const PokedexForm = ({ pokemons, imgUrl, onPressNextPokemons, isFetching }: PokedexProps) => {

  console.log('imgUrl', imgUrl)
  const renderLogo = (item: any, imgUrl: any) => {
    console.log('renderLogo - imgUrl', imgUrl)
    const id = _get(item, 'pokemondata.data.id');
    const _id = _get(item, '_id');
    const setId = _id !== undefined ? _id : id;
    console.log('renderLogo - id', id)
    console.log('renderLogo - item', item)
    console.log('renderLogo ---', `${imgUrl}/${setId}.png`)
    return (
      <FastImage
        source={{ uri: `${imgUrl}/${setId}.png` }}
        style={styles.pokemonImage}
      />
    );
  };

  const renderItem = (item: any, imgUrl: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          // navigate('PokedexProfile', { item })
        }}
      >
        <Block
          flex={false}
          center
          middle
          white
          space="space-evenly"
          style={styles.pokemonContainer}>
          {renderLogo(item, imgUrl)}
          <Block center flex={false}>
            <Text style={styles.displayNameText}>{item.name}</Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {
        isFetching ? (
          <Block>
            <Text>Loading....</Text>
          </Block>
        ) : (
          <FlatList
            contentContainerStyle={styles.content}
            data={[...pokemons]}
            renderItem={({ item }) =>
              renderItem(item, imgUrl)
            }
            keyExtractor={(item: any) => item.name}
            horizontal={false}
          />
        )
      }
      <Button
        onPress={onPressNextPokemons}
        title="NEXT"
      />
    </SafeAreaView>
  );
};

// PokedexForm.propTypes = {

// };

export default PokedexForm;
