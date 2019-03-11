import React from 'react';
import { View, FlatList, TextInput, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import { CocktailCard } from '../../index';
import styles from './styles';
import iconLupa from '../../../assets/images/common/lupa.png';
import Cocktail from '../../../entities/Cocktail';

const CocktailList = ({ cocktailsFiltereds, textHandler, onPress }) => (
  <View style={styles.container}>
    <View style={styles.finderContainer}>
      <TextInput
        placeholder="Find Cocktail"
        style={styles.finder}
        onChangeText={text => textHandler(text)}
      />
      <Image resizeMode="cover" source={iconLupa} style={styles.lupa} />
    </View>
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={cocktailsFiltereds}
      keyExtractor={(item, index) => index.toString()}
      renderItem={info => <CocktailCard cocktail={info.item} onPress={() => onPress(info.item)} />}
    />
  </View>
);

CocktailList.propTypes = {
  cocktailsFiltereds: PropTypes.arrayOf(PropTypes.instanceOf(Cocktail)).isRequired,
  textHandler: PropTypes.func,
  onPress: PropTypes.func,
};

CocktailList.defaultProps = {
  textHandler: () => {},
  onPress: () => {},
};

export default CocktailList;
