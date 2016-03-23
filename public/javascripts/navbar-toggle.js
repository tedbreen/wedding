(function () {
  var navBarMenu = document.getElementById('navBarMenu')
  var navButton = document.getElementById('hamburger-button')

  var isActive = false

  var activeClass = 'is-active'

  navButton.addEventListener('click', function () {
    if (isActive) {
      navButton.classList.remove(activeClass)
      navBarMenu.classList.remove(activeClass)
    }
    else {
      navButton.classList.add(activeClass)
      navBarMenu.classList.add(activeClass)
    }
    isActive = !isActive
  })
})()
