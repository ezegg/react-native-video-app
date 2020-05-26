import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';

class SuggestionList extends Component {
  render() {
    const list = [
      {title: 'eze', key: '1'},
      {title: 'robin', key: '2'},
    ];
    return (
      <SuggestionListLayout title="Recomendado para ti">
        <FlatList
          data={list}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </SuggestionListLayout>
    );
  }
}

export default SuggestionList;
