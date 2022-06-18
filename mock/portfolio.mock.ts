import { Portfolio } from '../interfaces/Portfolio'

export const PortfolioWorks: Portfolio[] = [
  {
    id: 1,
    title: 'UrStyle E-Commerce',
    description: 'UI/UX Front-end development & Backend development',
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
    mainColor: '#6E2887',
  },
  {
    id: 2,
    title: 'Ilusion - Roleplay',
    description: 'UI/UX Front-end development & Backend development',
    slug: 'ur-style-ecommerce',
    url: 'https://ilusionrp.com/',
    github_repository: {
      url: '',
      name: '',
    },
    doneIn: '2 weeks',
    image: '',
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
    mainColor: '#00bcd4',
  },
]
