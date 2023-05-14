import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from '@storage/storaheConfig';
import { playersGetByGroup } from './playersGetByGroup'
import { PlayerStorageDTO } from './PlayerStorageDTO';

export async function playerAddByGroup(player: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playerExists = storedPlayers.find(storedPlayer => storedPlayer.name === player.name);

    if (playerExists) {
      throw new AppError('Jogador já cadastrado');
    }

    const storage = JSON.stringify([...storedPlayers, player]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}:${group}`, storage);
  } catch (error) {
    throw error;
  }
}