import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/empty';
import HorizontalSeparator from '../components/horizontal-separator';
import Suggestion from '../components/suggestion';
import CategoryListLayout from '../components/category-list-layout';

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <HorizontalSeparator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <CategoryListLayout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty()}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CategoryListLayout>
    );
  }
}

export default CategoryList;
