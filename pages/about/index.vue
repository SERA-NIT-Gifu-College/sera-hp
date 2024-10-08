<script setup lang="ts">
useSeoMeta(
    generateSeoMeta(
        "About Us",
        "岐阜高専宇宙工学研究会についてのページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="About Us" image-path="/images/page-top.jpg" />
    <PankuzuList />
    <main>
        <ul>
            <li>
                <LinkCard
                    title="SERAについて"
                    description="岐阜工業高等専門学校宇宙工学研究会【SERA】の概要です。"
                    link="/about/sera"
                />
            </li>
            <li>
                <LinkCard
                    title="活動実績"
                    description="SERAの活動実績、受賞歴を紹介します。"
                    link="/about/achievements"
                />
            </li>
            <li>
                <LinkCard
                    title="写真集"
                    description="大会や普段の活動での様子です。"
                    link="/about/gallery"
                />
            </li>
            <li>
                <LinkCard
                    title="中学生・新入生向け"
                    description="部活のFAQを集めてみました。"
                    link="/about/for-middle-schoolers-and-new-comers"
                />
            </li>
        </ul>
    </main>
</template>

<style scoped>
ul {
    list-style: none;
    display: grid;
    gap: 20px;
    grid: repeat(2, 1fr) / repeat(2, 1fr);
    width: fit-content;
    padding: 0;
    margin: auto;
}

@media screen and (max-width: 1024px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
    ul {
        grid: repeat(3, 1fr) / 1fr;
    }
}
</style>
