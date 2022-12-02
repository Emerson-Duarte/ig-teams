import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "components/Header";
import { Highlight } from "components/Highlight";
import { ButtonIcon } from "components/ButtonIcon";
import { Input } from "components/Input";
import { Filter } from "components/Filter";
import { PlayerCard } from "components/PlayerCard";
import { ListEmpty } from "components/ListEmpty";
import * as Styles from './styles';
import {Button} from "components/Button";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time!" /> }
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Styles.Container>
  )
}
