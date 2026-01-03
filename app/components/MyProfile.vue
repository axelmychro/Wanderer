<script setup lang="ts">
import { profileConfig } from '~/data/yourInformation'
import type { ButtonProps } from '@nuxt/ui'

const styledLinks = computed(
  () =>
    profileConfig.links?.map<ButtonProps>(link => ({
      ...link,
      target: '_blank',
      color: 'primary',
      variant: 'soft',
    })) ?? [],
)
</script>

<template>
  <UPageCTA
    :ui="{
      root: 'flex flex-col items-center p-6',
      container:
        'flex flex-col gap-2 px-2 py-2 sm:gap-0 sm:px-2 sm:py-2 lg:flex lg:px-2 lg:py-2',
      description: 'mt-0',
      footer: 'mt-0',
      links: 'flex-nowrap gap-x-2',
    }"
    :title="profileConfig.author"
    :description="profileConfig.bio"
    :links="styledLinks"
  >
    <template #top>
      <NuxtLink to="/about">
        <NuxtImg
          :src="profileConfig.avatar"
          format="webp"
          quality="100"
          width="224"
          height="224"
          class="bg-primary aspect-square rounded-sm object-cover"
          alt="Profile"
        />
      </NuxtLink>
    </template>
  </UPageCTA>
</template>
