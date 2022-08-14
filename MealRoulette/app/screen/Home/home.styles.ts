import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {COLORS} from '../../themes/colors';

interface IHomeScreenStyles {
  root: ViewStyle;
  refreshButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
  },
  refreshButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});
