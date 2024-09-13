<template>
    <TheHeader />
    Layout: default
    <div class="website-content">
        <slot />
    </div>
    <TheFooter />
</template>

<style scoped>
.website-content {
    width: 90%;
    margin: auto;
}
</style>