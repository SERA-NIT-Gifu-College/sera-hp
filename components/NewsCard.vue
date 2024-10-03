<script setup lang="ts">
import type { NewsCardProperty } from "~/utils/newsCard";
import { marked } from "marked";

const property = defineProps<NewsCardProperty>();

const datePosted = new Date(
    property.newsEntry.date as number
).toLocaleDateString("ja-JP", { dateStyle: "medium" });

const coverImagePath = ref<string>(
    property.newsEntry.coverImagePath
        ? property.newsEntry.coverImagePath
        : "/sera-logo-text.svg"
);
</script>

<template>
    <div
        class="news-card"
        :style="{ backgroundImage: `url(${coverImagePath})` }"
    >
        <NuxtLink
            class="card-content"
            :to="property.newsEntry.linkPath"
            v-if="
                property.newsEntry.linkPath !== null &&
                property.newsEntry.entryType === EntryType.Article
            "
        >
            <p class="news-type article">記事</p>
            <p class="new" v-if="property.isNew">NEW!</p>
            <div class="content">
                <article
                    v-html="
                        marked.parse(property.newsEntry.cardContent as string)
                    "
                ></article>
            </div>
            <small>{{ datePosted }}</small>
        </NuxtLink>
        <div class="card-content" v-else>
            <p class="news-type tweet">お知らせ</p>
            <p class="new" v-if="property.isNew">NEW!</p>
            <div class="content">
                <article
                    v-html="
                        marked.parse(property.newsEntry.cardContent as string)
                    "
                ></article>
            </div>
            <small>{{ datePosted }}</small>
        </div>
    </div>
</template>

<style scoped>
.news-card {
    width: 15rem;
    height: 18rem;
    position: relative;
    border-radius: 1rem;
    box-shadow: 10px 5px 5px var(--starlight1);
    background: inherit;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: local;
    background-size: cover;
}

.card-content {
    display: block;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px) brightness(55%);
    color: var(--starlight);
    text-decoration: none;
}

.card-content .content {
    font-size: larger;
    font-weight: 400;
    margin-top: 2.75rem;
}

.card-content article,
.card-content img {
    margin: 0 1rem;
}

.card-content img {
    margin-top: 3rem;
    width: 10rem;
    height: auto;
    padding: 0.25rem;
    margin-left: 1.75rem;
}

.card-content img[src="/sera-logo-text.svg"] {
    background-color: var(--starlight);
}

.card-content .news-type {
    position: absolute;
    margin: 0;
    padding-top: 0.25rem;
    width: 6rem;
    height: 2rem;
    text-align: center;
    font-weight: 600;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}

.card-content .tweet {
    background-color: var(--venus2);
    color: var(--venus1);
}

.card-content .article {
    background-color: var(--venus1);
    color: var(--astronaut);
}

.card-content .new {
    position: absolute;
    margin: 0;
    right: 0;
    padding-top: 0.25rem;
    width: 4rem;
    height: 2rem;
    background-color: var(--sun2);
    color: var(--astronaut);
    text-align: center;
    font-weight: 600;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.card-content small {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6rem;
    height: 2rem;
    margin: 0;
    background-color: var(--starship);
    color: var(--astronaut);
    text-align: center;
    padding-top: 0.5rem;
    font-weight: 500;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
</style>
