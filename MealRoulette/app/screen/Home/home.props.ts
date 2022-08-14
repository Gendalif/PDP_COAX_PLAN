import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

import {MergedStackParams} from '../../navigation/stacks/merged-params';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Home'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Home'>;

export interface IHomeScreenProps extends NavigationProps, RouteProps {}
