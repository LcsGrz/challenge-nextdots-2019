/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import colors from '../theme/Colors';
import { Typography, Button, Spacing, TypographyVariants, SpacingVariants } from '../components';
import { responsiveSize } from '../utils/dimensions';
import { goToPage } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(80),
  },
});

export default class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Typography variant={TypographyVariants.bodyTitle}>
            NextDots challenge 2019 _ v2
          </Typography>
          <Spacing variant={SpacingVariants.smallPlus} />
          <Typography>Lucas Gerez</Typography>
        </View>
        <Button text="Enter" onPress={() => goToPage(componentId, 'Cocktail')} />
      </SafeAreaView>
    );
  }
}
