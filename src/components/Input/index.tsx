import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as Styles from './styles';

export function Input({...rest}: TextInputProps){
  const { COLORS } = useTheme();
  return (
    <Styles.Container placeholderTextColor={COLORS.GRAY_300} {...rest} />
  )
}