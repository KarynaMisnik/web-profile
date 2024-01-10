import MyImage from '../../assets/img/coder.png'

const showcaseData = [
  {
    name: 'Honey&Products',
    img: MyImage,
    alt: 'descr of proj img',
    links: {
      github: 'https://github.com/example1',
      demo: 'https://example1.com',
    },
    description: (
      <p>
        Web store of a small family business where you can find a good selection
        of honey with amazing aroma and flavour. If you are a
        beekeeper-enthusiast or just want to learn more about bees is possible
        to visit a farm.
      </p>
    ),
  },
  {
    name: 'TinyTechExhibits',
    img: MyImage,
    alt: 'descr of proj img',
    links: {
      github: 'https://github.com/example1',
      demo: 'https://example1.com',
    },
    description: <p>This is a web site for project 2.</p>,
  },
  {
    name: 'Finnish Emblem',
    img: MyImage,
    alt: 'descr of proj img',
    links: {
      github: 'https://github.com/example1',
      demo: 'https://example1.com',
    },
    description: <p>Lorem ipsum </p>,
  },
]

export default showcaseData
