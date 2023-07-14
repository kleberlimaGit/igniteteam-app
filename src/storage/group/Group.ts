import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConsig";
import { AppError } from "@utils/AppError";

export async function groupGetAll() {
  try {
    
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  
    } catch (error) {
        throw error;
  }
}


export async function groupCreate(newsGroup: string) {
    try {
      const storageGroups = await groupGetAll();

      const groupAlreadExists = storageGroups.includes(newsGroup);
    
      if (groupAlreadExists) {
        throw new AppError('Time já cadastrado. Por favor cadastre um time diferente.');
      }
      
      const strorage = JSON.stringify([...storageGroups, newsGroup])
      await AsyncStorage.setItem(GROUP_COLLECTION, strorage);
  } catch (error) {
      throw error;
    }
  }

  export async function deleteGroupByName(group: string){
    try {
      const storageGroups = await groupGetAll();
      const groups = storageGroups.filter(g => g !== group);
      await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
      await AsyncStorage.removeItem(`${GROUP_COLLECTION}-${group}`);
    } catch (error) {
      
    }
  }
  