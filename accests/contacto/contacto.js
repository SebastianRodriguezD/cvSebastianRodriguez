export const selectContacto = document.createElement('Section')
selectContacto.id = 'contacto'
selectContacto.classList.add('contacto_class')

const body = document.getElementsByTagName('body')[0]

body
  .querySelector('#proyects')
  .insertAdjacentElement('afterend', selectContacto)

const sectionContacto = document.querySelector('#contacto')

sectionContacto.innerHTML = ''
const pContacto = document.createElement('h3')
pContacto.classList.add('p-contacto')
pContacto.innerText = 'CONTACTO'
sectionContacto.appendChild(pContacto)

const pCorreo = document.createElement('h3')
pCorreo.classList.add('pCorreo')
pCorreo.innerText = 'sebastianrodriguezd@gmail.com'
sectionContacto.appendChild(pCorreo)

const Ulcontacto = document.createElement('ul')
Ulcontacto.classList.add('ul-contacto')
Ulcontacto.innerHTML =
  "<li><a href='https://www.linkedin.com/in/sebastian-rodriguez-d-042a41170/' target='_blank'><img   src= 'https://res.cloudinary.com/dpqksttwy/image/upload/v1714156627/CV/linkedin_vjac8k.png' alt='' id='linkedin'/></a></li>    <li><a href='https://www.instagram.com/yosoysr/' target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156627/CV/instagram_ti51je.png' alt='' id='Igram'/></a></li>    <li><a href=https://wa.me/34677090511?text=Hola,%20estoy%20interesado%20en%20tu%20servicio target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156628/CV/whatsapp_twlweu.png'alt='' id='Wsp'/></a></li><li><a href='https://github.com/SebastianRodriguezD' target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1713875090/CV/github_n65l4o.png' alt='' id='GitHub'/></a></li>"

sectionContacto.appendChild(Ulcontacto)
