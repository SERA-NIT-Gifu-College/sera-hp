<script setup lang="ts">
</script>

<template>
    <PageTop text="Projects" image-path="/images/page-top.jpg" />
    <main>
        <ul class="cards-list">
            <li>
                <NuxtLink to="/projects/cansat">
                    <img src="/images/cansat_top.jpg" alt="CanSat-s">
                    <h2>CanSat開発チーム</h2>
                    <p>SERA CanSat開発チームです。缶サットの製作を中心に活動しており、人工衛星などに関する知識を高めることを目指しています。</p>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects/rocket">
                    <img src="/images/rocket_top.jpg" alt="ロケット達">
                    <h2>Rocket開発チーム</h2>
                    <p>SERA Rocket開発チームです。モデルロケットの製作を中心に活動しており、ロケットに関する知識を高めることを目指しています。</p>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects/edu-robot">
                    <img src="/images/education-1.jpg" alt="教育用ローバー">
                    <h2>教育プロジェクト</h2>
                    <p>SERAでは主に新入会員の教育を目的に、教育用ローバー(CanSat)の開発を行っています。外部でも使用できるようなキットを目指して開発中です。</p>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects/kosen-x">
                    <img src="/images/kosen1_gunma-cgv5-a.JPG" alt="KOSEN-1">
                    <h2>CubeSat KOSEN-X</h2>
                    <p>高専連携による超小型衛星開発についてです。高専スペース連携が中心となって製作しているCubeSatのプロジェクトに一部の部員が参加させて頂いております。</p>
                </NuxtLink>
            </li>
        </ul>

        <LinkCard title="テスト" description="これはテストカードです。" link="/" image-path="/sera-logo-text.svg" />
    </main>
</template>

<style scoped>
.cards-list {
    --card-width-normal: 25rem;
    --card-height-normal: 30rem;

    list-style: none;
    display: grid;
    grid: repeat(2, var(--card-height-normal)) / repeat(2, var(--card-width-normal));
    gap: 2rem;
    width: fit-content;
    padding: 0;
    margin: auto;
}

.cards-list li {
    width: var(--card-width-normal);
    height: var(--card-height-normal);
    background-color: var(--starlight);
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
    & > a {
        display: grid;
        grid: 13rem 7rem auto / 1fr;
        padding: 2rem;
        text-decoration: none;
        height: calc(100% - 4rem);
    }
}

.cards-list li:hover {
    transition: all 0.2s ease-in-out;
    scale: 105%;
}

.cards-list li a {
    & > img {
        width: 20rem;
        height: auto;
        max-height: 12rem;
        place-self: center;
    }
    & > h2 {
        position: relative;
        color: var(--neptune1);
        background-color: var(--starlight5);
        border-radius: 1rem;
        padding: 1rem 1.5rem;
    }
    & > h2::after {
        display: block;
        position: absolute;
        top: 0.75rem;
        left: 0.6rem;
        width: 7px;
        height: 3rem;
        border-radius: 3px;
        background-color: var(--neptune1);
        content: '';
    }
    & > p {
        color: var(--deep-space);
    }
}

@media screen and (max-width: 1024px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
    .cards-list {
        --card-width-medium: 20rem;
        --card-height-medium: 25rem;
        grid: var(--card-height-medium) / repeat(auto-fill, var(--card-width-medium));
    }
    .cards-list li {
        width: var(--card-width-medium);
        height: var(--card-height-medium);
    }
    .cards-list li a {
        grid: 10rem 5rem auto / 1fr;
        padding: 1rem;
        & > img {
            width: 15rem;
            margin: 0.5rem 0;
        }
        & > h2 {
            font-size: 16pt;
            margin: 0.5rem 0;
            height: fit-content;
        }
        & > h2::after {
            height: 2rem;
            top: 1rem;
            width: 5px;
        }
        & > p {
            margin: 0.5rem 0;
        }
    }
}

@media screen and (max-width: 640px) {
    main {
        margin: var(--main-margin-top-bottom) 0;
    }
    .cards-list {
        --card-width-small: 18rem;
        --card-height-small: 25rem;
        grid: var(--card-height-small) / repeat(auto-fill, var(--card-width-small));
    }
    .cards-list li {
        width: var(--card-width-small);
        height: var(--card-height-small);
    }
    .cards-list li a {
        grid: 9rem 5rem auto / 1fr;
        padding: 1rem;
        & > img {
            width: 12rem;
            margin: 0.5rem 0;
        }
        & > h2 {
            font-size: 16pt;
            margin: 0.5rem 0;
            height: fit-content;
        }
        & > h2::after {
            height: 2rem;
            top: 1rem;
            width: 5px;
        }
        & > p {
            margin: 0.5rem 0;
        }
    }
}
</style>