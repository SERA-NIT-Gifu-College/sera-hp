<script setup lang="ts">
import type { QAndABoxProperty } from "~/utils/qAndABox";
const property = defineProps<QAndABoxProperty>();
</script>

<template>
    <div class="q-and-a">
        <h2>{{ property.question }}</h2>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.q-and-a {
    max-width: 1105px;
    width: 80vw;
}

.q-and-a > h2 {
    color: var(--deep-space);
    background-color: var(--starlight1);
    border-radius: 1rem;
    font-weight: 600;
    line-height: 2;
    padding-inline: 1.5rem;
}

.q-and-a > div {
    width: 90%;
    margin-inline: 3rem;
}
</style>
