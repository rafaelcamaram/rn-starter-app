import React from 'react';
import { View, Text } from 'react-native';

export default List = (props) => {
  return (
    <View>
      {props.dataList.map((item, key) => {
        return <Text key={key}>{item}</Text>;
      })}
    </View>
  )
}