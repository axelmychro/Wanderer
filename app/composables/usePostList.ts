export const usePostList = () => {
  const activePostLabel = useState<string | null>(
    'active-post-label',
    () => null
  )

  const { resolveBadge } = useBadges()

  const { data: posts } = useAsyncData(
    'posts',
    () => queryCollection('posts').order('date', 'DESC').all(),
    {
      server: false
    }
  )

  const enrichedPosts = computed(() => {
    if (!posts.value) return []

    return posts.value.map(post => ({
      ...post,
      badge: resolveBadge(post.badge)
    }))
  })

  const filteredPosts = computed(() => {
    if (!activePostLabel.value) return enrichedPosts.value

    return enrichedPosts.value.filter(
      post => post.badge?.label === activePostLabel.value
    )
  })

  const postLabels = computed(() => {
    const map = new Map<string, number>()

    for (const post of enrichedPosts.value) {
      if (!post.badge) continue
      map.set(post.badge.label, (map.get(post.badge.label) ?? 0) + 1)
    }

    return Array.from(map, ([label, count]) => ({
      label,
      count
    }))
  })

  return {
    filteredPosts,
    postLabels,
    activePostLabel
  }
}
