export const header = document.createElement('header')
var body = document.getElementsByTagName('body')[0]

// Insertar el encabezado al principio del cuerpo
body.insertBefore(header, body.firstChild)
const buttonAbrir = document.createElement('button')
buttonAbrir.innerHTML = '<i class="bi bi-list"></i>'
buttonAbrir.classList.add('abrir')

const nav = document.createElement('nav')
nav.innerHTML =
  "<button class= 'cerrar'><i class='bi bi-x-square'></i></button><ul class='ul-header'><li class='li-header'><a href='#'>Inicio</a></li><li class='li-header'><a href='#Sobre_mi'>Sobre Mí</a></li><li class='li-header'><a href='#skill'>Skills</a></li><li class='li-header'><a href='#proyects'>Proyectos</a></li><li class='li-header'><a href='#contacto'>Contacto</a></li></ul>"
nav.classList.add('nav-header')

nav.id = 'nav-header'

const button = document.createElement('button')
button.innerHTML = 'Contratame'
button.classList.add('button-contratame')

const a = document.createElement('a')
a.href = '#contacto'
a.appendChild(button)

const divButton = document.createElement('div')
divButton.classList.add('divButton')
divButton.appendChild(a)

header.appendChild(buttonAbrir)
header.appendChild(nav)
header.appendChild(divButton)
