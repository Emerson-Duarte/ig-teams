import * as Styles from "screens/Groups/styles";
import { Header } from "components/Header";
import {Highlight} from "components/Highlight";
import {GroupCard} from "components/GroupCard";

export default function Groups() {
  return (
    <Styles.Container>
      <Header />
      <Highlight title="Título" subtitle="Subtítulo" />
      <GroupCard title="Galera do Vakinha" />
    </Styles.Container>
  );
}
