<script setup lang="ts">
import { marked } from "marked";
import type { EntryType } from "#imports";

const { data } = await useFetch("/api/getNewsList");

onMounted(() => {
    const twitterScript = document.createElement("script");
    const twitterDivision = document.getElementById("twitter");
    twitterScript.type = "text/javascript";
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterDivision?.appendChild(twitterScript);
});

useSeoMeta(
    generateSeoMeta(
        "ホーム",
        "岐阜高専宇宙工学研究会のホームページ",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <main>
        <div id="news-board">
            <h3>News</h3>
            <div></div>
            <ul id="news-list">
                <li v-for="entry in data" :key="entry.date as number">
                    <small>
                        {{
                            new Date(entry.date as number).toLocaleDateString(
                                "ja-JP",
                                { dateStyle: "medium" }
                            )
                        }}
                    </small>
                    <div class="new-label" v-if="data?.indexOf(entry) < 2">
                        NEW!
                    </div>
                    <article
                        v-html="marked.parse(entry.cardContent as string)"
                    ></article>
                    <NuxtLink
                        v-if="entry.entryType === EntryType.Article"
                        :to="entry.linkPath as string"
                    >
                        <Icon
                            name="material-symbols:keyboard-double-arrow-right-rounded"
                        />
                        Read More
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div id="twitter">
            <a
                class="twitter-timeline"
                data-lang="ja"
                data-dnt="true"
                data-align="center"
                data-theme="dark"
                :data-height="16 * 70"
                :data-width="16 * 33"
                href="https://twitter.com/SERA_NITGC?ref_src=twsrc%5Etfw"
                >Tweets by SERA_NITGC</a
            >
        </div>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid: auto-flow / 4fr 1fr;
}

#news-board {
    max-width: 60rem;
    max-height: 50rem;
    width: fit-content;
    place-self: center;
    overflow-y: scroll;
    border: var(--neptune1) solid 3px;
    box-shadow: 10px 5px 5px var(--starlight1);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    & > h3 {
        place-self: center;
    }
    & > div {
        width: 90%;
        place-self: center;
        border: var(--neptune1) solid 1px;
    }
}

#news-list {
    list-style: none;
    padding: 0 0.75rem;
    & li {
        display: flex;
        align-items: center;
        border-bottom: var(--starlight1) solid 2px;
    }
    & li:last-child {
        border-bottom: none;
    }
    & li > * {
        margin: 0 0.5rem;
    }
    & li > *:first-child {
        margin-left: 0;
    }
    & li > *:last-child {
        margin-right: 0;
    }
    & li div {
        background-color: var(--sun2);
        padding: 0.25rem 0.5rem;
    }
    & li a {
        text-decoration: none;
        color: var(--neptune1);
        display: flex;
        align-items: center;
    }
    & li a span {
        height: 24px;
        width: 24px;
        margin-right: 0.125rem;
    }
}

#twitter {
    display: flex;
    justify-content: center;
    & > .twitter-timeline-rendered {
        display: unset;
        width: unset;
        max-width: unset;
        margin: unset;
    }
}

@media screen and (max-width: 1024px) {
    main {
        width: calc(100vw - 2rem);
        place-self: center;
        place-items: center;
        grid: auto-flow / 1fr;
    }

    #news-board {
        width: 90%;
    }

    #twitter {
        width: 90%;
    }
}
</style>
