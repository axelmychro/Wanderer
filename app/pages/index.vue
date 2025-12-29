<script setup lang="ts">
  const { filteredPosts } = usePostList()

  useSeoMeta({
    title: 'Home'
  })
</script>

<template>
  <UBlogPost
    v-if="filteredPosts.length <= 0"
    title="Loading posts..."
    description="Wait a bit, okay?"
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
    :to="post.path"
    :title="post.title"
    :description="post.description"
    :date="post.date"
    :image="post.image"
    :badge="post.badge"
  />
</template>
