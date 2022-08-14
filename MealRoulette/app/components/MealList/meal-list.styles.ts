import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../themes/colors';

interface IMealListSyules {
  listContainer: ViewStyle;
  itemContainer: ViewStyle;
  mealImage: ImageStyle;
  mealTitleText: TextStyle;
  loading: ViewStyle;
}

const styles = StyleSheet.create<IMealListSyules>({
  listContainer: {flex: 1},
  itemContainer: {flex: 0.5},
  mealTitleText: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 21,
    color: COLORS.BLACK_TRANSPARENT_64,
  },
  mealImage: {width: 100, height: 100, alignSelf: 'center'},
  loading: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
