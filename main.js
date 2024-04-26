import './style.css'
import { header } from './accests/header/header'
import mainElement from './accests/hero/hero'
import { sectionMain } from './accests/sobre_mi/sobremi'
import { selectSkils } from './accests/skill/skill.js'
import { selectProyects } from './accests/proyects/proyects.js'
import { selectContacto } from './accests/contacto/contacto.js'
import { footer } from './accests/footer/footer.js'

document.body.appendChild(mainElement)
const divHero = mainElement.querySelector('#divHero')
divHero.parentNode.insertBefore(sectionMain, divHero.nextSibling)

const nav = document.querySelector('#nav-header')
const abrir = document.querySelector('.abrir')
const cerrar = document.querySelector('.cerrar')

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible')
})

abrir.addEventListener('click', () => {
  nav.classList.add('visible')
})
