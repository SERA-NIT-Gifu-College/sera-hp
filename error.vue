<script setup lang="ts">
import type { NuxtError } from "#app";

const property = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <NuxtLayout name="default">
        <div>
            <h1>{{ property.error?.statusCode }}</h1>
            <h2>{{ property.error?.message }}</h2>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </NuxtLayout>
</template>

<style scoped>
div {
    display: grid;
    width: 100vw;
    grid-auto-flow: row;
    place-items: center;
    margin: 30vh 0;
}

h1 {
    color: var(--sun4);
    font-size: 48pt;
}

h2 {
    color: var(--sun2);
    font-size: 24pt;
}

a {
    text-decoration: none;
    color: var(--neptune1);
    background-color: var(--starlight5);
    font-size: 18pt;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
}

a:visited {
    color: var(--neptune1);
}

a:hover {
    color: var(--neptune2);
    background-color: var(--starlight1);
}
</style>
