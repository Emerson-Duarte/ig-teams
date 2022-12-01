import { useState } from "react";
import { FlatList } from "react-native";
import * as Styles from "screens/Groups/styles";
import { Header } from "components/Header";
import { Highlight } from "components/Highlight";
import { GroupCard } from "components/GroupCard";
import ListEmpty from "components/ListEmpty";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['teste']);

  return (
    <Styles.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Você ainda não possui nenhuma turma cadastrada!" /> }
      />
    </Styles.Container>
  );
}
