<script setup lang="ts">
  const { getPostBySlug } = usePosts()

  const slug = 'hello-world'
  const post = getPostBySlug(slug)

  if (post) {
    useSeoMeta({
      title: post.title,
      description: post.description,

      ogTitle: post.title,
      ogDescription: post.description,
      ogImage: post.image,
      ogType: 'article',

      twitterImage: post.image,
      twitterCard: 'summary_large_image'
    })
  }
</script>

<template>
  <UPageSection
    :ui="{ root: 'bg-default rounded-xl' }"
    :title="post?.title"
    :description="post?.description"
  />
</template>
