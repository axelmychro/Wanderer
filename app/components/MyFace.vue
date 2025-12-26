<template>
  <UPageCTA
    :ui="{
      root: 'flex flex-col items-center p-6',
      container:
        'flex flex-col gap-2 px-2 py-2 sm:gap-0 sm:px-2 sm:py-2 lg:flex lg:px-2 lg:py-2',
      description: 'mt-0',
      footer: 'mt-0',
      links: 'flex-nowrap gap-x-2'
    }"
    title="Axel"
    description="here, but not really"
    :links="[
      {
        to: 'mailto:axelmychro@gmail.com',
        target: '_blank',
        icon: 'i-lucide-mail',
        color: 'primary',
        variant: 'soft',
        size: 'xl'
      },
      {
        to: 'https://www.linkedin.com/in/axelramadhan',
        target: '_blank',
        icon: 'i-lucide-linkedin',
        color: 'primary',
        variant: 'soft',
        size: 'xl'
      },
      {
        to: 'https://github.com/axelmychro',
        target: '_blank',
        icon: 'i-mingcute-github-line',
        color: 'primary',
        variant: 'soft',
        size: 'xl'
      },
      {
        to: 'https://www.instagram.com/axelmychro',
        target: '_blank',
        icon: 'i-mingcute-instagram-line',
        color: 'primary',
        variant: 'soft',
        size: 'xl'
      },
      {
        to: 'https://open.spotify.com/user/31l6l7tuhvryqieeqlkghl34bjea?si=53329a1d41554e1c',
        target: '_blank',
        icon: 'i-mingcute-spotify-line',
        color: 'primary',
        variant: 'soft',
        size: 'xl'
      }
    ]"
  >
    <template #top>
      <NuxtLink>
        <NuxtImg
          src="Wanderer.png"
          format="webp"
          quality="100"
          width="256"
          height="256"
          fit="cover"
          class="bg-primary aspect-square rounded-xl"
        />
      </NuxtLink>
    </template>
  </UPageCTA>
</template>
