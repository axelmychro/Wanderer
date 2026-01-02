import type { SiteConfig, ProfileConfig } from '~/types'

export const siteConfig: SiteConfig = {
  name: 'Wanderer',
  lang: 'en',
  title: 'Eons Adrift',
  description: 'anywhere the wind blows doesn\'t really matter to me',
  image: '/header.webp'
}
export const profileConfig: ProfileConfig = {
  author: 'Axel',
  avatar: '/avatar.png',
  bio: 'here, but not really',
  links: [
    {
      to: 'mailto:axelmychro@gmail.com',
      icon: 'i-lucide-mail'
    },
    {
      to: 'https://www.linkedin.com/in/axelramadhan',
      icon: 'i-lucide-linkedin'
    },
    {
      to: 'https://github.com/axelmychro',
      icon: 'i-mingcute-github-line'
    }
  ]
}
