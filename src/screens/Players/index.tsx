import { FlatList, Alert } from "react-native";
import { useState, useEffect } from "react";

import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { PlayersCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import {
  addPlayerByGroup,
  getPlayerByGroup,
  getPlayerByGroupAndTeam,
  playerRemove,
} from "@storage/players/Players";
import { PlayerDTO } from "@storage/players/PlayerDTO";
import { deleteGroupByName } from "@storage/group/Group";

interface RouteParams {
  group: string;
}

export default function Players() {
  const [team, setTeam] = useState("Time Principal");
  const [players, setPlayers] = useState<PlayerDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const route = useRoute();
  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  async function addPlayer() {
    if (newPlayerName.trim().length === 0) {
      return;
    }
    const playerDTO: PlayerDTO = { name: newPlayerName, team };
    try {
      await addPlayerByGroup(playerDTO, group);
      setNewPlayerName("");
      getPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Cadastrar jogador", error.message);
      }
      return Alert.alert(
        "Error inesperado",
        "Por favor tente novamente mais tarde."
      );
    }
  }

  async function getPlayersByTeam() {
    try {
      const players = await getPlayerByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      return Alert.alert(
        "Error inesperado",
        "Por favor tente novamente mais tarde."
      );
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      Alert.alert("Excluir jogador", `Deseja remover ${playerName} do ${group}?`, [
        {
          text: "Sim",
          onPress: async () => {
            await playerRemove(playerName, group);
            getPlayersByTeam();
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    } catch (error) {
      return Alert.alert(
        "Error inesperado",
        "Por favor tente novamente mais tarde."
      );
    }
  }

  async function handleRemoveTeam() {
    Alert.alert("Excluir time", `Deseja remover o time ${group} ?`, [
      {
        text: "Sim",
        onPress: async () => {
          await deleteGroupByName(group);
          navigation.navigate("groups");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  useEffect(() => {
    getPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione os jogadores no time" />
      <Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={addPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={addPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time Principal", "Time Reserva"]}
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
          <PlayersCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de jogadores vazia." />
        )}
        showsVerticalScrollIndicator={false}
        //recebe um array condicional primeira posicao é o padrao, mas caso a condicao do segundo array seja verdadeira assume o estilo do segundo array
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        title="Excluir Time"
        type="SECONDARY"
        onPress={handleRemoveTeam}
      />
    </Container>
  );
}
