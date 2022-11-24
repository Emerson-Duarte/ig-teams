import * as Styles from "screens/Groups/styles";
import { Header } from "components/Header";
import {Highlight} from "components/Highlight";

export default function Groups() {
  return (
    <Styles.Container>
      <Header />
      <Highlight title="Título" subtitle="Subtítulo" />
    </Styles.Container>
  );
}
