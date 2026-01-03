<script setup>
onMounted(() => {
  if (window.twttr) {
    window.twttr.widgets.load()
    return
  }
  const script = document.createElement('script')
  script.src = 'https://platform.twitter.com/widgets.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <slot />
</template>
