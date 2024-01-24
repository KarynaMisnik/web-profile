import TinyTechExhibits from '../../assets/img/Tiny Tech Exhibits.png'
import HoneyandProduct from '../../assets/img/Honey-SPA-shop.png'
import FinnishEmblem from '../../assets/img/FinnishEmblem.png'

const showcaseData = [
  {
    name: 'Honey&Products',
    img: HoneyandProduct,
    alt: 'Preview of Honey&Products SPA web store',
    links: {
      github: 'https://github.com/KarynaMisnik/bee_e-spa',
      demo: 'https://karynamisnik.github.io/Honey-web/',
    },
    description: (
      <p>
        Web store of an imaginary family business that produces honey, sweets,
        and cosmetics based on honey. Make yourself familiar with the family
        story, selection of shop items, and services offered by Honey &
        Products.
      </p>
    ),
  },
  {
    name: 'TinyTechExhibits',
    img: TinyTechExhibits,
    alt: 'Prewiew of Tiny Tech Exhibits web project',
    links: {
      github: 'https://github.com/KarynaMisnik/tiny-tech-exhibits',
      demo: 'https://karynamisnik.github.io/tiny-tech-exhibits/#',
    },
    description: (
      <p>
        This project serves as a dynamic playground for honing my HTML, CSS, and
        JavaScript skills. Since 2022, I've consolidated various small projects
        to practice understanding programming logic, implementing algorithms,
        and working with intricate layouts and advanced CSS.
      </p>
    ),
  },
  {
    name: 'Finnish Emblem',
    img: FinnishEmblem,
    alt: 'Preview of Finnish Emblem web app about Finnish coat of arms',
    links: {
      github: 'https://github.com/KarynaMisnik/coat-of-arms',
      demo: 'https://karynamisnik.github.io/coat-of-arms/',
    },
    description: (
      <p>
        This project is currently under development. You can explore it by
        referring to the GitHub README. The primary focus of the project
        revolves around the regional structure of Finland. It serves two main
        purposes: educational and inspirational. My main goal in building this
        app is to inspire residents, citizens, and tourists to travel around
        Finland and appreciate its beauty.
      </p>
    ),
  },
]

export default showcaseData
