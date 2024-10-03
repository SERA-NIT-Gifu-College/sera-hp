<script setup lang="ts">
import type { LinkCardProperty } from '~/utils/linkCard';
const property = defineProps<LinkCardProperty>();
</script>

<template>
    <NuxtLink :to="property.link">
        <div class="image" v-if="property.imagePath" :style="{ backgroundImage: `url(${property.imagePath})` }"></div>
        <h2>{{ property.title }}</h2>
        <p>{{ property.description }}</p>
    </NuxtLink>
</template>

<style scoped>
a {
    display: grid;
    width: 25rem;
    height: 30rem;
    grid: 2fr 1fr 1.5fr / 1fr;
    background-color: var(--starlight);
    border-radius: 1rem;
    text-decoration: none;
    transition: scale 0.2s ease-in-out;
}

a:hover {
    scale: 105%;
    transition: scale 0.2s ease-in-out;
}

a > * {
    margin: 2rem;
}

.image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 18rem;
    height: 12rem;
    place-self: center;
}

h2 {
    position: relative;
    color: var(--neptune1);
    background-color: var(--starlight5);
    border-radius: 1rem;
    margin: 0 2rem;
    padding: 1rem 1.75rem;
    align-self: center;
    line-height: 2rem;
}

h2::after {
    display: block;
    content: '';
    position: absolute;
    width: 7px;
    height: 2rem;
    top: 1rem;
    left: 0.75rem;
    background-color: var(--neptune1);
    border-radius: 3px;
}

p {
    color: var(--deep-space);
    margin: 0 2rem;
}
</style>