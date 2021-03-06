import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

import fonts from "@config/fonts";

// Available font sizes
const LARGE_TEXT = 24;
const MEDIUM_TEXT = 16;
const SMALL_TEXT = 14;

// Available font families
const REGULAR_TEXT = fonts.OpenSansRegular;
const SEMIBOLD_TEXT = fonts.OpenSansSemibold;
const BOLD_TEXT = fonts.OpenSansBold;

const typography = {
  largeText: REGULAR_TEXT.extend`
    font-size: ${LARGE_TEXT};
  `,
  largeTextSemibold: SEMIBOLD_TEXT.extend`
    font-size: ${LARGE_TEXT};
  `,
  largeTextBold: BOLD_TEXT.extend`
    font-size: ${LARGE_TEXT};
  `,
  mediumText: REGULAR_TEXT.extend`
    font-size: ${MEDIUM_TEXT};
  `,
  mediumTextSemibold: SEMIBOLD_TEXT.extend`
    font-size: ${MEDIUM_TEXT};
  `,
  mediumTextBold: BOLD_TEXT.extend`
    font-size: ${MEDIUM_TEXT};
  `,
  smallText: REGULAR_TEXT.extend`
    font-size: ${SMALL_TEXT};
  `,
  smallTextSemibold: SEMIBOLD_TEXT.extend`
    font-size: ${SMALL_TEXT};
  `,
}

export default typography;
