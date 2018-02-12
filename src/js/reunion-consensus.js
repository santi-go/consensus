
function parseUrl() {
    let urlParams = window.location.search
    let url = urlParams.substring(1)
    let urlJson = {'token': url}
    this.post(urlJson)
}
function post (data) {
    let xhr = new XMLHttpRequest()
    xhr.open('POST','http://0.0.0.0:4567/vote-consensus', true)
    xhr.send(JSON.stringify(data))
    xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhr.responseText)
      let response = JSON.parse(xhr.responseText)
      document.querySelector(".invited").innerText = response['user']
      document.querySelector(".vote").innerText = response['vote']
      document.querySelector(".proposer").innerText = response['proposer']
      document.querySelector(".proposal-box").innerText = response["proposal_text"]
        }
    }
}
