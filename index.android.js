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
import PropertyView from './PropertyView';

class PropertyFinderApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="searchPage" component={SearchPage} title="Property Finder"
                  initial={true} />
          <Scene key="searchResults" component={SearchResults} title="Results"/>
          <Scene key="propertyView" component={PropertyView} title="Property"/>

        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
