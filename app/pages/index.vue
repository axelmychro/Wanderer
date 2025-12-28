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
    v-for="post in filteredPosts"
    v-else
    :key="post.path"
    orientation="horizontal"
    :ui="{
      body: post.image ? 'lg:pr-4' : 'lg:px-4',
      image: 'object-center'
    }"
    :to="localePath(post.path)"
    :title="post.title"
    :description="post.description"
    :date="post.date"
    :image="post.image"
    :badge="post.badge"
  />
</template>
