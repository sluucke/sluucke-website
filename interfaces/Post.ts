import { ReadTimeResults } from 'reading-time'

export interface Post {
  title: string
  slug: string
  content: string
  author: { name: string }
  short_description: string
  image: string
  time_to_read: ReadTimeResults
  date: Date
}
