import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();
  function handleNew() {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Novo Time"
          subtitle="crie time para adicionar os jogadores"
        />
        <Input placeholder="Nome do time" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
