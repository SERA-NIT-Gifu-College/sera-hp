<script setup lang="ts">
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { EntryType, type NewsEntry } from "~/utils/types/news";
import type { SlideEntry } from "~/utils/types/slide";
import SiteInfo from "~/assets/siteinfo.json";

const backgroundImageOptimization = useBackgroundImageOptimization();
const backgroundImageOptimizer = (path: string) => {
    backgroundImageOptimization.backgroundImageStyles.value = path;
    const ret = backgroundImageOptimization.backgroundImageStyles.value;
    return ret;
};

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
        content: `岐阜高専宇宙工学研究会【${SiteInfo.clubNameAbbreviation}】のホームページです。`,
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

let slideEntries = ref<Array<SlideEntry>>([
    ...welcomeSlide,
    ...getNewsEntriesForSlide(),
    ...slidesForProjects,
]);

interface QuickLinkEntry {
    label: string;
    imagePath: string;
    link: string;
}

const quickLinkEntries: Array<QuickLinkEntry> = [
    {
        label: "NEWS",
        imagePath: "/images/news-top.jpg",
        link: "/news",
    },
    {
        label: "About",
        imagePath: "/images/page-top.jpg",
        link: "/about",
    },
    {
        label: "Projects",
        imagePath: "/images/kosen1_gunma-cgv5-a.JPG",
        link: "/projects",
    },
];

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
        "/sera-hp/sera-logo-text.svg"
    )
);
</script>

<template>
    <main>
        <Slide
            :entries="slideEntries"
            :duration="6000"
            width="100vw"
            height="max(50svh, 32rem)"
            id="slide"
        />
        <div id="quick-links-container">
            <div id="quick-links">
                <div
                    class="quick-link-entry"
                    v-for="entry in quickLinkEntries"
                    :key="quickLinkEntries.indexOf(entry)"
                    :style="backgroundImageOptimizer(entry.imagePath)"
                >
                    <NuxtLink :to="entry.link">
                        <h2>{{ entry.label }}</h2>
                    </NuxtLink>
                </div>
            </div>
        </div>
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
                        v-if="entry.entryType === EntryType.Tweet"
                        v-html="
                            DOMPurify.sanitize(
                                marked.parse(
                                    entry.cardContent as string
                                ) as string
                            )
                        "
                    ></article>
                    <NuxtLink
                        v-if="entry.entryType === EntryType.Article"
                        :to="entry.linkPath as string"
                    >
                        <article
                            v-html="
                                DOMPurify.sanitize(
                                    marked.parse(
                                        entry.cardContent as string
                                    ) as string
                                )
                            "
                        ></article>
                        <Icon name="material-symbols:arrow-outward-rounded" />
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
    grid: auto auto auto / 3fr 2fr;
    grid-template-areas:
        "slide slide"
        "quick-links quick-links"
        "news twitter";
    margin: 0;
    width: 100vw;
}

main > *:not(#slide, #quick-links-container) {
    margin-inline: var(--main-margin-left-right);
}

main:last-child {
    margin-bottom: var(--main-margin-top-bottom);
}

#slide {
    grid-area: slide;
}

#quick-links-container {
    display: block;
    margin: 0 0 2rem 0;
    grid-area: quick-links;
    container: quick-links-container / inline-size;
    background-color: var(--astronaut);
}

#quick-links {
    --quick-link-margin: 1rem;
    display: grid;
    width: calc(100vw - 2 * var(--quick-link-margin));
    height: calc(100vw / 9);
    min-height: 10rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    margin: var(--quick-link-margin);
    align-items: center;
}

.quick-link-entry {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 10rem;
    background-position: center;
    background-size: cover;
    background-color: #414141cb;
    background-blend-mode: overlay;
    transition: all 0.5s ease-in-out;
    & > a {
        display: flex;
        width: 100%;
        height: 100%;
        color: var(--starlight);
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }
    & > a > h2 {
        font-size: 3cqi;
    }
}

.quick-link-entry:hover {
    transition: all 0.25s ease-in-out;
    background-color: transparent;
}

@container quick-links-container (width < 640px) {
    #quick-links {
        width: 100vw;
        height: 100vw;
        min-height: calc(30rem + 2 * var(--quick-link-margin));
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        margin-inline: 0;
    }
    .quick-link-entry {
        & > a > h2 {
            font-size: 7cqi;
        }
    }
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
        margin-left: 0.25rem;
    }
}

#twitter {
    display: flex;
    place-self: center;
    max-width: 100%;
    overflow-x: hidden;
    grid-area: twitter;
    margin-top: 1rem;
    & > .twitter-timeline {
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
        grid-template-rows: repeat(4, auto);
        grid-template-columns: 1fr;
        grid-template-areas:
            "slide"
            "quick-links"
            "news"
            "tweet";
        & > * {
            margin-inline: 0 !important;
        }
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
        & li a span {
            width: 32px;
            height: 32px;
        }
    }

    #twitter {
        width: calc(90vw - 4rem);
        height: fit-content;
        justify-self: center;
        justify-content: center;
        position: relative;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 5;
        & > .twitter-timeline-rendered iframe {
            position: absolute;
            inset: 50% auto auto 50%;
            translate: -50% -50%;
        }
    }
}
</style>
