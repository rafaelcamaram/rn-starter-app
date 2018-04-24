
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native'

import typography from '@config/typography';
import colors from '@config/colors';

class Label extends React.Component {
  
  render() {
    const fontBase = this.props.bold ? typography.mediumTextBold : typography.mediumText;

    const StyledMediumText = fontBase.extend`
      color: ${this.props.color};
    `;

    return <StyledMediumText>{this.props.children}</StyledMediumText>
  }
}

Label.defaultProps = {
  color: colors.BLACK,
  bold: false
};

Label.propTypes = {
  color: PropTypes.string,
  bold: PropTypes.bool
};

export default Label;