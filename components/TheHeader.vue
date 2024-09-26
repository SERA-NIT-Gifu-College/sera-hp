<script setup lang="ts">
import LogoSVG from "public/sera-logo-no-text.svg";
import type { DropDownEntry } from "~/utils/dropDown";

const exploreDropDownEntries: Array<DropDownEntry> = [
    { text: "Home", link: "/" },
    { text: "Projects", link: "/projects" },
    { text: "CanSat", link: "/projects/cansat" },
    { text: "Edu-Robot", link: "/projects/edu-robot" },
    { text: "CubeSat Kosen-X", link: "/projects/kosen-x" },
    { text: "Rocket", link: "/projects/rocket" },
    { text: "About", link: "/about" },
];

const mediaDropDownEntries: Array<DropDownEntry> = [
    { text: "News", link: "/news" },
    { text: "Gallery", link: "/about/gallery" },
];
</script>

<template>
    <header>
        <div class="navigation-menu">
            <div id="header-left">
                <DropDown
                    label="Explore"
                    :mode="DropDownMode.onClick"
                    :alignment="DropDownAlignment.Left"
                    :entries="exploreDropDownEntries"
                    :show-in-mobile="false"
                />
            </div>
            <div id="logo-link">
                <NuxtLink to="/">
                    <LogoSVG role="img" id="logo-img" />
                </NuxtLink>
            </div>
            <div id="header-right">
                <DropDown
                    label="Media"
                    :mode="DropDownMode.onClick"
                    :alignment="DropDownAlignment.Right"
                    :entries="mediaDropDownEntries"
                    :show-in-mobile="false"
                />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100vw;
}

.navigation-menu {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 1.8;
    padding: 1.25rem 3rem;
    width: calc(100% - 6rem);
    height: 64px;
    background: var(--deep-space);
}

#header-left,
#header-right {
    display: flex;
}

#header-left {
    flex-direction: row;
}

#header-right {
    flex-direction: row-reverse;
    & ul {
        list-style: none;
        display: flex;
        justify-items: space-between;
    }
}

#logo-link {
    display: flex;
    justify-content: center;
    & a {
        width: fit-content;
        background: var(--moonlight);
        padding: 0.5rem;
        margin-top: -0.5rem;
        border-radius: 3rem;
        filter: drop-shadow(0 0 0.5rem var(--moonlight));
    }
    & a:hover {
        transform: scale(110%);
        transition: 0.2s ease-in;
    }
}

#logo-img {
    width: 128px;
    height: auto;
    background: transparent !important;
}
</style>
