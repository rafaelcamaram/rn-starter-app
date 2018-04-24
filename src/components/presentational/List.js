import React from 'react';
import { View, Text } from 'react-native';

export default List = (props) => {
  return (
    <View style={{marginTop: 10}}>
      {props.dataList.map((item, key) => {
        return <Text style={{textAlign: 'center'}} key={key}>{item}</Text>;
      })}
    </View>
  )
}