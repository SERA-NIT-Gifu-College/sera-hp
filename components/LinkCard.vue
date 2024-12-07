<script setup lang="ts">
import type { LinkCardProperty } from "~/utils/types/linkCard";
const property = defineProps<LinkCardProperty>();
const { backgroundImageStyles } = useBackgroundImageOptimization();
const imagePath =
    property.imagePath === undefined || property.imagePath === ""
        ? "/sera-logo-text.svg"
        : (property.imagePath as string);
const optimizeImage = (backgroundImagePath: string) => {
    backgroundImageStyles.value = backgroundImagePath;
    return backgroundImageStyles.value;
};
</script>

<template>
    <div class="card-wrapper">
        <NuxtLink :to="property.link" class="card">
            <div class="image">
                <div :style="optimizeImage(imagePath)"></div>
            </div>
            <div class="texts">
                <h2>{{ property.title }}</h2>
                <p>{{ property.description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>
.card-wrapper {
    container: link-card / inline-size;
}

@property --minimum-card-width {
    syntax: "<length>";
    inherits: false;
    initial-value: 320px;
}

@property --minimum-card-height {
    syntax: "<length>";
    inherits: false;
    initial-value: 16rem;
}

@property --card-padding-inline {
    syntax: "<length>";
    inherits: false;
    initial-value: 1rem;
}

@property --card-padding-vertical {
    syntax: "<length>";
    inherits: false;
    initial-value: 0.75rem;
}

.card {
    display: grid;
    position: relative;
    grid-template-areas: "image texts";
    border-radius: 1rem;
    box-shadow: 10px 5px 5px var(--starlight1);
    background-color: var(--starlight);
    min-width: calc(var(--minimum-card-width) - 2 * var(--card-padding-inline));
    min-height: calc(
        var(--minimum-card-height) - 2 * var(--card-padding-vertical)
    );
    padding: var(--card-padding-vertical) var(--card-padding-inline);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    aspect-ratio: 5 / 2;
    &:hover {
        scale: 105%;
        transition: all 0.3s ease-in-out;
    }
}

.card > .image {
    grid-area: image;
    min-width: 128px;
    width: 30cqw;
    align-content: center;
    & > div {
        aspect-ratio: 1 / 1;
        background: inherit;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: local;
        background-size: cover;
        border-radius: 1rem;
        margin-inline: 0.75rem;
    }
}

.card > .texts {
    grid-area: texts;
    margin-inline: 0.75rem;
    height: 50cqw;
    width: 60cqw;
    & > h2 {
        color: var(--ocean-blue);
        height: 15cqw;
        margin-bottom: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        align-content: center;
    }
    & > p {
        color: var(--deep-space);
        height: 25cqw;
        margin-top: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@container link-card (width < 28rem) {
    .card {
        padding: 0.5rem 0;
    }
    .card > .image {
        min-width: 96px;
    }
    .card > .texts > p {
        height: 75px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}
</style>
