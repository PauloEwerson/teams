import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PLAYER_COLLECTION } from "@storage/storaheConfig";

export async function playersGetByGroup(group: string) {
  try {
    const storagePlayers = await AsyncStorage.getItem(`${PLAYER_COLLECTION}:${group}`);

    const players: PlayerStorageDTO[] = storagePlayers ? JSON.parse(storagePlayers) : [];

    return players;

  } catch (error) {
    throw error;
  }
}