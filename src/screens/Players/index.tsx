import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayersCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([
    "Gabriel",
    "Neymar",
    "Ronaldo Fenômeno"
  ]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome do Time"
        subtitle="Adicione os jogadores nos times"
      />
      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <PlayersCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de jogadores vazia." />
        )}
        showsVerticalScrollIndicator={false}

        //recebe um array condicional primeira posicao é o padrao, mas caso a condicao do segundo array seja verdadeira assume o estilo do segundo array
        contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex: 1} ]} 
      />
      <Button title="Excluir Time" type="SECONDARY"/>
    </Container>
  );
}
