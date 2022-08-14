import React, {useCallback} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IMAGES} from '../../assets';
import {Header} from '../../components';
import {useAppSelector} from '../../hooks';
import {IAboutMealScreenProps} from './about-meal.props';
import {styles} from './about-meal.styles';

export const AboutMealScreen: React.FC<IAboutMealScreenProps> = ({
  navigation,
}) => {
  const onBackArrowPressed = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const selectedMeal = useAppSelector(state => state.meal.selectedMeal);

  return (
    <SafeAreaView style={styles.root}>
      <Header text="Meal Details View" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        style={styles.mainContainer}>
        <TouchableOpacity onPress={onBackArrowPressed}>
          <Image style={styles.closeImage} source={IMAGES.RED_CLOSE} />
        </TouchableOpacity>
        <Image
          style={styles.imageStyles}
          source={{uri: selectedMeal?.picture}}
        />
        <Text style={styles.titleTextStyles}>{selectedMeal?.title}</Text>
        <Text style={styles.descriptionTextStyles}>
          {selectedMeal?.description}
        </Text>
        <View>
          <Text style={styles.titleTextStyles}>Ingredients:</Text>
          <Text style={styles.ingredientsTextStyles}>
            {selectedMeal?.ingredients}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
