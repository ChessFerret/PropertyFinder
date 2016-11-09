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
import SearchPage from './SearchPage';

class PropertyFinderApp extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'Property Finder', index: 0}}
        renderScene={(route, navigator) =>
          {
            return <SearchPage title={route.title} />
          }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
