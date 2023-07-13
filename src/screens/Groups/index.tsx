import { useState } from "react";
import { useNavigation } from '@react-navigation/native'

import { StatusBar } from "expo-status-bar";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/GrupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Container } from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  
  const navigation = useNavigation();

  function handleNewGroup (){
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title="TEAMS" subtitle="Monte o seu MELHOR time" />
      <FlatList 
        data={groups} 
        keyExtractor={(_item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({item , index}) => (
          <GroupCard title={item}  key={index}/>
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de times vazia."/>
        )}
        />
        <Button title="Crie um time" onPress={handleNewGroup}/>
      <StatusBar style="light" />
    </Container>
  );
}
