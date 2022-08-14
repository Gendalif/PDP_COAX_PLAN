import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

import {MergedStackParams} from '../../navigation/stacks/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutMeal'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutMeal'>;

export interface IAboutMealScreenProps extends NavigationProps, RouteProps {}
