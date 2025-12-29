import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**/index.md',
      schema: {
        badge: 'string',
        date: 'string',
        image: 'string',
        title: 'string',
        description: 'string'
      }
    })
  }
})
