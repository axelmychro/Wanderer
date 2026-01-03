export type SiteConfig = {
  name: string
  lang: string
  title: string
  description: string
  image: string
}
export type ProfileConfig = {
  author: string
  avatar?: string
  bio?: string
  links?: {
    label?: string
    to: string
    icon: string
  }[]
}
