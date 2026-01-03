<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { siteConfig } from './data/yourInformation'
import MyProfile from './components/MyProfile.vue'

const colorMode = useColorMode()

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})

const siteTitle = siteConfig.title
const siteDescription = siteConfig.description

useSeoMeta({
  titleTemplate: `%s | ${siteTitle}`,
  description: siteDescription,

  ogSiteName: siteConfig.name,
  ogType: 'website',
  ogImage: siteConfig.image,

  twitterCard: 'summary_large_image',
  twitterImage: siteConfig.image,
  twitterTitle: siteConfig.title,
  twitterDescription: siteConfig.description,
})

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Posts',
    to: '/posts',
  },
  {
    label: 'About',
    to: '/about',
  },
])

const themeLabel = computed(() => {
  if (colorMode.preference === 'dark') {
    return 'Switch to light mode'
  }
  else if (colorMode.preference === 'light') {
    return 'Switch to dark mode'
  }
  return 'Toggle color mode'
})

const { postLabels, activePostLabel } = usePostList()

const hydrated = ref(false)
onMounted(() => (hydrated.value = true))
</script>

<template>
  <UApp>
    <div
      class="absolute inset-0 -z-10 max-h-64 min-w-full bg-[url('/header.webp')] bg-cover bg-center lg:max-h-128"
      aria-hidden="true"
    />

    <UPage :ui="{ root: 'sm:mx-4' }">
      <UPageHeader
        class="z-50 min-h-48 lg:min-h-96"
        :ui="{
          root: 'flex justify-center border-none py-0',
          container: 'w-full max-w-6xl',
        }"
      >
        <UHeader
          mode="drawer"
          :ui="{
            root: 'bg-default rounded-b-xl backdrop-blur-none',
            center: 'gap-4',
          }"
          :title="siteConfig.title"
        >
          <template #title>
            <NuxtLink to="/" aria-label="Eons Adrift, home">
              <AppLogo aria-hidden="true" />
            </NuxtLink>
          </template>

          <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
          >
            {{ item.label }}
          </NuxtLink>

          <template #right>
            <UColorModeButton :aria-label="themeLabel" />
          </template>

          <template #body>
            <UNavigationMenu
              :items="navigationItems"
              orientation="vertical"
              class="-mx-2.5"
            />
          </template>
        </UHeader>
      </UPageHeader>

      <UPageBody class="flex min-w-full justify-center">
        <UMain class="bg grid w-full max-w-6xl gap-4 lg:grid-cols-[auto_1fr]">
          <section>
            <NuxtPage />
          </section>

          <section class="shrink-0 space-y-4 lg:order-first">
            <MyProfile class="animate-enter" />

            <div class="relative h-full">
              <UPageCard
                class="sticky top-4"
                :ui="{ description: 'flex flex-wrap gap-2' }"
                title="Labels"
              >
                <template #description>
                  <UButton
                    v-for="{ label, count } in postLabels"
                    :key="label"
                    size="xs"
                    variant="soft"
                    :color="activePostLabel === label ? 'success' : 'neutral'"
                    @click="
                      activePostLabel === label
                        ? (activePostLabel = null)
                        : (activePostLabel = label)
                    "
                  >
                    {{ label }} ({{ count }})
                  </UButton>
                </template>
              </UPageCard>
            </div>
          </section>
        </UMain>
      </UPageBody>

      <MyFooter />
    </UPage>
  </UApp>
</template>

<style>
.animate-enter {
  animation: page-in 600ms cubic-bezier(0.22, 1, 0.33, 1) both;
}

@keyframes page-in {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
