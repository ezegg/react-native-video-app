/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Home>
          <Header />
          <SuggestionList />
          <Text>Categorías</Text>
          <Text>Sugerencias</Text>
        </Home>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
