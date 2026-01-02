<script setup lang="ts">
const { filteredPosts } = usePostList()
</script>

<template>
  <div class="space-y-4">
    <UBlogPost
      v-if="filteredPosts.length <= 0"
      orientation="horizontal"
      :ui="{
        body: 'p-2 sm:p-2 lg:px-2',
        title: 'not-sm:text-base',
        description: 'not-sm:text-sm',
        date: 'not-sm:text-xs',
        badge: 'not-sm:p-0 not-sm:px-1 not-sm:text-xs'
      }"
      badge="???"
      :date="Date()"
      title="loading posts..."
      description="wait a bit, okay?"
    />
    <UBlogPost
      v-for="post in [...filteredPosts].reverse()"
      v-else
      :key="post.path"
      :ui="{
        body: 'p-2 sm:p-2 lg:px-2',
        title: 'not-sm:text-base',
        description: 'not-sm:text-sm',
        date: 'not-sm:text-xs',
        badge: 'not-sm:p-0 not-sm:px-1 not-sm:text-xs'
      }"
      :badge="post.badge"
      :date="post.date"
      :title="post.title"
      :description="post.description"
      :to="post.path"
    />
  </div>
</template>
