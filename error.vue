<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});

definePageMeta({
    layout: "default",
});
</script>

<template>
    <NuxtLayout>
        <div>
            <h1>{{ error?.statusCode }}</h1>
            <p>{{ error?.message }}</p>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </NuxtLayout>
</template>
