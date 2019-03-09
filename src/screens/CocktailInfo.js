/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { compose, bindActionCreators } from 'redux';
import { ScrollView, StyleSheet } from 'react-native';
import fonts from '../theme/fonts';
import { CocktailDetail } from '../components/index';
import colors from '../theme/Colors';
import { infoCerrada } from '../store/actions/cocktails';

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
        text: 'COCKTAIL',
        alignment: 'center',
        color: 'white',
        fontFamily: fonts.regular,
        fontSize: 25,
        fontWeight: '400',
      },
    },
  });

  componentWillMount() {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        title: {
          text: this.props.cocktailActivo.Titulo,
        },
      },
    });
  }

  componentWillUnmount() {
    const { cerrarInfo } = this.props;
    cerrarInfo();
  }

  render() {
    const { cocktailActivo } = this.props;
    //--------------------------------------------------
    //--------------------------------------------------
    return (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <CocktailDetail cocktail={cocktailActivo} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cocktailActivo: state.cocktails.cocktailActivo,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      cerrarInfo: infoCerrada,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CocktailInfo)
);
