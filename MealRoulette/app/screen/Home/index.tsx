import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Header, MealList, ReusableButton} from '../../components';
import {useAppSelector} from '../../hooks';

import {mealSlice} from '../../redux/slices';

import {IHomeScreenProps} from './home.props';
import {styles} from './home.styles';

export const HomeScreen: React.FC<IHomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);
  const mealsCount = useAppSelector(state => state.meal.mealsData.length);

  const onRefreshPressed = () => {
    setOffset(offset + 4);
  };

  const goBackToFirstPage = () => {
    setOffset(0);
  };

  const isMealsFetching = useAppSelector(
    state => state.app.loading.isFetchingAllMeals,
  );

  useEffect(() => {
    dispatch(mealSlice.actions.getMealsByLimit({offset, limit: 4}));
  }, [offset]);

  return (
    <SafeAreaView style={styles.root}>
      <Header text="Meals View" />
      <MealList />
      <View style={styles.refreshButtonContainer}>
        <ReusableButton
          disabled={isMealsFetching && true}
          preset="circle"
          onPress={mealsCount > 0 ? onRefreshPressed : goBackToFirstPage}
          text={mealsCount > 0 ? 'Refresh' : 'Go To First Page'}
        />
      </View>
    </SafeAreaView>
  );
};
