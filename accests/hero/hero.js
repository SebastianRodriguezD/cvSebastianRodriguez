const mainElement = document.createElement('main')

const body = document.getElementsByTagName('body')[0]

body.querySelector('header').insertAdjacentElement('afterend', mainElement)

export default mainElement

const divHero = document.createElement('div')
divHero.id = 'divHero'
divHero.innerHTML =
  " <div class = 'ramdon' ><h3>Hola, yo soy</h3><br><h3 class='nombre'>Sebastian Rodriguez</h3><br>  <h1>Desarrollador Web FULL STACK</h1><br><ul class='ul-hero'><li><a href='https://www.linkedin.com/in/sebastian-rodriguez-d-042a41170/' target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156627/CV/linkedin_vjac8k.png'' id='linkedin'/></a></li>    <li><a href='https://www.instagram.com/yosoysr/' target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156627/CV/instagram_ti51je.png' alt='' id='Igram'/></a></li>    <li><a href=https://wa.me/34677090511?text=Hola,%20estoy%20interesado%20en%20tu%20servicio target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156628/CV/whatsapp_twlweu.png' alt='' id='Wsp'/></a></li><li><a href='https://github.com/SebastianRodriguezD' target='_blank'><img   src='https://res.cloudinary.com/dpqksttwy/image/upload/v1713875090/CV/github_n65l4o.png' alt='' id='GitHub'/></a></li></ul><div id='button-hero'><a href='#contacto'><butto class='button-contratame'>Contratame</butto></a><a href='https://drive.google.com/file/d/1SDqXpF2BYUYS6AypuNgORNVqzRgTul3u/view?usp=sharing' target='_blank'<butto class='button-cv'>Descarga CV</butto></a></div>  <article class='Experiencia'> <p>+10  </p>     <h3>Experiencia</h3>       <p>      +7   </p>   <h3>Proyectos</h3>      </article></div><div id='divImgHero'><img src='https://res.cloudinary.com/dpqksttwy/image/upload/v1714156628/CV/logosr_qmf8zq.png' alt='Foto_Sebastian_Rodriguez' id='imgSR'/></div>"

mainElement.append(divHero)
