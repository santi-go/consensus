export class MailChecker {
  constructor(){
    this.twoDotRegex = /[\.]{2}/
    this.twoAtRegex = /[\@]{2}/
  }

  isAllowedIn(text, character, position) {
    let chain = text + character
    if (eval(this.twoDotRegex).test(chain)) {return null}
    if (eval(this.twoAtRegex).test(chain)) {return null}
    let thePattern = this.selectPattern(text, position)
    let isAllowed = this.matches(thePattern, character)
    return isAllowed
  }

  matches(pattern, character) {
    let matcher = new RegExp(pattern)
    let result = matcher.exec(character)
    return result
  }

  selectPattern(text, position) {
    let patterns = {
      local: /[@!#$%&'*+/=?^_`{|}~.-]|[a-z]|[0-9]/ig,
      domain: /[.-]|[a-z]|[0-9]/ig
    }
    let result = patterns.local
    let positionOfAt = text.indexOf('@')
    if (text.includes('@') && positionOfAt < position) result = patterns.domain
    return result
  }
}
