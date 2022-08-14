import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../themes/colors';

interface ButtonStyles {
  container: ViewStyle;
  text: TextStyle;
  disabledText?: TextStyle;
}

export type ButtonPreset =
  | 'primary'
  | 'secondary'
  | 'inactive'
  | 'transparent'
  | 'circle';

type ButtonPresetStyles = {
  [preset in ButtonPreset]: ButtonStyles;
};

const styles: ButtonPresetStyles = {
  primary: StyleSheet.create<ButtonStyles>({
    container: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: COLORS.RED_TRANSPARENT_64,
      borderColor: COLORS.SPRING_GREEN,
    },
    text: {
      fontWeight: '500',
      fontStyle: 'normal',
      color: COLORS.BLACK,
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 21,
    },
    disabledText: {},
  }),
  secondary: StyleSheet.create({
    container: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: COLORS.WHITE,
      borderColor: COLORS.WHITE,
      alignItems: 'center',
    },
    text: {
      fontWeight: '500',
      fontStyle: 'normal',
      color: COLORS.RED_TRANSPARENT_64,
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 21,
    },
    disabledText: {
      color: '#d3d3d3',
    },
  }),
  inactive: StyleSheet.create({
    container: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      opacity: 0.25,
      backgroundColor: COLORS.RED_TRANSPARENT_64,
      borderColor: COLORS.SPRING_GREEN,
    },
    text: {
      fontWeight: '500',
      fontStyle: 'normal',
      color: COLORS.RED_TRANSPARENT_64,
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 21,
    },
  }),
  transparent: StyleSheet.create({
    container: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'transparent',
      borderColor: COLORS.SILVER,
    },
    text: {
      fontWeight: '500',
      fontStyle: 'normal',
      color: COLORS.SILVER,
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 21,
    },
  }),
  circle: StyleSheet.create({
    container: {
      height: 48,
      justifyContent: 'center',
      borderRadius: 50,
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'transparent',
      borderColor: COLORS.SILVER,
    },
    text: {
      fontWeight: '500',
      fontStyle: 'normal',
      color: COLORS.SILVER,
      textAlign: 'center',
      fontSize: 13,
      lineHeight: 21,
    },
  }),
};

export default styles;
