import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {IReusableButtonProps} from './custom-button.props';

import presets from './custom-button.styles';

export const ReusableButton: React.FC<IReusableButtonProps> = ({
  style,
  preset = 'primary',
  text,
  ...rest
}) => {
  const styles = presets[preset];

  return (
    <TouchableOpacity {...rest} style={[styles.container, style]}>
      <Text style={[styles.text, rest.disabled && styles.disabledText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
