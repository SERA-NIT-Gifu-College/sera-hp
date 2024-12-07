<script setup lang="ts">
const linksList: Array<LinkCardProperty> = [
    {
        title: "Rocket開発チーム",
        description:
            "SERA Rocket開発チームです。モデルロケットの製作を中心に活動しており、ロケットに関する知識を高めることを目指しています。",
        link: "/projects/rocket",
        imagePath: "/images/rocket_top.jpg",
    },
    {
        title: "CanSat開発チーム",
        description:
            "SERA CanSat開発チームです。缶サットの製作を中心に活動しており、人工衛星などに関する知識を高めることを目指しています。",
        link: "/projects/cansat",
        imagePath: "/images/cansat_top.jpg",
    },
    {
        title: "教育プロジェクト",
        description:
            "SERAでは主に新入会員の教育を目的に、教育用ローバー(CanSat)の開発を行っています。外部でも使用できるようなキットを目指して開発中です。",
        link: "/projects/education",
        imagePath: "/images/education/education-1.jpg",
    },
    {
        title: "CubeSat KOSEN-X",
        description:
            "高専連携による超小型衛星開発についてです。高専スペース連携が中心となって製作しているCubeSatのプロジェクトに一部の部員が参加させて頂いております。",
        link: "/projects/kosen-x",
        imagePath: "/images/kosen1_gunma-cgv5-a.JPG",
    },
];

useSeoMeta(
    generateSeoMeta(
        "Projects",
        "岐阜高専宇宙工学研究会の活動の詳細に関するページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="Projects" image-path="/images/page-top.jpg" />
    <PankuzuList />
    <main>
        <LinksGrid class="cards-list" :links="linksList" />
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
}

.cards-list {
    width: 80%;
    max-width: 64rem;
}

@media screen and (max-width: 1080px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
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
