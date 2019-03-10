import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store/store';
import Welcome from './Welcome';
import CocktailDetail from './CocktailDetail';
import PrincipalContainer from './PrincipalContainer';

export const initApp = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'welcome',
        children: [
          {
            component: {
              name: 'welcome',
            },
          },
        ],
      },
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
        },
      },
    },
  });

export const goToPage = (componentId, page, props) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
    },
  });
};
export const goToPageOptionsCustom = (componentId, page, options) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      options,
    },
  });
};
export const goBack = componentId => Navigation.pop(componentId);

// prettier-ignore
export function registerScreens() {
  Navigation.registerComponent( 'welcome', () => Welcome);
  Navigation.registerComponentWithRedux( 'PrincipalContainer', () => PrincipalContainer, Provider, store );
  Navigation.registerComponentWithRedux('CocktailDetail',() => CocktailDetail,Provider,store);
}
