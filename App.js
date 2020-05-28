/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, Component} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Api from './utils/api';

// const App: () => React$Node = () => {
//   const [movies, setMovies] = useState({});
//   useEffect(() => {
//     async () => {
//       const result = await Api.getSuggestions(10);
//       console.log(result);
//       setMovies(result);
//     };
//   });
//   console.log(movies);

//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.body}>
//         <Home>
//           <Header />
//           <SuggestionList />
//           <Text>Categorías</Text>
//           <Text>Sugerencias</Text>
//         </Home>
//       </View>
//     </>
//   );
// };

class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await Api.getSuggestion(10);
    console.log(movies);
    this.setState({suggestionList: movies});

    const categories = await Api.getCategories();
    console.log(categories);
    this.setState({categoryList: categories});
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          <Home>
            <Header />
            <CategoryList list={this.state.categoryList} />
            <SuggestionList list={this.state.suggestionList} />
            <Text>Categorías</Text>
            <Text>Sugerencias</Text>
          </Home>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
