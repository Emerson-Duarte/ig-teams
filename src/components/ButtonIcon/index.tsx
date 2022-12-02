import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as Styles from './styles';
import { ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Styles.Container {...rest}>
      <Styles.Icon name={icon} type={type} />
    </Styles.Container>
  )
}
