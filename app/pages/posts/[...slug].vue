<script setup lang="ts">
  const route = useRoute()
  const { badges } = useBadges()

  const badge = computed(() =>
    post.value ? badges[post.value.badge as keyof typeof badges] : null
  )

  const { data: post } = await useAsyncData(() =>
    queryCollection('posts')
      .where('path', '=', `/posts/${route.params.slug}`)
      .first()
  )

  if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  }

  const url = `https://www.wanderer.my.id${route.fullPath}`

  useSeoMeta({
    title: post.value.title,
    description: post.value.description,

    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogImage: '/posts/my-unemployed-romance/image.png',
    ogType: 'article',
    ogUrl: url,

    twitterTitle: post.value.title,
    twitterDescription: post.value.description,
    twitterImage: post.value.image
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
