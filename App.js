import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import Route from './src/routes';

const MainRoute = StackNavigator({
  MainRoute: {
      screen: Route,
      navigationOptions: {
          header: null,
      }
  }
}, {
  initialRouteName: 'MainRoute'
})

export default class App extends Component {
  render() {
    return (
      <MainRoute/>
    );
  }
}
