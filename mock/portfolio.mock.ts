import { Portfolio } from '../interfaces/Portfolio'

export const PortfolioWorks: Portfolio[] = [
  {
    id: 1,
    title: 'UrStyle E-Commerce',
    description: 'UI/UX Front-end development & Backend development',
    long_description:
      'In this project, I had developed an e-commerce website for a fashion brand(fictional). The website was developed using Next.JS at frontend, in backend I tested the serverless backend of Next.JS and for payment I used PayPal.',
    slug: 'ur-style-ecommerce',
    url: 'https://ur-style.vercel.app/',
    github_repository: {
      url: 'https://github.com/sluucke/next-ecommerce',
      name: 'ur-style-ecommerce',
    },
    doneIn: '1 month',
    image: 'https://i.imgur.com/GgDMQ3F.png',
    tags: [
      'React',
      'Next.js',
      'JavaScript',
      'Material UI',
      'Node.js',
      'MongoDB',
    ],
    date: '27/10/2021',
    mainColor: '#9d03fc',
  },
  {
    id: 2,
    title: 'Ilusion - Roleplay',
    description: 'UI/UX Front-end development & Backend development',
    long_description:
      'In this project, I had developed an allow list system with the game FiveM. The user needs to register on the website before join into the game.',
    slug: 'ilusion-rp',
    url: 'https://ilusionrp.com/',
    github_repository: {
      url: '',
      name: '',
    },
    doneIn: '2 weeks',
    image: 'https://i.imgur.com/D2XgfYX.png',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Express',
      'Chakra UI',
      'Node.js',
      'PostgreSQL',
    ],
    date: '09/04/2022',
    mainColor: '#fcba03',
  },
]
