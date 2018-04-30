function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var rankUp = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (var i=0; i < rankUp.length; i++) {
    rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n 
  }
}
function deepestChild() {
  var deepestNest = document.getElementById('grand-node').querySelectorAll('div')
  return deepestNest[deepestNest.length - 1]
}