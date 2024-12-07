<script setup lang="ts">
useSeoMeta(
    generateSeoMeta(
        "Rocket開発チーム",
        "岐阜高専宇宙工学研究会の「Rocket開発チーム」についてのページです。",
        "/images/rocket_top.jpg"
    )
);
</script>

<template>
    <PageTop text="Rocket開発チーム" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="Rocket開発チーム" />
    <main>
        <section>
            <NuxtImg
                src="/images/rocket_top.jpg"
                alt="Rocket top image"
                class="float-left"
            />
            <p>岐阜高専・宇宙工学研究会【SERA】Rocket開発チームです。</p>
            <p>
                Rocket開発チームは、主に自作のモデルロケットを製作しており、モデルロケット製作を通じた設計・製作・評価能力の向上を目指しています。
            </p>
            <p>
                また、モデルロケットの各種競技会にも出場している他、新入生向けのモデルロケット打上げ体験等を行っております。
            </p>
        </section>

        <section>
            <h2>モデルロケットとは</h2>
            <NuxtImg
                src="/images/rocket/alpha3.jpg"
                alt="Alpha III"
                class="float-right"
            />
            <p>
                モデルロケットは、火薬エンジンを使用しておよそ時速180km
                (モデルロケット：AlphaⅢ、エンジン：A8-3の場合)
                で大空高く飛ぶ模型ロケットです。世界で50年間5億回無事故を記録しています。(日本モデルロケット協会HPより)
            </p>
            <p>
                モデルロケットの打ち上げにはライセンスの取得が必要であり、C型のエンジンを扱うには4級ライセンス、G型ロケットを扱うには3級ライセンスが必要となります。
            </p>
            <p>
                画像は「AlphaⅢ」という、入門用モデルロケットです。約50mほどの高度まで打ち上げることが可能です(A8-3エンジンを使用した場合)。
                簡単に製作できるようになっている為、モデルロケット教室やSERA新入生向け打上げ体験などで広く使用されています。
            </p>
            <p>
                モデルロケット・エンジンやライセンスについての詳細は、
                <NuxtLink to="https://www.ja-r.net/">
                    日本モデルロケット協会HP
                </NuxtLink>
                をご覧ください。
            </p>
        </section>

        <section>
            <h2>Rocket開発チームの活動</h2>
            <NuxtImg
                src="/images/rocket/rocket_02.jpg"
                alt="2 staged rocket"
                class="float-left"
            />
            <p>
                Rocket開発チームでは、毎年種子島ロケットコンテストに出場しています。優勝を目指してロケットの設計・解析・製作などを行っています。
            </p>
            <p>
                また、オリジナルのモデルロケットや缶サット搭載用ロケットの製作も行っています。缶サット搭載用ロケットは、缶サット甲子園の大会及び校内試験を行う為に
                <NuxtLink to="/projects/cansat">CanSat開発チーム</NuxtLink>
                と協力して製作・改良を行っています。
            </p>
            <p>
                Rocket開発チームの活動・受賞歴の詳細は
                <NuxtLink to="/about/achievements">
                    『活動実績』のページ
                </NuxtLink>
                をご覧ください。
            </p>
        </section>

        <section>
            <h3>種子島ロケットコンテスト</h3>
            <p>
                Rocket開発チームでは、滞空・定点回収部門と高度部門への出場経験があります。第13回大会では、<strong>滞空・定点回収部門で優勝</strong>を収めました。この優勝を機に、同好会へと昇進することが出来たのです。
            </p>
        </section>

        <section>
            <h3>缶サット搭載用ロケット</h3>
            <p>
                CanSat開発チームと協力し、缶サット甲子園で使用する為のモデルロケットを製作しています。
            </p>
            <p>
                これらはペイロードロケットと呼ばれ、缶サットを上空に打ち上げることを目的に設計されています。
            </p>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");
</style>
