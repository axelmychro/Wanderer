// Configure your informations here
export const siteConfig: SiteConfig = {
  name: 'Wanderer',
  lang: 'en',
  title: 'Eons Adrift',
  description: 'anywhere the wind blows doesn\'t really matter to me',
  image: '/header.webp',
}

// You can always add more items into the links
export const profileConfig: ProfileConfig = {
  author: 'Axel',
  avatar: '/avatar.png',
  bio: 'here, but not really',
  links: [
    {
      to: 'mailto:axelmychro@gmail.com',
      icon: 'i-lucide-mail',
    },
    {
      to: 'https://www.linkedin.com/in/axelramadhan',
      icon: 'i-simple-icons-linkedin',
    },
    {
      to: 'https://github.com/axelmychro',
      icon: 'i-simple-icons-github',
    },
    // {
    //   to: 'https:/**.*/**',
    //   icon: 'i-**-*',
    // },
  ],
}

import type { SiteConfig, ProfileConfig } from '~/types/yourInformationConfig'
