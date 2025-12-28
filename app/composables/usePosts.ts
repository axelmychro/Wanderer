export const usePosts = () => {
  const tags = {
    other: {
      label: 'other',
      color: 'secondary',
      variant: 'subtle'
    },
    dev: {
      label: 'dev',
      color: 'primary',
      variant: 'solid'
    }
  } as const

  const posts = ref([
    {
      badge: tags.other,
      image: '/posts/hello_world/image.png',
      date: '2025-12-25',
      title: 'hello world!',
      description: 'this is the first post, everything a work in progress~',
      to: '/posts/hello-world'
    },
    {
      badge: tags.other,
      image: '/posts/a_social_repose/image.png',
      date: '2025-12-26',
      title: 'a social repose',
      description: 'how should this "good" cs student spend his free time?',
      to: '/posts/a-social-repose'
    },
    {
      badge: tags.dev,
      image: '/posts/my_unemployed_romance/image.png',
      date: '2025-12-27',
      title: 'my unemployed romance',
      description: 'i made something, alright? the aftermath is secondary..',
      to: '/posts/my-unemployed-romance'
    }
  ])

  const activePostLabel = useState<string | null>(
    'active-post-label',
    () => null
  )

  const postLabels = computed(() => {
    return Object.values(tags).map((tag) => ({
      ...tag,
      count: posts.value.filter((post) => post.badge?.label === tag.label)
        .length
    }))
  })

  const filteredPosts = computed(() => {
    if (!activePostLabel.value) return posts.value
    return posts.value.filter(
      (post) => post.badge?.label === activePostLabel.value
    )
  })

  const getPostBySlug = (slug: string) => {
    return posts.value.find((post) => post.to.endsWith(slug))
  }

  return {
    tags,
    posts,
    postLabels,
    activePostLabel,
    filteredPosts,
    getPostBySlug
  }
}
