<script setup lang="ts">
import PankuzuEntries from "~/assets/pankuzuEntries.json";
import type { PankuzuListProperty } from "~/utils/pankuzuList";

const property = defineProps<PankuzuListProperty>();
const route = useRoute();

const getLinkArray = (): Array<string> => {
    let links = route.fullPath.split("/");
    return links.map<string>((value) => {
        return "/" + value;
    });
};

const linkArray = getLinkArray();
</script>

<template>
    <nav>
        <ul>
            <li v-for="link in linkArray" :key="linkArray.indexOf(link)">
                <p v-if="link in PankuzuEntries">
                    <NuxtLink :to="link">
                        {{ PankuzuEntries[link] }}
                    </NuxtLink>
                </p>
                <p v-else>{{ property.currentPageName as string }}</p>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: var(--starlight1);
    height: 5rem;
    display: flex;
    align-content: center;
}

ul {
    --list-width: 30rem;
    list-style-type: none;
    display: inline-flex;
    align-items: center;
    width: var(--list-width);
    padding: 0;
    transform: translateX(50vw) translateX(calc(-1 * var(--list-width)));
}

ul li {
    display: inline-flex;
    padding: 0;
    margin-inline: 0.25rem;
    &:first-of-type {
        margin-left: 0;
    }
    &:last-of-type {
        margin-right: 0;
    }
    & > p:first-of-type {
        position: relative;
    }
    & > p > a {
        display: grid;
        text-decoration: none;
        color: var(--venus2);
        height: 100%;
        align-content: center;
    }
    & > p > a:visited {
        color: var(--venus2);
    }
    & > p > a:hover {
        color: var(--neptune2);
    }
    & > p:has(a) {
        align-content: center;
        margin-top: 0;
        margin-bottom: 0;
        height: 100%;
    }
}

ul li:not(:first-of-type) p:first-of-type {
    & {
        margin-left: 1rem;
    }
    &::before {
        position: absolute;
        content: "ー";
        top: 0;
        left: -1.25rem;
        width: 1rem;
        height: 100%;
    }
}
</style>
