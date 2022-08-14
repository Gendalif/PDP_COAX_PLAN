import {ViewProps as ReactButtonProps} from 'react-native';
import {ButtonPreset} from './custom-button.styles';

export interface IReusableButtonProps extends ReactButtonProps {
  preset?: ButtonPreset;
  presetText?: ButtonPreset;
  text?: string;
  disabled?: boolean;
  onPress?: () => void;
}
