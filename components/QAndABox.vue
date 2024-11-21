<script setup lang="ts">
import type { QAndABoxProperty } from "~/utils/types/qAndABox";
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
    position: relative;
    color: var(--deep-space);
    background-color: var(--starlight1);
    border-radius: 1rem;
    font-weight: 600;
    line-height: 2;
    padding: 0.5rem 1.5rem;
}

.q-and-a > h2::before {
    content: "Q.";
    position: absolute;
    display: flex;
    top: -1.5rem;
    left: -1.75rem;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 3.2rem;
    place-content: center;
    background-color: var(--venus2);
    color: var(--starlight1);
}

.q-and-a > div {
    position: relative;
    width: 90%;
    margin-inline: 3rem;
}

@media screen and (max-width: 640px) {
    .q-and-a > h2 {
        line-height: 1.25;
    }
    .q-and-a > div {
        margin-inline: 1rem;
    }
}
</style>
