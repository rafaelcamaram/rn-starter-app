import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import typography from '@config/typography';
import colors from '@config/colors';

import MainScreen from '@screens/MainScreen/MainScreen';
import Label from '@components/presentational/typography/Label';
import LargeTitle from '@components/presentational/typography/LargeTitle';
export default class App extends React.Component {
  render() {
    return (
      <ViewStyled>
        <LargeTitle>We're using the Large Text typography!</LargeTitle>
        <Label>Open up App.js to start working on your app!!</Label>
        <Label bold color={colors.DEFAULT_RED}>We're using the Large Text!</Label>
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