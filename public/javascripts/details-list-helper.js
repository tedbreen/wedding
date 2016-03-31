module.exports = function (items, options) {
  var ul = '<ul class="details-list">'

  items.forEach(function (item) {
    ul += '<li class="details-list-item">' + options.fn(item) + '</li>'
  })

  return ul + '</ul>'
}
