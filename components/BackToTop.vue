<script setup lang="ts">
const scrollDistance = useScrollDistance();
const triggerDistance = 100;
</script>

<template>
    <Transition name="back-to-top-transition">
        <div v-if="scrollDistance > triggerDistance" class="back-to-top">
            <NuxtLink to="#App">
                <Icon name="hugeicons:rocket-02" />
                <p>TOP</p>
            </NuxtLink>
        </div>
    </Transition>
</template>

<style scoped>
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 5;
    display: flex;
    width: 6rem;
    height: 6rem;
    border-radius: 5rem;
    background-color: var(--neptune1);
    color: var(--starlight1);
}

.back-to-top a {
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    color: var(--starlight1);
    & > span {
        width: 2rem;
        height: 2rem;
        margin: 0;
        margin-inline: auto;
    }
    & > p {
        margin: 0;
    }
}

@media screen and (max-width: 640px) {
    .back-to-top {
        scale: 90%;
        bottom: 1rem;
        right: 1rem;
    }
}

.back-to-top-transition-enter-active,
.back-to-top-transition-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.back-to-top-transition-enter-from,
.back-to-top-transition-leave-to {
    opacity: 0;
}
</style>
