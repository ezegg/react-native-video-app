import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <VerticalSeparator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };

  render() {
    const list = [
      {title: 'eze', key: '1'},
      {title: 'robin', key: '2'},
    ];
    return (
      <SuggestionListLayout title="Recomendado para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty()}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}

export default SuggestionList;
