<script setup lang="ts">
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
        <ul class="cards-list">
            <li>
                <LinkCard
                    title="Rocket開発チーム"
                    description="SERA Rocket開発チームです。モデルロケットの製作を中心に活動しており、ロケットに関する知識を高めることを目指しています。"
                    link="/projects/rocket"
                    image-path="/images/rocket_top.jpg"
                />
            </li>
            <li>
                <LinkCard
                    title="CanSat開発チーム"
                    description="SERA CanSat開発チームです。缶サットの製作を中心に活動しており、人工衛星などに関する知識を高めることを目指しています。"
                    link="/projects/cansat"
                    image-path="/images/cansat_top.jpg"
                />
            </li>
            <li>
                <LinkCard
                    title="教育プロジェクト"
                    description="SERAでは主に新入会員の教育を目的に、教育用ローバー(CanSat)の開発を行っています。外部でも使用できるようなキットを目指して開発中です。"
                    link="/projects/education"
                    image-path="/images/education/education-1.jpg"
                />
            </li>
            <li>
                <LinkCard
                    title="CubeSat KOSEN-X"
                    description="高専連携による超小型衛星開発についてです。高専スペース連携が中心となって製作しているCubeSatのプロジェクトに一部の部員が参加させて頂いております。"
                    link="/projects/kosen-x"
                    image-path="/images/kosen1_gunma-cgv5-a.JPG"
                />
            </li>
        </ul>
    </main>
</template>

<style scoped>
.cards-list {
    list-style: none;
    display: grid;
    grid: repeat(2, auto) / repeat(2, auto);
    gap: 2rem;
    width: fit-content;
    padding: 0;
    margin: auto;
}

@media screen and (max-width: 1024px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
    .cards-list {
        grid: repeat(4, 1fr) / 1fr;
    }
}
</style>
