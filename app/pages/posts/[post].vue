<script setup lang="ts">
  const route = useRoute()
  const routedPath = route.path

  const { data: post } = await useAsyncData(
    () => `post:${routedPath}`,
    () => queryCollection('posts').path(routedPath).first(),
    { default: () => null }
  )

  if (import.meta.server && !post.value) {
    throw createError({ statusCode: 404 })
  }

  const { badges } = useBadges()
  const badge = computed(() =>
    post.value ? badges[post.value.badge as keyof typeof badges] : null
  )

  const seoTitle = computed(() => post.value?.title || 'Untitled post')
  const seoDescription = computed(
    () => post.value?.description || 'Undescribed post'
  )
  const seoImage = computed(() => post.value?.image || '/header.webp')
  const seoUrl = computed(() => `https://www.wanderer.my.id${routedPath}`)

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,

    ogUrl: seoUrl,
    ogType: 'article',
    ogImage: seoImage,
    ogTitle: seoTitle,
    ogDescription: seoDescription,

    twitterCard: 'summary_large_image',
    twitterImage: seoImage,
    twitterTitle: seoTitle,
    twitterDescription: seoDescription
  })

  const formattedDate = computed(() =>
    post.value
      ? new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(new Date(post.value.date))
      : ''
  )

  const copyToClipboard = async () => {
    const { add } = useToast()

    try {
      await navigator.clipboard.writeText(seoUrl.value)
      add({ title: 'Copied to clipboard!' })
    } catch (err) {
      add({ title: 'Failed to copy!' })
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = computed(() => {
    const canonicalUrl = seoUrl.value
    const canonicalTitle = seoTitle.value

    return [
      {
        key: 'twitter',
        label: 'X',
        icon: 'i-devicon-twitter',
        to: `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(canonicalTitle)}`
      },
      {
        key: 'facebook',
        label: 'Facebook',
        icon: 'i-lucide-facebook',
        to: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`
      },
      {
        key: 'whatsapp',
        label: 'WhatsApp',
        icon: 'i-mingcute-whatsapp-line',
        to: `https://wa.me/?text=${encodeURIComponent(`${canonicalTitle} ${canonicalUrl}`)}`
      },
      {
        key: 'telegram',
        label: 'Telegram',
        icon: 'i-lucide-send',
        to: `https://t.me/share/url?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(canonicalTitle)}`
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        icon: 'i-lucide-linkedin',
        to: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`
      }
    ] as const
  })
</script>

<template>
  <UCard
    v-if="post"
    :ui="{ root: 'bg-default rounded-lg', footer: 'flex flex-wrap gap-2' }"
  >
    <template #header>
      <NuxtImg
        :src="post.image"
        class="pointer-events-none relative aspect-video w-full overflow-hidden object-contain"
      />
      <div class="flex min-w-0 flex-1 flex-col">
        <div class="mb-2 flex items-center gap-2">
          <UBadge
            :label="badge?.label"
            :color="badge?.color"
            :variant="badge?.variant"
          />
          <time>{{ formattedDate }}</time>
        </div>

        <h1 class="text-highlighted text-xl font-semibold text-pretty">
          {{ post.title }}
        </h1>
        <p class="text-base text-pretty">{{ post.description }}</p>
      </div>
    </template>

    <ContentRenderer :value="post" />

    <template #footer>
      <UTooltip text="Copy to clipboard">
        <UButton
          label="share ts!"
          color="neutral"
          variant="solid"
          icon="i-lucide-link"
          @click="copyToClipboard"
        />
      </UTooltip>

      <UFieldGroup>
        <UButton
          v-for="link in shareLinks"
          :key="link.key"
          :to="link.to"
          :icon="link.icon"
          color="neutral"
          variant="subtle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ link.label }}</span>
        </UButton>
      </UFieldGroup>
    </template>
  </UCard>
</template>
