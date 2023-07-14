import { useState } from "react";
import { Alert } from "react-native";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/Group";
import { AppError } from "@utils/AppError";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();
  async function handleNew() {
    try {
      if(group.trim().length <= 0){
        return;
      }

      await groupCreate(group.trim());
    } catch (error) {
      if (error instanceof AppError) {
       return Alert.alert('Cadastrar Time',error.message)
      }else {
        console.log(error);
        return Alert.alert('Cadastrar Time','Erro inesperado tente novamente mais tarde.')
      }
    }
    navigation.navigate("players", { group });
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
