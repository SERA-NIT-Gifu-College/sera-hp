<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk ? `岐阜高専宇宙工学研究会 SERA - ${titleChunk}` : "岐阜高専宇宙工学研究会 SERA";
  },
  link: [
    {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
  ],
  htmlAttrs: {
    lang: 'ja'
  }
});
</script>

<template>
  <div id="App">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "assets/styles/app.css";
</style>
