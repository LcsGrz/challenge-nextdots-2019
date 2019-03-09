import React from 'react';
import { View, FlatList, TextInput, Image } from 'react-native';
import { CocktailCard } from '../../components';
import styles from './styles';
import iconLupa from '../../assets/images/common/lupa.png';

const Show = (textHandler, cocktailsFiltereds, componentId) => (
  <View style={styles.container}>
    <View style={styles.containerBuscador}>
      <TextInput
        placeholder="Find Cocktail"
        style={styles.buscador}
        onChangeText={text => textHandler(text)}
      />
      <Image resizeMode="cover" source={iconLupa} style={styles.lupa} />
    </View>
    <FlatList
      style={styles.lista}
      showsVerticalScrollIndicator={false}
      data={cocktailsFiltereds}
      keyExtractor={(item, index) => index.toString()}
      renderItem={info => <CocktailCard coctail={info.item} CID={componentId} />}
    />
  </View>
);

export default Show;
