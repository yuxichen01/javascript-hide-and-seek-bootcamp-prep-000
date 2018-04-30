function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
<<<<<<< HEAD
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var rankUp = document.getElementById('app').querySelectorAll('ul.ranked-list')
=======
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var rankUp = document.querySelectorAll('ul.ranked-list li')
>>>>>>> cc059fc3dd7dea04a1953324f992a736f59d3870
  for (var i=0; i < rankUp.length; i++) {
    rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n 
  }
}
function deepestChild() {
<<<<<<< HEAD
  var deepestNest = document.getElementById('grand-node').querySelectorAll('div')
  return deepestNest[deepestNest.length - 1]
=======
  var grandNode = document.getElementById('grand-node').querySelectorAll('div')
  var deeplyNestedChild
  for (var i=0;i < grandNode.length; i++ ) {
    deeplyNestedChild = grandNode[i].querySelector('div')
  }
  return deeplyNestedChild
>>>>>>> cc059fc3dd7dea04a1953324f992a736f59d3870
}