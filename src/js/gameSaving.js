export default class GameSaving {
  constructor(savingId, created, userId, userName, level, points) {
    this.id = savingId;
    this.created = created;
    this.userInfo = {
      "id": userId,
      "name": userName,
      "level": level,
      "points": points
    }
  }
}
