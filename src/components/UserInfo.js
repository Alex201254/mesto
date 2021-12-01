export default class UserInfo {
  constructor(userName, infoElement) {
    this._userName = userName;
    this._infoElement = infoElement;
  }

  getUserInfo() {
    this.user = {};
    this.user.name = this._userName.textContent;
    this.user.info = this._infoElement.textContent;
    return this.user;
  }

  setUserInfo(data) {
    this._userName.textContent = data['input-name'];
    this._infoElement.textContent = data['input-status'];
  }
}
