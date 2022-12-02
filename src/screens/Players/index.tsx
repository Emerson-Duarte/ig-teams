import { Header } from "components/Header";
import { Highlight } from "components/Highlight";
import { ButtonIcon } from "components/ButtonIcon";
import { Input } from "components/Input";
import { Filter } from "components/Filter";
import * as Styles from './styles';
import {FlatList} from "react-native";
import {useState} from "react";
import {PlayerCard} from "components/PlayerCard";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Fulano', 'Mais 1']);

  return (
    <Styles.Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subtitle="Adicione a galera e separe os times" />
      <Styles.Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Styles.Form>
      <Styles.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item =>  item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <Styles.NumberOfPlayers>{players.length}</Styles.NumberOfPlayers>
      </Styles.HeaderList>
      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Styles.Container>
  )
}
