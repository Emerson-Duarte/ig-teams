import * as Styles from './styles';

type Props = {
  message: string;
}
export default function ListEmpty({ message }: Props) {
  return (
    <Styles.Container>
      <Styles.Message>
        {message}
      </Styles.Message>
    </Styles.Container>
  )
}
