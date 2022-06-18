import { Post } from './Post'

export interface User {
  id: number
  name: string
  email: string
  role: string
  posts?: Post[]
  createdAt: Date
  updatedAt: Date
}
