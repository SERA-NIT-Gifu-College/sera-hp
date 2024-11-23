<script setup lang="ts">
import SiteInfo from "~/assets/siteinfo.json";
const WebsiteMetaData = generateSeoMeta(
    "Contact SERA",
    `${SiteInfo.clubNameAbbreviation}へのお問い合わせ`,
    "/sera-logo-text.svg"
);

useSeoMeta(WebsiteMetaData);
</script>

<template>
    <PageTop text="Contact" image-path="/images/page-top.jpg" />
    <PankuzuList
        :currentPageName="`Contact ${SiteInfo.clubNameAbbreviation}`"
    />
    <main>
        <section>
            <h1>{{ SiteInfo.clubNameAbbreviation }}へのお問い合わせ</h1>
        </section>

        <section>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd2a8WMfu4v5potmKbwIPJ7fKfL2xpVhaTN6ys2J1A-dRU3sw/viewform?embedded=true"
                width="100%"
                height="950"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                >読み込んでいます…</iframe
            >
        </section>
    </main>
</template>

<style scoped>
main {
    width: clamp(300px, 70%, 36rem);
    margin: auto;
}
</style>
