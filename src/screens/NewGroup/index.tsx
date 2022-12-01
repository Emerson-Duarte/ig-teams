import * as Styles from './styles';
import {Header} from "components/Header";
import {Highlight} from "components/Highlight";
import {Button} from "components/Button";
import {Input} from "components/Input";

export function NewGroup() {
  return (
    <Styles.Container>
      <Header showBackButton />
      <Styles.Content>
        <Styles.Icon />
        <Highlight title="Nova Turma" subtitle="crie a turma para adicionar pessoas" />
        <Input placeholder="Nome da Turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Styles.Content>
    </Styles.Container>
  )
}
