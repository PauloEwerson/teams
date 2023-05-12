import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storaheConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(groupName: string) {
  try {
    const storageGroups = await groupsGetAll();

    const storage = JSON.stringify([...storageGroups, groupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
