<script setup lang="ts">
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

const route = useRoute();

const { data } = await useFetch("/api/getArticle", {
    query: { name: route.params.article },
});

if (data.value === undefined || data.value === null) {
    throw createError({
        statusCode: 404,
        statusMessage: "Article Not Found :(",
    });
}

const pankuzuListPageName = (): string => {
    const postedDate = new Date(data.value?.date as number);
    return `${postedDate.getFullYear()}-${postedDate.getMonth() + 1}-${postedDate.getDate()}`;
};

onMounted(() => {
    const article = document.getElementById("article");
    const articleTitle = article?.getElementsByTagName("h1")[0];
    const postedDate = new Date(data.value?.date as number).toLocaleDateString(
        "ja-JP-u-ca-japanese",
        { dateStyle: "medium" }
    );
    const postedDateElement = document.createElement("small");
    postedDateElement.textContent = "掲載日： " + postedDate;
    articleTitle?.insertAdjacentElement("afterend", postedDateElement);
    const cardContentConversion = document.createElement("div");
    const purifiedHTML = DOMPurify.sanitize(
        marked.parse(data.value?.cardContent as string) as string
    );
    cardContentConversion.innerHTML = purifiedHTML;
    useSeoMeta(
        generateSeoMeta(
            articleTitle?.innerText as string,
            cardContentConversion.innerText,
            data.value?.coverImagePath || "/sera-logo-text.svg",
            "article"
        )
    );
});
</script>

<template>
    <PageTop text="News" image-path="/images/news-top.jpg" />
    <PankuzuList :current-page-name="pankuzuListPageName()" />
    <main>
        <NuxtImg
            :src="(data?.coverImagePath as string) || '/sera-logo-text.svg'"
        />
        <div
            id="article"
            class="markdown"
            v-html="
                DOMPurify.sanitize(
                    marked.parse(data?.article as string) as string
                )
            "
        ></div>
    </main>
</template>

<style scoped>
main {
    margin: unset;
    display: grid;
    width: 50%;
    height: fit-content;
    margin: 2rem auto;
}

main > div {
    width: 100%;
}

main > img {
    width: 42rem;
    place-self: center;
    margin-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
    main {
        width: calc(100% - 6rem);
        padding: 0 3rem;
    }
    main > img {
        width: 70vw;
    }
}
</style>
