
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native'

import typography from '@config/typography';
import colors from '@config/colors';

class LargeText extends React.Component {
  
  render() {
    const fontBase = this.props.bold ? typography.largeTextBold : typography.largeText;
    const StyledLargeText = fontBase.extend`
      color: ${this.props.color};
    `;

    return <StyledLargeText>{this.props.children}</StyledLargeText>
  }
}

LargeText.defaultProps = {
  color: colors.BLACK,
  bold: false
};

LargeText.propTypes = {
  color: PropTypes.string,
  bold: PropTypes.bool
};

export default LargeText;