import Link from 'next/link'
import { Post } from '../../../../interfaces/Post'
import { Button } from '../../../reusables/Button'
import {
  BlogDescription,
  BlogImage,
  BlogTitle,
  PostContainer,
  BlogTimeToRead,
} from './styles'
import { FiClock } from 'react-icons/fi'

const BlogPost = ({
  image,
  title,
  short_description,
  slug,
  time_to_read,
  date,
}: Post) => {
  return (
    <PostContainer>
      <BlogImage src={image} alt="Post Image" draggable={false} />
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{short_description}</BlogDescription>
      <BlogTimeToRead>
        <p>
          <>
            <FiClock /> {time_to_read.text} • {date}
          </>
        </p>
      </BlogTimeToRead>

      <Button color="black">
        <Link href={`/blog/post/${slug}`} passHref>
          <a>
            <div>
              <svg
                width="51"
                height="8"
                viewBox="0 0 51 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow"
              >
                <path
                  d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <span id="btn-text">view details</span>
          </a>
        </Link>
      </Button>
    </PostContainer>
  )
}

export default BlogPost
