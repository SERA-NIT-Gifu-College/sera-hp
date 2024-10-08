<script setup lang="ts">
const { data } = await useFetch("/api/getNewsList");

useSeoMeta(
    generateSeoMeta(
        "News",
        "岐阜高専宇宙工学研究会からのニュースです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="News" image-path="/images/news-top.jpg" />
    <main>
        <div class="news-list">
            <NewsCard
                v-for="article in data"
                :key="article.date as number"
                :news-entry="article"
                :is-new="(data?.indexOf(article) as number) < 2"
            ></NewsCard>
        </div>
    </main>
</template>

<style scoped>
.news-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    gap: 20px;
    justify-self: center;
    margin: 1rem 0;
}

.news-list > div:has(a) {
    transition: all 0.3s ease-in-out;
    &:hover {
        scale: 105%;
        filter: grayscale(25%);
        transition: all 0.3s ease-in-out;
    }
}

@media screen and (max-width: 640px) {
    .news-list {
        grid-auto-flow: row;
        justify-content: center;
    }
}
</style>
