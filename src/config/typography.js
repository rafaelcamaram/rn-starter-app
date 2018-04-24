import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

import fonts from "@config/fonts";

const LARGE_TEXT = 16;
const MEDIUM_TEXT = 14;
const SMALL_TEXT = 12;
const REGULAR_TEXT = fonts.openSansRegular;
const SEMIBOLD_TEXT = fonts.openSansSemibold;

const typography = {
  largeText: fonts.OpenSansBold.extend`
    font-size: ${LARGE_TEXT};
  `,
  largeTextSemibold: fonts.OpenSansSemibold.extend`
    font-size: ${LARGE_TEXT};
  `,
  largeTextBold: fonts.OpenSansBold.extend`
    font-size: ${LARGE_TEXT};
  `,
  mediumTextSemibold: fonts.OpenSansSemibold.extend`
    font-size: ${MEDIUM_TEXT};
  `,
  smallText: fonts.OpenSansRegular.extend`
    font-size: ${SMALL_TEXT};
  `,
  smallTextSemibold: fonts.OpenSansSemibold.extend`
    font-size: ${SMALL_TEXT};
  `,
}

export default typography;
