import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConsig";
import { AppError } from "@utils/AppError";
import { PlayerDTO } from "./PlayerDTO";

export async function getPlayerByGroup(team: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${team}`);

    const player: PlayerDTO[] = storage ? JSON.parse(storage) : [];
    return player;
  } catch (error) {
    throw error;
  }
}

export async function getPlayerByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getPlayerByGroup(group);
    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}

export async function addPlayerByGroup(newPlayer: PlayerDTO, team: string) {
  try {
    const playerStorage = await getPlayerByGroup(team);
    const playerAlreadyExists = playerStorage.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Jogador já cadastrado no time");
    }
    const storage = JSON.stringify([...playerStorage, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${team}`, storage);
  } catch (error) {
    throw error;
  }
}

export async function playerRemove(player: string, team: string) {
  try {
    const storage = await getPlayerByGroup(team);
    const playerFiltered = storage.filter((p) => p.name !== player);
    const players = JSON.stringify(playerFiltered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${team}`, players);
  } catch (error) {
    throw error;
  }
}
