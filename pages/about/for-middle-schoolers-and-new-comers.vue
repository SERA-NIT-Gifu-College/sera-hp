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
    <PankuzuList current-page-name="中学生・新入生向けページ" />
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

        <QAndABox question="どんな目標を持って活動していますか？">
            <p>
                「社会で戦える技術者になる」という目的の下、大会やコンテストに参加する中で、
                個人のスキルやチーム力の向上を目標に活動しています。
            </p>
            <NuxtLink to="/about/sera">詳しくはこちら</NuxtLink>
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
            <p>現在は文化部室の一室を主な活動場所としています。</p>
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

        <QAndABox question="大会での成績はどのようなものがありますか？">
            <p>
                種子島ロケットコンテストのロケット競技における滞空および定点回収部門での優勝のほか、
                インターハイ相当の大会となる缶サット甲子園で岐阜地方大会を3連覇しています(昨年度の大会まで)。
            </p>
            <NuxtLink to="/about/achievements">詳しくはこちら</NuxtLink>
        </QAndABox>

        <QAndABox question="県外での活動などはありますか？">
            <p>
                あります。最も遠くて種子島でのコンテストに参加していますが、コロナの影響で令和4年度の県外の活動も少なくなると予想されます。
            </p>
            <p>
                遠征費については、県外での大会にかかる旅費や交通費に対して学校からの補助があります。
            </p>
        </QAndABox>

        <QAndABox question="何人で活動していますか？">
            <p>
                {{ memberGradeRatioDate }}現在、 1年生が{{
                    SiteInfo.memberGradeRatio.first
                }}人、 2年生が{{ SiteInfo.memberGradeRatio.second }}人、
                3年生が{{ SiteInfo.memberGradeRatio.third }}人、 4年生が{{
                    SiteInfo.memberGradeRatio.fourth
                }}人、 5年生が{{ SiteInfo.memberGradeRatio.fifth }}人の 合計{{
                    memberTotal
                }}人で活動しています。
            </p>
        </QAndABox>

        <QAndABox
            question="環境都市工学科や建築学科など、宇宙に全く関係ない学科出身の部員はいますか？"
        >
            <p>環境都市工学科、建築学科の学生も実際に活動しています。</p>
            <p>
                また現在、大手ゼネコンなどでは宇宙ホテル、月面太陽光発電、宇宙エレベーターの開発プロジェクトが検討されているので、
                環境都市工学科、建築学科ともに宇宙開発と大いに関係しています。
            </p>
            <p>
                宇宙の謎を探り、人類の生存圏を宇宙へ拡大していくためには様々な分野の人たちが協力する必要があるため、学科の垣根は関係ありません。
                また、活動をしていく中で専門的な知識だけでなく、WordやPowerPointを用いた資料作成といった社会人として仕事をするときに役立つスキルも身に付けることが出来ます。
            </p>
        </QAndABox>

        <QAndABox question="部員の学科の割合は？">
            <p>
                {{ memberDepartmentRatioDate }}現在、 M科{{
                    SiteInfo.memberDepartmentRatio.mechanicalEng
                }}人、 D科{{ SiteInfo.memberDepartmentRatio.elecControl }}人、
                E科{{ SiteInfo.memberDepartmentRatio.elecAndComp }}人、 C科{{
                    SiteInfo.memberDepartmentRatio.civilEng
                }}人、 A科{{
                    SiteInfo.memberDepartmentRatio.architecture
                }}人です。
            </p>
        </QAndABox>

        <QAndABox question="宇宙関係などの特別な知識は必要ですか？">
            <p>入会する際は特に知識は全く必要ありません。</p>
            <p>必要な知識は、入部してから先輩方に教えてもらえます。</p>
        </QAndABox>

        <QAndABox
            question="他の部活との兼部は可能ですか？実際に兼部している人はいますか？"
        >
            <p>
                兼部は可能です。
                実際に、バドミントン部、バレー部などの運動部や、その他文化部との兼部をしている人がいます。
            </p>
        </QAndABox>

        <QAndABox question="顧問の先生はどのような先生ですか？">
            <p>
                {{ SiteInfo.advisor.department }}に所属されている{{
                    SiteInfo.advisor.name
                }}教員です。{{ SiteInfo.advisor.description }}
            </p>
        </QAndABox>

        <QAndABox question="用意しておく必要のある道具などはありますか？">
            <p>
                個人で使用できるパソコンを用意しておくと、スムーズに活動に参加できます。
            </p>
            <p>
                持っていないからと言って活動できないわけではありません。部で所有するパソコンを使用して活動を行うことも出来ます。
            </p>
        </QAndABox>

        <QAndABox question="部費などのかかる費用について教えてください。">
            <p>¥10,000/年となります。年度初めに徴収させて頂きます。</p>
            <p>
                年間予算内でも説明させて頂きますが、集金した部費は、制作材料の購入、機器のメンテナンス、先輩への贈り物などの厚生費に使わせて頂きます。
            </p>
            <p>
                この他に、任意での購入とはなりますが、ユニフォームの購入費(入部後に連絡)がかかります。
            </p>
        </QAndABox>
    </main>
</template>

<style scoped>
main {
    display: block;
    margin-inline: auto;
}

main > div {
    margin-inline: 1rem;
}

h3 {
    width: fit-content;
    color: var(--neptune1);
    margin-inline: auto;
}

a,
a:visited {
    color: var(--neptune1);
}

@media screen and (max-width: 640px) {
    main > div {
        margin-inline: 0;
    }
}
</style>
