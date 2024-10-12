<script setup lang="ts">
useSeoMeta(
    generateSeoMeta(
        "教育プロジェクト",
        "岐阜高専宇宙工学研究会の教育プロジェクトについてのページです。",
        "/images/education/education-1.jpg"
    )
);
</script>

<template>
    <PageTop text="教育プロジェクト" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="教育プロジェクト" />
    <main>
        <section>
            <h2>新入生研修</h2>
            <p>
                人工衛星やロケットを開発するためには、それ相応の技術が必要です。
            </p>
            <p>
                SERAの新人研修では、新入生へ「モデルロケット」「プログラミング」「CAD」「材料の加工」「資料作成」の技術を教え、
                大会への参加などの経験を積むための準備をします。
                1連の研修が終わると、メンバーと共に大会や活動への参加を通して、実践的な技術を身に着けられます。
            </p>
        </section>

        <section>
            <h2>研修で使用する機材/ソフトウェア</h2>
        </section>

        <section>
            <h3>AlphaⅢ</h3>
            <img
                src="/images/rocket/alpha3.jpg"
                alt="Alpha III"
                class="float-left"
            />
            <p>教育用に使われる、小型の火薬ロケットです。</p>
            <p>
                モデルロケットの製作、運用の練習として使用しています。
                教育用と言えど迫力満載で、自作ロケットの基本的な知識を一通り学べます。
            </p>
        </section>

        <section>
            <h3>Raspberry Pi</h3>
            <img
                src="/images/education/raspberry-pi-4.jpg"
                alt="Raspberry Pi 4"
                class="float-right"
            />
            <p>Raspberry財団が開発している、マイクロコンピュータです。</p>
            <p>
                我々SERAでは、缶サットを動かすためのコンピュータとして使用しています。
                プログラミング言語は、主にPythonを使用しています。
            </p>
            <p>※こちらの画像は、Raspberry Piの公式ホームページのものです。</p>
        </section>

        <section>
            <h3>Fusion360</h3>
            <p>
                機械の設計をするソフトウェアです。
                研修においては、作成した3Dモデルを3Dプリンタで印刷を行うため、より実践的な設計技術を身に付けることが出来ます。
            </p>
        </section>

        <section>
            <h3>Word/Excel/PowerPoint</h3>
            <p>
                社会人になっても使用する機会の多い、Microsoft社のソフトウェアです。
            </p>
            <p>
                SERAでは、大会のプレゼン作成や各種会議での資料作成の際に使用しています。
                研修では、これらのソフトウェアを最低限使用できるように教えます。その後は、実際に使用する機会を設けることで、
                実践を重ねることで経験を積むことが出来ます。
            </p>
        </section>

        <section>
            <h2>教育用ローバーの開発</h2>
            <img
                src="/images/education/education-1.jpg"
                alt="教育用ローバー"
                class="float-left"
            />
            <p>上記の新人研修とは別に、教育用ローバーを開発しています。</p>
            <p>
                新人研修をしてゆく中で学ぶ「プログラミング」「CAD」「材料の加工」などの様々な技術をまとめて学ぼうというプロジェクトです。
                宇宙に興味を持つ学生を増やす、衛星開発に触れる機会を増やすことを目標に、現在は開発中です。
            </p>
            <p>
                アイデアをお持ちの方、教育用ローバーに触れてみたいという方は、是非ご連絡ください。
            </p>
        </section>
    </main>
</template>

<style scoped>
@import url("~/assets/styles/page.css");
</style>
