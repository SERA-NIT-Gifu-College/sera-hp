<script lang="ts" setup>
import type { LinksGridProperty } from "~/utils/types/linksGrid";
const property = defineProps<LinksGridProperty>();
</script>

<template>
    <div class="links-grid">
        <ul>
            <li
                v-for="entry in property.links"
                :key="property.links.indexOf(entry)"
            >
                <LinkCard
                    :title="entry.title"
                    :description="entry.description"
                    :link="entry.link"
                    :image-path="entry.imagePath"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.links-grid {
    container: links-grid / inline-size;
    width: 100%;
    min-width: 320px;
}

@property --links-grid-gap {
    syntax: "<length>";
    inherits: false;
    initial-value: 30px;
}

ul {
    list-style: none;
    display: grid;
    gap: var(--links-grid-gap);
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0;
    place-items: center;
    & > li {
        width: 100%;
        min-width: 16rem;
        height: 100%;
    }
}

@container links-grid (width < 36rem) {
    ul {
        grid-template-columns: 1fr;
    }
    ul > li {
        width: 100%;
    }
}
</style>
