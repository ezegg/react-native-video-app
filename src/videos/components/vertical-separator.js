import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {borderTopColor: props.color ? props.color : '#eaeaea'},
      ]}></View>
  );
}

const styles = StyleSheet.create({separator: {borderWidth: 1}});
export default VerticalSeparator;
