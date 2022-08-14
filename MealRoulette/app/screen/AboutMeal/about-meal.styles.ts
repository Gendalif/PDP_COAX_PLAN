import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {COLORS} from '../../themes/colors';

interface IAboutMealScreenStyles {
  root: ViewStyle;
  imageStyles: ImageStyle;
  mainContainer: ViewStyle;
  backButton: ViewStyle;
  closeImage: ImageStyle;
  titleTextStyles: TextStyle;
  descriptionTextStyles: TextStyle;
  ingredientsTextStyles: TextStyle;
}

export const styles = StyleSheet.create<IAboutMealScreenStyles>({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
  },
  backButton: {
    padding: 16,
    paddingLeft: 8,
  },
  mainContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.SILVER,
    marginBottom: 16,
  },
  closeImage: {width: 40, height: 40, marginTop: 16, marginLeft: 16},
  imageStyles: {
    marginTop: 16,
    width: 300,
    height: 300,
    borderRadius: 10,
    alignSelf: 'center',
  },
  titleTextStyles: {
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 17,
    paddingVertical: 8,
    fontWeight: '500',
    color: COLORS.JUMBO,
  },
  descriptionTextStyles: {
    fontSize: 13,
    lineHeight: 21,
    paddingHorizontal: 16,
    fontWeight: '500',
    color: COLORS.JUMBO,
  },
  ingredientsTextStyles: {
    fontSize: 11,
    lineHeight: 21,
    paddingHorizontal: 16,
    color: COLORS.BLACK_TRANSPARENT_80,
  },
});
