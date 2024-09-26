<script setup lang="ts">
import type { PageTopProperty } from "~/utils/pageTop";

const property = defineProps<PageTopProperty>();
</script>

<template>
    <div :style="{ backgroundImage: `url(${property.imagePath})` }">
        {{ property.text }}
    </div>
</template>

<style scoped>
div {
    display: flex;
    width: 100vw;
    height: 25vh;
    margin: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: local;
    background-size: cover;
    align-items: center;
    justify-content: center;
    color: var(--starlight1);
    font-size: 36pt;
    font-weight: bold;
}
</style>
