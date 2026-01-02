<script setup lang="ts">
const { filteredPosts } = usePostList()

useSeoMeta({
  title: 'Home'
})
</script>

<template>
  <div class="space-y-4">
    <UBlogPost
      v-if="filteredPosts.length <= 0"
      orientation="horizontal"
      :ui="{
        body: 'lg:pr-4',
        image: 'object-center'
      }"
      badge="???"
      :date="Date()"
      image="/header.webp"
      title="loading posts..."
      description="wait just a bit, okay?"
    />

    <UBlogPost
      v-for="post in filteredPosts"
      v-else
      :key="post.path"
      orientation="horizontal"
      class="animate-enter"
      :ui="{
        body: post.image ? 'lg:pr-4' : 'lg:px-4',
        image: 'object-center'
      }"
      :badge="post.badge"
      :date="post.date"
      :image="post.image"
      :title="post.title"
      :description="post.description"
      :to="post.path"
    />
  </div>
</template>
