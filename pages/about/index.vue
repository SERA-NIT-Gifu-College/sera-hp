<script setup lang="ts">
const linksList: Array<LinkCardProperty> = [
    {
        title: "SERAについて",
        description: "岐阜工業高等専門学校宇宙工学研究会【SERA】の概要です。",
        link: "/about/sera",
        imagePath: "",
    },
    {
        title: "活動実績",
        description: "SERAの活動実績、受賞歴を紹介します。",
        link: "/about/achievements",
        imagePath: "",
    },
    {
        title: "写真集",
        description: "大会や普段の活動での様子です。",
        link: "/about/gallery",
        imagePath: "",
    },
    {
        title: "中学生・新入生向け",
        description: "部活のFAQを集めてみました。",
        link: "/about/for-middle-schoolers-and-new-comers",
        imagePath: "",
    },
];

useSeoMeta(
    generateSeoMeta(
        "About Us",
        "岐阜高専宇宙工学研究会についてのページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="クラブ情報" image-path="/images/page-top.jpg" />
    <PankuzuList />
    <main>
        <LinksGrid id="links" :links="linksList" />
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

#links {
    width: 80%;
    max-width: 64rem;
}

@media screen and (max-width: 960px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
}

@media screen and (max-width: 640px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
}
</style>
