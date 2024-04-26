const skill = [
  {
    name: 'HTML5',
    porcentaje: '80 %',
    estrellas: 4,
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713875051/CV/html-5_1_hqjmso.png'
  },
  {
    name: 'CSS',
    porcentaje: '70 %',
    estrellas: 3,
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713875049/CV/css-3_njctf8.png'
  },
  {
    name: 'JavaScript',
    porcentaje: '60 %',
    estrellas: 3,
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713875052/CV/4373213_js_logo_logos_icon_zf8nu2.png'
  },
  {
    name: 'VsCODE',
    porcentaje: '80 %',
    estrellas: 4,
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713875048/CV/visual-basico_ozgyxe.png'
  },
  {
    name: 'Git Hub',
    porcentaje: '80 %',
    estrellas: 4,
    image:
      'https://res.cloudinary.com/dpqksttwy/image/upload/v1713875090/CV/github_n65l4o.png'
  }
]

export const selectSkils = document.createElement('Section')
selectSkils.id = 'skill'
selectSkils.classList.add('SectionSkills')

const body = document.getElementsByTagName('body')[0]

body.querySelector('#divHero').insertAdjacentElement('afterend', selectSkils)

const pintarSkills = (habilidades) => {
  const sectionSkills = document.querySelector('#skill')

  sectionSkills.innerHTML = ''
  const pSkill = document.createElement('p')
  pSkill.classList.add('p-skill')
  pSkill.innerText = 'SKILLIS'
  sectionSkills.appendChild(pSkill)

  const divSkill = document.createElement('div')
  divSkill.classList.add('divSkill')
  sectionSkills.appendChild(divSkill)

  for (const habilidad of habilidades) {
    const articleHab = document.createElement('article')
    const divImg = document.createElement('div')
    const nombre = document.createElement('h3')
    const porcentaje = document.createElement('p')
    const divEstrellas = document.createElement('div')
    const img = document.createElement('img')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (i <= habilidad.estrellas) {
        estrella.classList.add('rellena')
      }
      divEstrellas.appendChild(estrella)
    }

    articleHab.className = 'skill-container'
    divImg.classList.add('imgContainer')
    divEstrellas.classList.add('estrellas', 'skill-estrellas')
    img.src = habilidad.image
    nombre.textContent = habilidad.name
    porcentaje.textContent = `${habilidad.porcentaje}`

    articleHab.appendChild(divImg)
    divImg.appendChild(img)
    articleHab.appendChild(nombre)
    articleHab.appendChild(porcentaje)
    articleHab.appendChild(divEstrellas)
    sectionSkills.appendChild(articleHab)
    divSkill.appendChild(articleHab)
  }
}

pintarSkills(skill)
