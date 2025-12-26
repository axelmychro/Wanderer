<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  import * as locales from '@nuxt/ui/locale'

  const { locale, setLocale } = useI18n()
  const colorMode = useColorMode()

  const supportedLocales = {
    en: locales.en,
    ms: locales.ms,
    id: locales.id
  }

  const uiLocale = computed(() => {
    return supportedLocales[locale.value as keyof typeof supportedLocales]
  })

  const lang = computed(() => uiLocale.value.code)
  const dir = computed(() => uiLocale.value.dir)

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang,
      dir
    }
  })

  const title = 'eons adrift'
  const description = '..how can you listen all night long?'

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: '/header.webp',
    twitterImage: '/header.webp',
    twitterCard: 'summary_large_image'
  })

  const localePath = useLocalePath()

  const navigationItems = computed<NavigationMenuItem[]>(() => [
    {
      label: 'Home'
    }
  ])

  const localeLabel = computed(() => {
    const currentLocaleCode = locale.value.toUpperCase()
    return `Select language (current: ${currentLocaleCode})`
  })

  const themeLabel = computed(() => {
    if (colorMode.preference === 'dark') {
      return 'Switch to light mode'
    } else if (colorMode.preference === 'light') {
      return 'Switch to dark mode'
    }
    return 'Toggle color mode'
  })

  const { postLabels, activePostLabel } = usePosts()
</script>

<template>
  <UApp :locale="uiLocale" :toaster="{ position: 'top-center' }">
    <div
      class="absolute inset-0 -z-10 max-h-64 min-w-full bg-[url('/header.webp')] bg-cover bg-center lg:max-h-96"
      aria-hidden="true"
    />

    <UPage :ui="{ root: 'sm:mx-4' }">
      <UPageHeader
        class="z-50 min-h-48 lg:min-h-64"
        :ui="{
          root: 'flex justify-center border-none py-0',
          container: 'w-full max-w-6xl'
        }"
      >
        <UHeader
          mode="drawer"
          :ui="{
            root: 'bg-default rounded-b-xl backdrop-blur-none'
          }"
          :title="title"
        >
          <template #title>
            <NuxtLink :to="localePath('/')" aria-label="Eons Adrift, home">
              <AppLogo class="shrink-0" aria-hidden="true" />
            </NuxtLink>
          </template>

          <template #right>
            <ULocaleSelect
              variant="ghost"
              :ui="{ value: 'hidden', base: 'py-4' }"
              :label-key="'code'"
              :model-value="locale"
              :locales="Object.values(supportedLocales)"
              :aria-label="localeLabel"
              @update:model-value="
                (value: string) => setLocale(value as 'en' | 'ms' | 'id')
              "
            />
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

      <UPageBody class="flex w-full justify-center space-y-0 pb-0">
        <UMain class="grid w-full max-w-6xl gap-4 lg:grid-cols-[auto_1fr]">
          <NuxtPage />

          <section class="space-y-4 lg:order-first">
            <MyFace />
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

      <UFooter class="mt-0">
        <template #left>
          <p class="text-muted text-sm">
            built with Nuxt UI and pain &bull; &copy;
            {{ new Date().getFullYear() }}
          </p>
        </template>
        <template #right>
          <UButton
            to="https://github.com/axelmychro/Wanderer"
            target="_blank"
            icon="i-devicon-nuxt"
            aria-label="GitHub"
            color="primary"
            variant="ghost"
          />
        </template>
      </UFooter>
    </UPage>
  </UApp>
</template>
