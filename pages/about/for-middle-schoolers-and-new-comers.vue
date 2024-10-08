<script setup lang="ts">
import SiteInfo from "~/assets/siteinfo.json";

const memberGradeRatioDate: string = new Date(
    SiteInfo.memberGradeRatio.date
).toLocaleDateString("ja-JP-u-ca-japanese", {
    year: "numeric",
    month: "long",
    day: "numeric",
});
const memberDepartmentRatioDate: string = new Date(
    SiteInfo.memberDepartmentRatio.date
).toLocaleDateString("ja-JP-u-ca-japanese", {
    year: "numeric",
    month: "long",
    day: "numeric",
});
const memberTotal: number =
    SiteInfo.memberGradeRatio.first +
    SiteInfo.memberGradeRatio.second +
    SiteInfo.memberGradeRatio.third +
    SiteInfo.memberGradeRatio.fourth +
    SiteInfo.memberGradeRatio.fifth;

useSeoMeta(
    generateSeoMeta(
        "中学生・新入生向けページ",
        "岐阜高専の新入生や岐阜高専を目指す中学生など向けのページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop
        text="中学生・新入生向けページ"
        image-path="/images/page-top.jpg"
    />
    <main>
        <h3>SERAに興味があるみなさんへ</h3>

        <QAndABox question="SERAについて簡単に教えて!">
            <p>宇宙分野に興味ある学生が集まった団体です。</p>
            <p>
                具体的には、教育用の模型ロケットや飲料缶サイズの模型人口衛星を設計、製作しています。
            </p>
            <p>
                宇宙理工学に関する知識とスキルを身に付けると共に、競技会や宇宙系の教育イベントの参加を通じて、
                人間力と実践力を養うことが出来ます。
            </p>
            <NuxtLink to="/about/sera"> 詳しくはこちら </NuxtLink>
        </QAndABox>

        <QAndABox
            question="SERAでの活動を通して、どのような力を身に付けることができますか？"
        >
            <p>
                コンピュータを使った製図(CAD)のスキル、電子回路の知識、プログラミング能力
                などの専門技術のほか、プロジェクトの進め方やチームワークのスキルなど、技術者
                としての人間性を身に付けることが出来ます。
            </p>
            <NuxtLink to="/projects/education">詳しくはこちら</NuxtLink>
        </QAndABox>

        <QAndABox question="活動時間はいつ？">
            <p>
                授業終了後から、18:30まで活動しています。土日祝日は大会等が無い限りお休みです。
            </p>
        </QAndABox>

        <QAndABox question="活動場所はどこ？">
            <p></p>
        </QAndABox>

        <QAndABox question="Rocket開発チームでやっている事は？">
            <p>モデルロケットの設計、製作を行っています。</p>
            <p>
                小型のものから、CanSat開発チームが作成した缶サットを積むことのできるものまで、大きさは様々です。
            </p>
            <NuxtLink to="/projects/rocket"> 詳しくはこちら </NuxtLink>
        </QAndABox>

        <QAndABox question="CanSat開発チームでやっている事は？">
            <p>
                「缶サット」と呼ばれる350ml缶サイズのの模擬人工衛星を製作しています。
            </p>
            <p>
                「投下型」「設置型」「走行型」など、工夫次第で様々な種類のものを製作できます。
                また、競技の種類によっては、1kgを超える大きさにもなる「ローバー」も製作しています。
            </p>
            <NuxtLink to="/projects/cansat"> 詳しくはこちら </NuxtLink>
        </QAndABox>

        <QAndABox question="Rocket・CanSat以外で行っている活動は？">
            <p>
                「CubeSat」と呼ばれる、10cm x 10cm x
                20cmサイズの超小型衛星の開発をしています。
            </p>
            <p>全国の高専と連携して、開発を行っています。</p>
            <NuxtLink to="/projects/kosen-x"> 詳しくはこちら </NuxtLink>
        </QAndABox>

        <QAndABox question="何人で活動していますか？">
            <p>
                {{ memberGradeRatioDate }}現座、 1年生が{{
                    SiteInfo.memberGradeRatio.first
                }}人、 2年生が{{ SiteInfo.memberGradeRatio.second }}人、
                3年生が{{ SiteInfo.memberGradeRatio.third }}人、 4年生が{{
                    SiteInfo.memberGradeRatio.fourth
                }}人、 5年生が{{ SiteInfo.memberGradeRatio.fifth }}人の 合計{{
                    memberTotal
                }}人で活動しています。
            </p>
        </QAndABox>
    </main>
</template>

<style scoped>
main {
    display: block;
    margin-inline: auto;
}

h3 {
    width: fit-content;
    color: var(--neptune1);
    margin-inline: auto;
}
</style>
