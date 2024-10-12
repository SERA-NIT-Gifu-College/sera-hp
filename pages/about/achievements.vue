<script setup lang="ts">
import AchievementsList from "~/assets/achievements.json";

useSeoMeta(
    generateSeoMeta(
        "活動実績",
        "岐阜高専宇宙工学研究会の活動や受賞歴の紹介ページです。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="活動実績" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="活動実績" />
    <main>
        <section>
            <p>
                岐阜高専宇宙工学研究会【SERA】では、各種競技会に参加しています。
            </p>
            <p>
                主には缶サット甲子園と種子島ロケットコンテストに出場しています。また、来年度はRocket開発チームが新たにモデルロケット全国大会にも出場予定です。
            </p>
        </section>

        <section>
            <h2>競技会の参加・受賞歴</h2>
        </section>

        <section>
            <img
                src="/images/koshien2020_mission-rogo.png"
                alt="2020 Mission Logo"
                class="float-right"
                style="background-color: black"
            />
            <h3>缶サット甲子園</h3>
            <ul>
                <li
                    v-for="entry in AchievementsList.cansatKousien"
                    :key="AchievementsList.cansatKousien.indexOf(entry)"
                >
                    {{ entry }}
                </li>
            </ul>
            <p>
                この画像は、2020大会におおける我々のミッションロゴです。※無断使用厳禁
            </p>
            <p>
                2020大会の開発記録についての開発記録も公開しております。
                <NuxtLink to="/news/cansat-koushien-2020-championship">
                    こちら
                </NuxtLink>
                からご覧ください。
            </p>
        </section>

        <section>
            <h3>種子島ロケットコンテスト</h3>
            <h4>滑空・定点回収</h4>
            <img
                src="/images/rocket_top.jpg"
                alt="rockets"
                class="float-right"
            />
            <ul>
                <li
                    v-for="entry in AchievementsList.tanegasimaRocketContest
                        .airtime"
                    :key="
                        AchievementsList.tanegasimaRocketContest.airtime.indexOf(
                            entry
                        )
                    "
                >
                    {{ entry }}
                </li>
            </ul>
            <br />
            <h4>高度</h4>
            <ul>
                <li
                    v-for="entry in AchievementsList.tanegasimaRocketContest
                        .altitude"
                    :key="
                        AchievementsList.tanegasimaRocketContest.altitude.indexOf(
                            entry
                        )
                    "
                >
                    {{ entry }}
                </li>
            </ul>
            <br />
            <h4>CanSat</h4>
            <img
                src="/images/cansat/cansat_03.jpg"
                alt="Sample Image"
                class="float-right"
            />
            <ul>
                <li
                    v-for="entry in AchievementsList.tanegasimaRocketContest
                        .cansat"
                    :key="
                        AchievementsList.tanegasimaRocketContest.cansat.indexOf(
                            entry
                        )
                    "
                >
                    {{ entry }}
                </li>
            </ul>
        </section>

        <section>
            <h3>衛星設計コンテスト</h3>
            <ul>
                <li
                    v-for="entry in AchievementsList.satelliteDesignContest"
                    :key="
                        AchievementsList.satelliteDesignContest.indexOf(entry)
                    "
                >
                    {{ entry }}
                </li>
            </ul>
        </section>

        <section>
            <h3>全国高等専門学校 宇宙コンテスト(宇宙コン)</h3>
            <ul>
                <li
                    v-for="entry in AchievementsList.nationalTechincalCollegeSpaceContest"
                    :key="
                        AchievementsList.nationalTechincalCollegeSpaceContest.indexOf(
                            entry
                        )
                    "
                >
                    {{ entry }}
                </li>
            </ul>
        </section>

        <section>
            <h2>その他活動実績 (イベントなど)</h2>
            <img
                src="/images/uchu_fea.jpg"
                alt="Sample Image"
                class="float-right"
            />
            <ul>
                <li
                    v-for="entry in AchievementsList.other"
                    :key="AchievementsList.other.indexOf(entry)"
                >
                    {{ entry }}
                </li>
            </ul>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");

ul li {
    line-height: 24pt;
}

ul li::marker {
    content: "☆ ";
}
</style>
