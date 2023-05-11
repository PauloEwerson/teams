import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/storaheConfig";

export async function groupsGetAll() {
  try {
    const groupsStorage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = groupsStorage ? JSON.parse(groupsStorage) : [];

    return groups;

  } catch (error) {
    throw error;
  }
}