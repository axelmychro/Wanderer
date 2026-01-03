<script lang="ts" setup>
const toggleSilhouette = ref(false)
</script>

<template>
  <UFooter :ui="{ bottom: 'flex justify-center' }">
    <template #left>
      <small class="text-center text-sm">
        &copy;
        {{ new Date().getFullYear() }}
      </small>
    </template>

    <small class="text-center text-sm">
      made out of boredom & 💙 for
      <UButton
        size="sm"
        variant="soft"
        aria-controls="footer-image"
        :aria-pressed="toggleSilhouette"
        @click="toggleSilhouette = !toggleSilhouette"
      >
        Wanderer
      </UButton>
    </small>

    <template #right>
      <UButton
        to="https://github.com/axelmychro/Wanderer"
        target="_blank"
        label="repository"
        trailing-icon="i-simple-icons-github"
        aria-label="GitHub repository for this blog"
        color="neutral"
        variant="ghost"
      />
    </template>

    <template #bottom>
      <NuxtLink
        to="https://youtu.be/fJ9rUzIMcZQ?si=xYkG7rWmTNgOXhx5&t=186"
        target="_blank"
        aria-label="Youtube, Bohemian Rhapsody by Queen"
      >
        <NuxtImg
          id="footer-image"
          :class="toggleSilhouette ? '' : 'hidden'"
          class="size-64 object-cover"
          src="/silhouette.webp"
          alt="Scaramouche"
        />
      </NuxtLink>
    </template>
  </UFooter>
</template>
