<script setup lang="ts">
  const { filteredPosts } = usePostList()
</script>

<template>
  <UBlogPost
    v-if="filteredPosts.length <= 0"
    title="Loading posts..."
    description="Wait a bit, okay?"
  />
  <UBlogPost
    v-for="post in [...filteredPosts].reverse()"
    v-else
    :key="post.path"
    :ui="{
      body: 'p-2 sm:p-2',
      title: 'not-sm:text-base',
      description: 'not-sm:text-sm',
      date: 'not-sm:text-xs',
      badge: 'not-sm:p-0 not-sm:px-1 not-sm:text-xs'
    }"
    :to="post.path"
    :title="post.title"
    :description="post.description"
    :date="post.date"
    :badge="post.badge"
  />
</template>
