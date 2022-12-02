import { TouchableOpacityProps } from "react-native";

import { FilterStyleProps } from "components/Filter/styles";
import * as Styles from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive= false, ...rest }: Props) {
  return (
    <Styles.Container isActive={isActive} {...rest}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  )
}