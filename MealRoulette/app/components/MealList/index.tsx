import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {useAppSelector, useSpecificKeyExtractor} from '../../hooks';
import {IMeal} from '../../redux/models/IMeal';
import {mealSlice} from '../../redux/slices';

import styles from './meal-list.styles';

export const MealList: React.FC = () => {
  const meals = useAppSelector(state => state.meal.mealsData);
  const dispatch = useDispatch();

  const mealKeyExtractor = useSpecificKeyExtractor<IMeal>(
    'meal-list-groups-child-key',
    'id',
  );

  const isMealsFetching = useAppSelector(
    state => state.app.loading.isFetchingAllMeals,
  );

  const getMealsListError = useAppSelector(
    state => state.app.errors.fetchAllMealsError,
  );

  const onItemPressed = (mealId: string) => {
    dispatch(mealSlice.actions.getMealById({id: mealId}));
  };

  useEffect(() => {
    if (getMealsListError !== null) {
      Alert.alert(getMealsListError);
    }
  }, [getMealsListError]);

  const renderItem = ({item}: {item: IMeal}) => {
    return (
      <TouchableOpacity
        onPress={() => onItemPressed(item.id)}
        style={styles.itemContainer}>
        <Image style={styles.mealImage} source={{uri: item.picture}} />
        <Text style={styles.mealTitleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return isMealsFetching ? (
    <View style={styles.loading}>
      <ActivityIndicator style={{alignSelf: 'center'}} size={'large'} />
    </View>
  ) : (
    <FlatList
      numColumns={2}
      style={styles.listContainer}
      keyExtractor={mealKeyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={
        <View>
          <Text style={styles.mealTitleText}>Sorry! We do not have more</Text>
          <Text style={styles.mealTitleText}>
            Please go back to the first page!
          </Text>
        </View>
      }
      data={meals}
    />
  );
};
