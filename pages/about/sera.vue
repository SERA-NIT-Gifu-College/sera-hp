<script setup lang="ts">
import SiteInfo from "~/assets/siteinfo.json";

useSeoMeta(
    generateSeoMeta(
        "SERAについて",
        "岐阜高専宇宙工学研究会についてのページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="SERAについて" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="SERAについて" />
    <main>
        <section>
            <img src="/sera-logo-text.svg" alt="SERA Logo" class="float-left" />
            <p>
                宇宙分野に興味ある学生が集い、宇宙理工学に関する知識を身に付けると共に、宇宙分野に関連する各種競技会へ参加して人間力と実践力を養うことを目的に活動しています。
            </p>
        </section>

        <section>
            <h2>岐阜高専宇宙工学研究会 について</h2>
            <p>
                超小型衛星開発を目指す有志の団体として2016年度に発足、2018年度より岐阜高専の正式な同好会として活動し、2022年度より岐阜高専の正式なクラブとして活動しています。
            </p>
            <p>
                宇宙工学研究会の英語表記{{
                    `"${SiteInfo.clubNameLong}"`
                }}の頭文字をとって【{{
                    SiteInfo.clubNameAbbreviation
                }}(セラ)】と呼んでいます。
            </p>
            <p>部長 : {{ SiteInfo.headOfClub }}</p>
        </section>

        <section>
            <h2>活動内容</h2>
        </section>

        <section>
            <h3>各種競技会への参加</h3>
            <p>
                主に缶サット甲子園・種子島ロケットコンテストに出場しており、競技用の缶サット・モデルロケットを製作しています。
            </p>
            <p>
                活動の詳細については、
                <NuxtLink to="/projects">Projects</NuxtLink>
                や
                <NuxtLink to="/about/achievements">活動実績</NuxtLink>
                のページをご覧ください。
            </p>
        </section>

        <section>
            <h3>宇宙理工学に関する学習</h3>
            <p>
                缶サットやモデルロケットの製作を通じたOJT (On the Job Training :
                実際の活動を通じて、知識や技術などを身に付ける教育) により、
                実践力を身に付ける活動を行っている他、
                高専スペース連携の「高専スペースアカデミア」、
                岐阜県の「宇宙工学講座」などの遠隔講義に参加し、
                宇宙理工学について学習しています。
            </p>
            <p>
                また、高専スペースアカデミアの一環として8月下旬に愛媛県新居浜市で開催される3泊4日の合宿形式で行われる宇宙教育イベント「高専スペースキャンプ」に参加しています。
                その他、サイエンスボランティアや日本航空宇宙学会関係のイベント等にも出展することもあり、コミュニケーション能力などの人間力も養うこともできます。
            </p>
        </section>

        <section>
            <h3>高専連携による超小型衛星開発</h3>
            <p>
                高専スペース連携に参画する高専を中心として、超小型衛星の一種であるCubeSat(キューブサット)を開発しています。
            </p>
            <p>
                2021年11月9日にはKOSEN-1が打ち上げられ、現在JAXAの革新的衛星技術実証3号機で打ち上げ予定のKOSEN-2(代表
                : 米子高専)の開発が進められています。
            </p>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");
</style>
