import type { GetStaticProps, NextPage } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InitialContent from '../components/Home/InitialContent'
import About from '../components/Sections/About/About'
import Blog from '../components/Sections/Blog'
import FeaturedWorks from '../components/Sections/Works/FeaturedWorks'
import { Portfolio } from '../interfaces/Portfolio'
import { Post } from '../interfaces/Post'
import PortfolioService from '../services/PortfolioService'
import PostsService from '../services/PostsService'

interface HomeProps {
  posts: Post[],
  portfolio: Portfolio[]
}
const Home: NextPage<HomeProps> = ({ posts, portfolio }) => {
  return (
    <>
      <Header />
      <InitialContent />
      <FeaturedWorks portfolio={portfolio}/>
      <About />
      <Blog posts={posts} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      posts: await PostsService.getAllPosts(), 
      portfolio: await PortfolioService.getAll(),
    },
  }
}

export default Home
