<script setup lang="ts">
import type { HamburgerMenuProperty } from "#imports";

const property = defineProps<HamburgerMenuProperty>();

const iconList = ["ic:sharp-density-medium", "ic:outline-close"];
const isOpen = ref<boolean>(false);

const handleClickEvent = () => {
    isOpen.value = !isOpen.value;
    return;
};
</script>

<template>
    <div class="hamburger-menu-menu">
        <button class="hamburger-menu-icon" @click="handleClickEvent">
            <Icon :name="iconList[0]" />
        </button>
        <Transition name="hamberger-menu">
            <div class="hamburger-menu-item-list" v-if="isOpen">
                <button @click="handleClickEvent">
                    <Icon :name="iconList[1]" />
                </button>
                <ul>
                    <li
                        v-for="entry in property.entries"
                        :key="property.entries.indexOf(entry)"
                    >
                        <NuxtLink :to="entry.link" @click="handleClickEvent">
                            {{ entry.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.hamberger-menu-enter-active,
.hamberger-menu-leave-active {
    transition: all 0.2s linear;
}

.hamberger-menu-enter-from,
.hamberger-menu-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.hamburger-menu-menu {
    display: inline-block;
    width: fit-content;
    position: relative;
}

.hamburger-menu-icon {
    background: none;
    width: fit-content;
    border: none;
    padding: 1rem 2rem;
    color: var(--neptune1);
    z-index: 150;
    & > span {
        width: 2rem;
        height: 2rem;
    }
}

.hamburger-menu-item-list {
    --menu-width: 45vw;
    display: block;
    background: var(--neptune1);
    color: var(--starlight);
    font-weight: bold;
    position: fixed;
    top: 0;
    left: calc(100vw - var(--menu-width));
    z-index: 100;
    width: var(--menu-width);
    height: 100vh;
    text-wrap: nowrap;
    & button {
        --button-size: 2.5rem;
        display: flex;
        background-color: var(--neptune2);
        border: none;
        border-radius: 0.75rem;
        width: var(--button-size);
        height: var(--button-size);
        transform: translateX(
            calc(var(--menu-width) - var(--button-size) - 1rem)
        );
        margin-top: 1rem;
        justify-content: center;
        align-items: center;
    }
    & button span {
        width: 2rem;
        height: 2rem;
        color: var(--neptune1);
    }
    & ul {
        list-style: none;
        padding: 0 0.5rem;
    }
    & ul li {
        margin: 1rem 0;
        transition: 0.2s linear;
    }
    & ul li:first-child {
        margin-top: 0;
    }
    & ul li:last-child {
        margin-bottom: 0;
    }
    & ul li a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: currentColor;
        padding: 0 0.5rem;
    }
    & ul li:hover a {
        text-decoration: currentColor underline dashed;
        text-decoration-thickness: 2px;
    }
}
</style>
