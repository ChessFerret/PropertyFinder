/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

class PropertyFinderApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="searchPage" component={SearchPage} initial={true} />
          <Scene key="searchResults" component={SearchResults}
             hideNavBar={false}
             navigationBarStyle={
               {
                 backgroundColor:'transparent',
                 borderBottomWidth: 0,
               }
             }/>

        </Scene>
      </Router>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
