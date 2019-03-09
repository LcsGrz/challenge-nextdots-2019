import React from 'react';
import { View, FlatList, TextInput, Image } from 'react-native';
import { CocktailCard } from '../../components';
import styles from './styles';
import iconLupa from '../../assets/images/common/lupa.png';

const Show = (textHandler, cocktailsFiltereds, componentId, showDetail) => (
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
      renderItem={info => (
        <CocktailCard cocktail={info.item} onPress={cocktail => showDetail(cocktail)} />
      )}
    />
  </View>
);

export default Show;
