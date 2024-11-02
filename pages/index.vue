<script setup lang="ts">
import { marked } from "marked";
import { EntryType } from "#imports";
import type { SlideEntry } from "#imports";

const { data } = await useFetch("/api/getNewsList");

const getNewsEntriesForSlide = (): Array<SlideEntry> => {
    let res: Array<SlideEntry> = [];
    const latestNewsNumber = 2;
    for (let i = 0; i < latestNewsNumber; i++) {
        const news = data.value?.at(i) as NewsEntry;
        if (news === undefined) break;
        res[i] = {
            imagePath:
                news.coverImagePath === ""
                    ? "/images/slide-default.jpg"
                    : (news.coverImagePath as string),
            title: "News!",
            content: news.cardContent as string,
            link:
                news.entryType === EntryType.Tweet
                    ? undefined
                    : (news.linkPath as string),
        };
    }
    return res;
};

const welcomeSlide: Array<SlideEntry> = [
    {
        imagePath: "/images/welcome.jpg",
        title: "ようこそ！",
        content: "岐阜高専宇宙工学研究会【SERA】のホームページです。",
        link: undefined,
    },
];

const slidesForProjects: Array<SlideEntry> = [
    {
        imagePath: "/images/rocket_top.jpg",
        title: "Rocket開発チーム",
        content: "",
        link: "/projects/rocket",
    },
    {
        imagePath: "/images/cansat_top.jpg",
        title: "CanSat開発チーム",
        content: "",
        link: "/projects/cansat",
    },
    {
        imagePath: "/images/kosen1_gunma-cgv5-a.JPG",
        title: "KOSEN-X",
        content: "高専連携による超小型衛星開発",
        link: "/projects/kosen-x",
    },
];

let slideEntries = ref<Array<SlideEntry>>(
    welcomeSlide.concat(getNewsEntriesForSlide(), slidesForProjects)
);

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
        <Slide
            :entries="slideEntries"
            :duration="6000"
            width="100vw"
            height="calc(100svh - 104px)"
            id="slide"
        />
        <div id="news-board">
            <h3>News</h3>
            <div></div>
            <ul id="news-list">
                <li v-for="entry in data" :key="entry.date as number">
                    <div>
                        <small>
                            {{
                                new Date(
                                    entry.date as number
                                ).toLocaleDateString("ja-JP", {
                                    dateStyle: "medium",
                                })
                            }}
                        </small>
                        <div
                            class="new-label"
                            v-if="(data?.indexOf(entry) as number) < 2"
                        >
                            NEW!
                        </div>
                    </div>
                    <article
                        v-html="marked.parse(entry.cardContent as string)"
                    ></article>
                    <NuxtLink
                        v-if="entry.entryType === EntryType.Article"
                        :to="entry.linkPath as string"
                    >
                        <Icon name="material-symbols:arrow-forward-rounded" />
                        <div>Read More</div>
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
                :data-height="16 * 40"
                :data-width="16 * 24"
                href="https://twitter.com/SERA_NITGC?ref_src=twsrc%5Etfw"
            >
                Tweets by SERA_NITGC
            </a>
        </div>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid: auto auto / 3fr 2fr;
    grid-template-areas:
        "slide slide"
        "news twitter";
    margin: 0;
    width: 100vw;
}

main > *:not(#slide) {
    margin: var(--main-margin-top-bottom) var(--main-margin-left-right);
}

#slide {
    grid-area: slide;
}

#news-board {
    max-width: 60rem;
    max-height: 50rem;
    width: minmax(auto, 60vw);
    place-self: center;
    overflow-y: scroll;
    border: var(--neptune1) solid 3px;
    box-shadow: 10px 5px 5px var(--starlight1);
    display: grid;
    grid-area: news;
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
        display: flex;
        flex-direction: row;
    }
    & li > *:last-child {
        margin-right: 0;
    }
    & li small {
        align-content: center;
    }
    & li .new-label {
        background-color: var(--sun2);
        padding: 0.25rem 0.5rem;
        margin: auto 0.5rem;
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
    place-self: center;
    max-width: 100%;
    overflow-x: hidden;
    grid-area: twitter;
    & > .twitter-timeline-rendered {
        display: unset !important;
        width: unset !important;
        max-width: unset !important;
        margin: unset !important;
    }
}

@media screen and (max-width: 1024px) {
    main {
        place-self: center;
        place-content: center;
        grid-template-rows: repeat(3, auto);
        grid-template-columns: 1fr;
        grid-template-areas:
            "slide"
            "news"
            "tweet";
    }

    #slide {
        margin: auto;
    }

    #news-board {
        margin: 1rem 0;
        width: calc(90vw - 4rem);
    }

    #news-list {
        & li {
            min-height: 5rem;
        }
        & li > *:first-child {
            flex-direction: column;
        }
        & li .new-label {
            margin: 0.5rem auto;
        }
        & li a div {
            display: none;
        }
        & li a span {
            width: 32px;
            height: 32px;
        }
    }

    #twitter {
        margin: 1rem 0;
        width: calc(90vw - 4rem);
        justify-self: center;
        justify-content: center;
        position: relative;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        & > .twitter-timeline-rendered iframe {
            position: absolute;
            inset: 50% auto auto 50%;
            translate: -50% -50%;
        }
    }
}
</style>
