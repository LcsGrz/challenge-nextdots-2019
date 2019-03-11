import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ScrollView, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import fonts from '../theme/fonts';
import { CocktailInfo } from '../components/index';
import colors from '../theme/Colors';
import Cocktail from '../entities/Cocktail';

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

class CocktailDetail extends React.Component {
  static options = passProps => ({
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
        text: passProps.title,
        alignment: 'center',
        color: 'white',
        fontFamily: fonts.regular,
        fontSize: 25,
        fontWeight: '400',
      },
    },
  });

  render() {
    const { activeCocktail } = this.props;

    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <CocktailInfo cocktail={activeCocktail} />
      </ScrollView>
    );
  }
}

CocktailDetail.propTypes = {
  activeCocktail: PropTypes.instanceOf(Cocktail).isRequired,
};

const mapStateToProps = state => {
  return {
    activeCocktail: state.cocktails.activeCocktail,
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  )(CocktailDetail)
);
