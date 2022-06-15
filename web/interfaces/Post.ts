export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  short_description: string;
  image: string;
  time_to_read: string;
  likes: number;
  author: any;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}