<script setup lang="ts">
import SiteInfo from "assets/siteinfo.json";

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - 岐阜高専宇宙工学研究会 ${SiteInfo.clubNameAbbreviation}`
            : `岐阜高専宇宙工学研究会 ${SiteInfo.clubNameAbbreviation}`;
    },
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    htmlAttrs: {
        lang: "ja",
    },
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
