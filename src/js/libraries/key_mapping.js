export class KeyPressed {
  constructor(){}

  isEnter(e) {
    if (e.keyCode === 13) { return true }
    return false
  }

  isComma(e) {
    if (e.keyCode === 188) { return true }
    return false
  }

  isBackSpace(e) {
    if (e.keyCode === 8) { return true }
    return false
  }

  isTab(e) {
    if (e.keyCode === 9) { return true }
    return false
  }

  isDot(e) {
    if (e.keyCode === 190) { return true }
    return false
  }
}