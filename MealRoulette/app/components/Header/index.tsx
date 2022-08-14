import React from 'react';
import {Text, StatusBar, TouchableOpacity, View} from 'react-native';
import {StaticNavigator} from '../../services/navigator';
import {IHeaderProps} from './header.props';

import styles from './header.styles';

export const Header: React.FC<IHeaderProps> = props => {
  const {style, textStyle, text} = props;

  return (
    <View style={[styles.headerContainer, style]}>
      <StatusBar
        backgroundColor="transparent"
        animated
        translucent
        barStyle="dark-content"
      />
      <Text style={[styles.textHeader, textStyle]}>{text}</Text>
    </View>
  );
};
