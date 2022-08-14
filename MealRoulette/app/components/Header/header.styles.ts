import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../themes/colors';

interface IHeaderScreenStyles {
  headerContainer: ViewStyle;
  textHeader: TextStyle;
}

const styles = StyleSheet.create<IHeaderScreenStyles>({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  textHeader: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'capitalize',
    color: COLORS.JUMBO,
  },
});

export default styles;
