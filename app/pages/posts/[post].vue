<script setup lang="ts">
  const route = useRoute()
  const routedPath = route.path

  const { data: post } = await useAsyncData(
    () => `post:${routedPath}`,
    () => queryCollection('posts').path(routedPath).first(),
    { default: () => null }
  )

  if (import.meta.server && !post.value) {
    throw createError({ statusCode: 404 })
  }

  const { badges } = useBadges()
  const badge = computed(() =>
    post.value ? badges[post.value.badge as keyof typeof badges] : null
  )

  const seoTitle = computed(() => post.value?.title || 'Untitled post')
  const seoDescription = computed(
    () => post.value?.description || 'Undescribed post'
  )
  const seoImage = computed(() => post.value?.image || '/header.webp')
  const seoUrl = computed(() => `https://www.wanderer.my.id${routedPath}`)

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogType: 'article',
    ogImage: seoImage,
    ogUrl: seoUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: seoImage
  })
</script>

<template>
  <UBlogPost
    v-if="post"
    :badge="badge ?? undefined"
    :image="post.image"
    :date="post.date"
    :title="post.title"
    :description="post.description"
    :ui="{
      root: 'bg-default rounded-xl',
      image: 'object-contain',
      footer: 'px-4 sm:px-6'
    }"
  >
    <template #footer>
      <ContentRenderer :value="post" />
    </template>
  </UBlogPost>
</template>
