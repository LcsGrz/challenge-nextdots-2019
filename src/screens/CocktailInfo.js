import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import fonts from '../theme/fonts';
import { CocktailDetail } from '../components/index';
import colors from '../theme/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  scroll: {
    backgroundColor: colors.principal,
    flex: 1,
  },
});

class CocktailInfo extends React.Component {
  static options = () => ({
    topBar: {
      elevation: 0,
      shadowOpacity: 0,
      buttonColor: 'white',
      backButton: {
        color: 'white',
      },
      background: {
        color: '#0388c9ff',
        translucent: false,
      },
      title: {
        text: 'Dashboard',
        alignment: 'center',
        color: 'white',
        fontFamily: fonts.regular,
        fontSize: 25,
        fontWeight: '400',
      },
    },
  });

  render() {
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <CocktailDetail />
      </ScrollView>
    );
  }
}

export default CocktailInfo;
