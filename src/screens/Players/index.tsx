import { Header } from "components/Header";
import { Highlight } from "components/Highlight";
import { ButtonIcon } from "components/ButtonIcon";
import { Input } from "components/Input";
import { Filter } from "components/Filter";
import * as Styles from './styles';

export function Players() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
      <Styles.Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Styles.Form>
      <Filter title="Time A"></Filter>
    </Styles.Container>
  )
}
