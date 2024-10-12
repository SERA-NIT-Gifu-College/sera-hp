<template>
    <TheHeader />
    <div class="website-content">
        <slot />
    </div>
    <BackToTop />
    <TheFooter />
</template>

<style scoped>
.website-content {
    display: grid;
}

@media screen and (max-width: 1024px) {
    .website-content {
        width: 100%;
        margin: 0;
        place-self: center;
    }
}
</style>
