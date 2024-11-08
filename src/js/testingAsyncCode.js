import GameSaving from "./gameSaving";
import json from "./parser";


export default class GameSavingLoaderForTesting {
  static async load(reader) {
    const data = await reader();
    if (data instanceof Error) {
      throw new Error('Не удалось получить объект');
    } else {
      const value = await json(data); 
      const { id: savingId, created, userInfo: { id: userId, name: userName, level, points } } = JSON.parse(value);
      const currentGame = new GameSaving(savingId, created, userId, userName, level, points);
      return new Promise((resolve) => {
        resolve(currentGame);
      });
    }
  }
}
