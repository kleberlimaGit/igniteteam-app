import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/GrupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export default function Groups() {
  const [groups, setGroups] = useState(['Ec. Bahia']);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua Turma" />
      <FlatList 
        data={groups} 
        keyExtractor={(_item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({item , index}) => (
          <GroupCard title={item}  key={index}/>
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de times vazias."/>
        )}
        />
        <Button title="Cadastrar time"/>
      <StatusBar style="light" />
    </Container>
  );
}
