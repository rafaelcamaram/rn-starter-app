import React from 'react';
import { View, Text } from 'react-native';

import UserList from '@components/container/UserList/UserList';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <UserList/>
      </View>
    )
  }
}