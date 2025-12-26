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
      variant: 'outline'
    }
  } as const

  const posts = ref([
    {
      badge: tags.other,
      image: '/posts/a_social_repose/image.png',
      date: '2025-12-26',
      title: 'a social repose',
      description: 'how should this "good" cs student spend his free time?',
      to: '/posts/a-social-repose'
    },
    {
      badge: tags.other,
      image: '/posts/hello_world/image.png',
      date: '2025-12-25',
      title: 'hello world!',
      description: 'this is the first post, everything a work in progress~',
      to: '/posts/hello-world'
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

  return {
    tags,
    posts,
    postLabels,
    activePostLabel,
    filteredPosts
  }
}
