const mainElement = document.createElement('main')

const body = document.getElementsByTagName('body')[0]

body.querySelector('header').insertAdjacentElement('afterend', mainElement)

export default mainElement

const divHero = document.createElement('div')
divHero.id = 'divHero'
divHero.innerHTML =
  " <div class = 'ramdon' ><h3>Hola, yo soy</h3><br><h3 class='nombre'>Sebastian Rodriguez</h3><br>  <h1>Desarrollador Web FULL STACK</h1><br><ul class='ul-hero'><li><a href='https://www.linkedin.com/in/sebastian-rodriguez-d-042a41170/' target='_blank'><img   src='./accests/imgSR/linkedin.png' alt='' id='linkedin'/></a></li>    <li><a href='https://www.instagram.com/yosoysr/' target='_blank'><img   src='./accests/imgSR/instagram.png' alt='' id='Igram'/></a></li>    <li><a href=https://wa.me/34677090511?text=Hola,%20estoy%20interesado%20en%20tu%20servicio target='_blank'><img   src='./accests/imgSR/whatsapp.png' alt='' id='Wsp'/></a></li><li><a href='https://github.com/SebastianRodriguezD' target='_blank'><img   src='./accests/imgSR/github.png' alt='' id='GitHub'/></a></li></ul><div id='button-hero'><a href='#contacto'><butto class='button-contratame'>Contratame</butto></a><a href='https://drive.google.com/file/d/1Mkjwy7Es1yEaNowNV4bYqKAhIN5c61Um/view?usp=drive_link' target='_blank'<butto class='button-cv'>Descarga CV</butto></a></div>  <article class='Experiencia'> <p>10+  </p>     <h3>Experiencia</h3>       <p>      5+   </p>   <h3>Proyectos</h3>      </article></div><div id='divImgHero'><img src='./accests/imgSR/logosr.PNG' alt='Foto_Sebastian_Rodriguez' id='imgSR'/></div>"

mainElement.append(divHero)
