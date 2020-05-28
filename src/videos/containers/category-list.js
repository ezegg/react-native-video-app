import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <VerticalSeparator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <View>
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty()}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default CategoryList;
