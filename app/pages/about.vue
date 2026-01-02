<template>
  <div class="bg-default rounded-lg p-4">
    <h1 class="text-highlighted text-2xl font-semibold text-pretty">about</h1>

    <p class="mt-4 text-base text-pretty">
      so what is this blog all about? well, maybe you haven't read the footer just yet.
    </p>

    <p class="mt-2 text-base text-pretty">
      my name's Axel, i'm a computer science student at Fasilkom-TI, Universitas Sumatera Utara who
      really just loves
      <span class="text-primary">Wanderer</span>
      (look i just can't keep hightlighting him help me)
    </p>

    <p class="mt-2 text-base text-pretty">
      i'm interested in the frontend development, knows HTML, CSS, JS basic. built
      <NuxtLink to="https://github.com/axelmychro/Axel-Ramadhan"> my portfolio </NuxtLink>
      with Vue and
      <NuxtLink to="https://github.com/axelmychro/Wanderer">this blog</NuxtLink>
      with Nuxt
    </p>

    <p class="mt-2 text-base text-pretty">
      currently trying to actually "Type" the script in TS (like, what do you mean this string is an
      object???) so i don't mess up every workspace i touch
    </p>

    <h2 class="text-highlighted mt-8 mb-2 text-xl font-semibold text-pretty">
      anyways, here are links to my other stuff
    </h2>
    <div class="flex flex-wrap gap-2">
      <UFieldGroup>
        <UTooltip text="Send an email">
          <UButton
            to="mailto:axelmychro@gmail.com"
            color="neutral"
            variant="solid"
            icon="i-lucide-mail"
          />
        </UTooltip>
        <UButton
          to="mailto:axelmychro@gmail.com"
          label="axelmychro@gmail.com"
          color="neutral"
          variant="subtle"
        />
      </UFieldGroup>
      <UFieldGroup>
        <UTooltip text="Visit my Instagram profile">
          <UButton
            to="https://www.instagram.com/axelmychro"
            color="neutral"
            variant="solid"
            icon="i-mingcute-instagram-line"
          />
        </UTooltip>
        <UButton
          to="https://www.instagram.com/axelmychro"
          label="@axelmychro"
          color="neutral"
          variant="subtle"
        />
      </UFieldGroup>

      <UFieldGroup>
        <UTooltip text="Peek at my spotify profile">
          <UButton
            to="https://open.spotify.com/user/31l6l7tuhvryqieeqlkghl34bjea?si=53329a1d41554e1c"
            color="neutral"
            variant="solid"
            icon="i-mingcute-spotify-line"
          />
        </UTooltip>
        <UButton
          to="https://open.spotify.com/user/31l6l7tuhvryqieeqlkghl34bjea?si=53329a1d41554e1c"
          label="my playlists"
          color="neutral"
          variant="subtle"
        />
      </UFieldGroup>
    </div>
  </div>
</template>
