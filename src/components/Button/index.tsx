import { TouchableOpacityProps } from "react-native";
import * as Styles from './styles';
import { ButtonTypeStylesProp } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProp;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Styles.Container type={type} {...rest}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  )
}
