<script setup lang="ts">
useSeoMeta(
    generateSeoMeta(
        "CanSat開発チーム",
        "岐阜高専宇宙工学研究会の「CanSat開発チーム」についてのページです。",
        "/images/cansat_top.jpg"
    )
);
</script>

<template>
    <PageTop text="CanSat開発チーム" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="CanSat開発チーム" />
    <main>
        <section>
            <NuxtImg
                src="/images/cansat_top.jpg"
                alt="CanSat top image"
                class="float-left"
            />
            <p>岐阜高専宇宙工学研究会【SERA】CanSat開発チームです。</p>
            <p>
                CanSat開発チームでは、主にCanSat(缶サット)を製作し、缶サット製作を通じて、機械工学、電気電子工学、情報工学、制御工学等を組み合わせた設計・製作・評価能力の向上を目指しています。
            </p>
            <p>
                また、CanSatの各種競技会にも出場している他、オリジナルのCanSatローバーキットの開発も行っております。
            </p>
        </section>

        <section>
            <h2>CanSatとは</h2>
            <NuxtImg
                src="/images/cansat/cansat_01.jpg"
                alt="CanSat"
                class="float-right"
            />
            <p>
                CanSatとは、教育用の缶サイズの模擬人工衛星で「宇宙開発の縮小版」とも言われています。漫画『宇宙兄弟』11~12巻では、主人公ムッタらの宇宙飛行士候補生の訓練の一環としてアメリカのARLISSという実在する大会に出場する場面があるなど、宇宙教育の面において注目されている存在です。
            </p>
            <p>
                CanSatには350mL缶サイズやその3倍程度のOpenClassなどのサイズがあり、規定のサイズの中にマイコンやセンサ、モータなどの素子を組み込み、ロケットや気球で上空から放出し、パラシュート等を使用して降下している間や着地後に動作する物となっています。降下中に動作するものから着地後に移動するようなものまで、様々なタイプのCanSatが作られています。
            </p>
            <p>
                SERAが参加している缶サット甲子園では350mL缶サイズ、種子島ロケットコンテストでは
                OpenClass 直径154mm・高さ300mm以下
                という規定があり、規定(レギュレーション)は大会ごとにまちまちとなっています。
            </p>
            <p>
                SERAでは、様々なタイプのCanSatの中でも特に「ローバー型」と呼ばれる、駆動部がついており移動機構を備えたCanSatの開発に力を入れております。
            </p>
        </section>

        <section>
            <h2>CanSat開発チームの活動</h2>
            <NuxtImg
                src="/images/cansat/cansat_02.jpg"
                alt="SERA自作ロケット"
                class="float-left"
            />
            <p>
                CanSat開発チームでは、毎年缶サット甲子園と種子島ロケットコンテストの2大会に出場しています。優勝を目指してCanSatの設計・製作・改良などを行っています。
            </p>
            <p>
                また新たな試みとして、新入会員の教育題材となるような「教育用ローバーキット」の開発を行っております。
            </p>
            <p>
                CanSat開発チームの活動・受賞歴の詳細は
                <NuxtLink to="/about/achievements"
                    >『活動実績』のページ</NuxtLink
                >
                をご覧ください。
            </p>
        </section>

        <section>
            <h3>缶サット甲子園</h3>
            <NuxtImg
                src="/images/cansat/koshien2020.jpg"
                alt="缶サット甲子園"
                class="float-right"
            />
            <p>
                斬新で独創的な缶サットのCoolさを競う大会として「缶サット甲子園」があります。自分たちでミッションを考えて独自の缶サットを開発し、運用、プレゼンまで行います。様々な技術や経験を身に付けることが出来る大会です。
                高校生向けの大会となるため、高専では3年生以下でチームを結成し、出場しています。
            </p>
            <p>
                また
                <NuxtLink to="/projects/rocket">Rocket開発チーム</NuxtLink>
                と協力し、大会や校内試験で使用する缶サット打ち上げ用ロケットの開発も行っています。
            </p>
        </section>

        <section>
            <h3>種子島ロケットコンテスト</h3>
            <NuxtImg
                src="/images/cansat/seratank-1.png"
                alt="SERATANK-1"
                class="float-left"
            />
            <p>
                CanSat開発チームでは、毎年ペイロード部門に出場しています。優勝を目指して新機体の開発を行っています。
            </p>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");
</style>
