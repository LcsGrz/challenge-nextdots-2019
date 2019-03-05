import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import fonts from '../../../theme/fonts';
import cc from '../cocktail-view/aasdd.jpg';

class CocktailDetail extends React.Component {
  render() {
    return (
      <View style={[styles.sombra, styles.redondeado, styles.componente]}>
        <Image resizeMode="cover" source={cc} style={[styles.imagen, styles.redondeado]} />
        <View style={styles.contenedor}>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            {'• How to prepare'}
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
          <Text
            style={[styles.ingrediente, { fontFamily: fonts.regular }]}
            textBreakStrategy="balanced"
          >
            asdjkfhasdjkfhasdkjfhaskdjfhaskjdfhaksjdfhkajsdhfkajsdhfkjasdhkfjahsdkjfhakjsdhfkajshdfjahsdkjfahskjdhfafajksdfhkajhsdfkjahsdjfhakjsdhkfjahsdkfjahsdkjasjhdfkahsdkfhakjsdhfkjsahdlfhaskjdfhkajshdfkjahsdkfhkasdf
          </Text>
        </View>
      </View>
    );
  }
}

export default CocktailDetail;
