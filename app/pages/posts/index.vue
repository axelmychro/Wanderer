<script setup lang="ts">
  const { filteredPosts } = usePostList()
  const localePath = useLocalePath()
</script>

<template>
  <UBlogPost
    v-if="filteredPosts.length <= 0"
    title="uh oh"
    description="no post labeled as that found, for now.."
  />
  <UBlogPost
    v-for="post in [...filteredPosts].reverse()"
    v-else
    :key="post.path"
    :ui="{
      header: 'hidden',
      body: 'p-2 sm:p-2',
      title: 'not-sm:text-base',
      description: 'not-sm:text-sm',
      date: 'not-sm:text-xs',
      badge: 'not-sm:p-0 not-sm:px-1 not-sm:text-xs'
    }"
    :to="localePath(post.path)"
    :title="post.title"
    :description="post.description"
    :date="post.date"
    :image="post.image"
    :badge="post.badge"
  />
</template>
