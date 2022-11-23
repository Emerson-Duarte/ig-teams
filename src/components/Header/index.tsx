import logoImg from 'assets/logo.png';
import * as Styles from './styles';

type Props = {
  showBackButton?: boolean;
}
export function Header({ showBackButton = false }: Props) {
  return (
    <Styles.Container>
      { showBackButton && (
        <Styles.BackButton>
          <Styles.BackIcon />
        </Styles.BackButton>
      )}
      <Styles.Logo source={logoImg} />
    </Styles.Container>
  )
}
