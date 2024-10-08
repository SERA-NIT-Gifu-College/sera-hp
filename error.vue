<script setup lang="ts">
import type { NuxtError } from "#app";

const property = defineProps({
    error: Object as () => NuxtError,
});

definePageMeta({
    layout: "default",
});
</script>

<template>
    <NuxtLayout>
        <div>
            <h1>{{ property.error?.statusCode }}</h1>
            <p>{{ property.error?.message }}</p>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </NuxtLayout>
</template>
