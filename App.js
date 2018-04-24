import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import MainScreen from '@screens/MainScreen/MainScreen';
import typography from '@config/typography';
export default class App extends React.Component {
  render() {
    return (
      <ViewStyled>
        <LargeText>We're using the Large Text typography!</LargeText>
        <MyTextTwo>Open up App.js to start working on your app!</MyTextTwo>
        <MainScreen/>
      </ViewStyled>
    );
  }
}

const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: papayawhip;
`;

const LargeText = typography.largeText.extend`
  color: #000;
`;

const MyTextTwo = styled.Text`
  text-align: center;
`;