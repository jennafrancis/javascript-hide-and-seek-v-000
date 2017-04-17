function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i ++) {
    lis[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild() {
  let doc = document.getElementById('grand-node')
  for (let i = 0, l = doc.querySelectorAll('div').length; i < l; i++) {
    doc = doc.querySelector('div')
  }
  return doc
}
