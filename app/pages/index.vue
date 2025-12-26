<script setup lang="ts">
  const { filteredPosts } = usePosts()
</script>

<template>
  <section class="space-y-4">
    <UBlogPost
      v-if="filteredPosts.length <= 0"
      title="uh oh"
      description="no post labeled as that found, for now.."
    />
    <UBlogPost
      v-for="post in filteredPosts"
      v-else
      :key="post.to"
      orientation="horizontal"
      :ui="{
        body: post.image ? 'lg:pr-4' : 'lg:px-4',
        image: 'object-center'
      }"
      v-bind="post"
    />
  </section>
</template>
