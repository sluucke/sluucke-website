import * as fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../interfaces/Post'
import readingTime from 'reading-time'

class PostsService {
  /**
   * Get all posts.
   * @returns All posts.
   */
  public async getAllPosts(): Promise<Post[]> {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)

    return await Promise.all(
      filenames.map(async (filename) => {
        const post = await this.getPost(filename)
        return post
      })
    )
  }

  /**
   * Get a post by its filename.
   *
   * @param filename The filename of the post.
   * @returns The post.
   */
  public async getPost(filename: string): Promise<Post> {
    const fullPath = path.join(process.cwd(), 'posts', filename)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    if (!fileContents) {
      throw new Error(`Post ${filename} not found`)
    }
    const matterResult = matter(fileContents)
    const processedPost = {
      // ...matterResult.data,
      slug: filename.replace(/\.md$/, ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
      time_to_read: readingTime(matterResult.content),
      author: matterResult.data.author,
      image: matterResult.data.image,
      short_description: matterResult.data.short_description,
      content: matterResult.content,
    }
    return processedPost
  }
}

export default new PostsService()
