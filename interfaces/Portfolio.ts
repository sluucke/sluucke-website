export interface Portfolio {
  id: number
  title: string
  description: string
  long_description: string;
  slug: string
  url: string
  github_repository: {
    url: string
    name: string
  }
  doneIn: string
  tags: string[]
  image: string
  date: string
  mainColor: string
}
