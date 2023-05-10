import AsyncStorage from '@react-native-async-storage/async-storage';

export async function groupCreate(groupName: string) {
    try {
        const group = {
            name: groupName,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            users: [],
            messages: []
        }
        const groups = await AsyncStorage.getItem('groups');
        if (groups !== null) {
            const groupsArray = JSON.parse(groups);
            groupsArray.push(group);
            await AsyncStorage.setItem('groups', JSON.stringify(groupsArray));
        } else {
            await AsyncStorage.setItem('groups', JSON.stringify([group]));
        }
        return group;
    } catch (error) {
        console.log(error);
        return null;
    }
}