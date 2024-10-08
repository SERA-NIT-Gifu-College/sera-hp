<script setup lang="ts">
useSeoMeta(
    generateSeoMeta(
        "CubeSat KOSEN-X",
        "岐阜高専宇宙工学研究会の高専連携衛星プロジェクトに関するページです。",
        "/images/kosen1_gunma-cgv5-a.JPG"
    )
);
</script>

<template>
    <PageTop text="CubeSat KOSEN-X" image-path="/images/page-top.jpg" />
    <main>
        <section>
            <p>
                宇宙に打ち上げる本物の超小型人工衛星を他高専の教員や学生と協力して開発するプロジェクトです。
            </p>
            <p>
                高専の授業、実習やSERAで身に付けたことを存分に発揮することで、
                社会人技術者が仕事で求められるような事柄を学生のうちから経験し、身に付けることが出来ます。
            </p>
            <p>
                2021年11月9日に、高知高専を中心とする木星電波観測技術実証衛星
                KOSEN-1が打ち上げられ、現在運用されています。
                並行して、米子高専を中心とする海洋観測データ収集衛星
                KOSEN-2の開発が進められています。
            </p>
            <p>
                KOSEN-1、KOSEN-2ともに宇宙航空研究開発機構(JAXA)のイプシロンロケットで打ち上げられます。
            </p>
        </section>

        <section>
            <p>詳細はこちらから</p>
            <p>[KOSEN-1]</p>
            <ul>
                <li>
                    <NuxtLink
                        to="http://www.kenkai.jaxa.jp/kakushin/kakushin02.html"
                    >
                        JAXA革新的衛星技術実証2号機
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://www.kochi-ct.ac.jp/news/archives/247">
                        高知高専の新着情報
                    </NuxtLink>
                </li>
            </ul>
            <p>[KOSEN-2]</p>
            <ul>
                <li>
                    <NuxtLink
                        to="https://www.kenkai.jaxa.jp/kakushin/kakushin03.html"
                    >
                        JAXA革新的衛星技術実証3号機
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="https://www.yonago-k.ac.jp/a112/a116/a117/b383/"
                    >
                        米子高専の新着情報
                    </NuxtLink>
                </li>
            </ul>
        </section>

        <section>
            <img src="/images/kosen1_gunma-cgv5-a.JPG" alt="KOSEN-1" />
            <p>画像：菅原達弥(群馬高専)</p>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");

section:last-of-type {
    width: fit-content;
    justify-self: center;
}

img {
    width: 60rem;
}
</style>
