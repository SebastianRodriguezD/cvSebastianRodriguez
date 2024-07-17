const proyects = [
  {
    name: 'Shop On Line',
    a: 'https://shop-online-flex.netlify.app/',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713985941/CV/Captura_de_pantalla_2024-04-24_210705_l9e3lr.png'
  },
  {
    name: 'Gamers Shop',
    a: 'https://gamershopsr.netlify.app/',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713985940/CV/Captura_de_pantalla_2024-04-24_210843_ftu8hs.png'
  },
  {
    name: 'Igram',
    a: 'https://igram-sr.netlify.app/',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713985967/CV/Captura_de_pantalla_2024-04-24_211229_shg8yc.png'
  },
  {
    name: 'Portafolio',
    a: 'https://portafolio-sr-flex.netlify.app/',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713985940/CV/Captura_de_pantalla_2024-04-24_211115_orzqjp.png'
  },
  {
    name: 'Games Hub',
    a: 'https://gameshubsr.netlify.app/',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1715418175/CV/Captura_de_pantalla_2024-05-11_110225_tkhyyi.png'
  },
  {
    name: 'Api Rest - Backend',
    a: 'https://gameshubsr.netlify.app/',
    image: 'https://github.com/SebastianRodriguezD/proyecto6Backend'
  },
  {
    name: 'Api Rest Auth - Backend',
    a: 'https://github.com/SebastianRodriguezD/proyecto7backend',
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1721236064/CV/Captura_de_pantalla_2024-07-17_190604_bvtepb.png'
  }
]

export const selectProyects = document.createElement('Section')
selectProyects.id = 'proyects'
selectProyects.classList.add('SectionPr')

const body = document.getElementsByTagName('body')[0]

body.querySelector('#skill').insertAdjacentElement('afterend', selectProyects)

const pintarSkills = (proyectos) => {
  const sectionProyects = document.querySelector('#proyects')

  sectionProyects.innerHTML = ''
  const pProyects = document.createElement('p')
  pProyects.classList.add('p-pr')
  pProyects.innerText = 'PROYECTOS'
  sectionProyects.appendChild(pProyects)

  const divProyects = document.createElement('div')
  divProyects.classList.add('divProyects')
  sectionProyects.appendChild(divProyects)

  for (const proyecto of proyectos) {
    const articlePr = document.createElement('article')
    const divImg = document.createElement('div')
    const nombre = document.createElement('h3')
    const a = document.createElement('a')
    const img = document.createElement('img')

    articlePr.className = 'proyects-container'
    divImg.classList.add('imgContainerPr')
    img.src = proyecto.image
    nombre.textContent = proyecto.name
    a.href = proyecto.a
    a.target = '_blank'

    articlePr.appendChild(divImg)
    divImg.appendChild(a)
    a.appendChild(img)
    articlePr.appendChild(nombre)
    divProyects.appendChild(articlePr)
  }
}

pintarSkills(proyects.reverse())
