import * as Styles from './styles';
import {Header} from "components/Header";
import {Highlight} from "components/Highlight";

export function Players() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
    </Styles.Container>
  )
}
