<script setup lang="ts">
import LogoSVG from "public/sera-logo-no-text.svg";
import SiteInfo from "assets/siteinfo.json";

const showTwitterIcon = ref<boolean>(false);

const getTimeRequest = await useFetch("/api/getTime");
const time: Date = new Date(getTimeRequest.data.value as number);

const timeGenerated: string = time.toLocaleString("ja-JP-u-ca-japanese", {
    dateStyle: "medium",
    timeStyle: "short",
});

const showThePast = (event: Event) => {
    const eventType = event.type;
    if (eventType === "mouseover") {
        showTwitterIcon.value = true;
    } else if (eventType === "mouseleave") {
        showTwitterIcon.value = false;
    }
};
</script>

<template>
    <footer>
        <div class="footer-wrapper">
            <div class="logo">
                <LogoSVG />
            </div>
            <div class="top-column">
                <div class="summary">
                    <h3>
                        岐阜高専宇宙工学研究会 - {{ SiteInfo.clubNameLong }}
                    </h3>
                    <p>
                        宇宙分野に興味ある学生が<wbr />集い、<wbr />宇宙理工学に<wbr />関する知識を<wbr />身に付けると共に、<wbr />
                        宇宙分野に関連する<wbr />各種競技会へ<wbr />参加して<wbr />人間力と実践力を<wbr />養うことを目的に<wbr />活動しています。
                    </p>
                    <NuxtLink to="/about/sera"
                        >About {{ SiteInfo.clubNameAbbreviation }}</NuxtLink
                    >
                </div>
                <div class="links">
                    <ul>
                        <li>
                            <NuxtLink to="/"> Home </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/news"> News </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/projects"> Projects </NuxtLink>
                            <ul>
                                <li>
                                    <NuxtLink to="/projects/rocket">
                                        Rocket
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/projects/cansat">
                                        CanSat
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/projects/kosen-x">
                                        CubeSat Kosen-x
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/projects/edu-robot">
                                        Edu-Robot
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NuxtLink to="/about/sera">
                                About {{ SiteInfo.clubNameAbbreviation }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="sns-list">
                    <h3>
                        {{ SiteInfo.clubNameAbbreviation
                        }}<wbr />を<wbr />フォロー<wbr />する
                    </h3>
                    <ul>
                        <li>
                            <NuxtLink
                                to="https://twitter.com/SERA_NITGC"
                                target="_blank"
                                v-on="{
                                    mouseover: showThePast,
                                    mouseleave: showThePast,
                                }"
                            >
                                <Transition name="show-the-past">
                                    <Icon
                                        name="simple-icons:x"
                                        v-show="!showTwitterIcon"
                                    />
                                </Transition>
                                <Transition name="show-the-past">
                                    <Icon
                                        name="simple-icons:twitter"
                                        v-show="showTwitterIcon"
                                    />
                                </Transition>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="https://www.instagram.com/sera_nitgc_official"
                                target="_blank"
                            >
                                <Icon name="simple-icons:instagram" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom-column">
                <p>最終更新: {{ timeGenerated }}</p>
                <p>
                    このHPは{{
                        SiteInfo.clubNameAbbreviation
                    }}の学生が開発・運営しています
                </p>
                <p>
                    © {{ SiteInfo.copyrightYear }} NIT-GC
                    {{ SiteInfo.clubNameAbbreviation }} All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.show-the-past-enter-active,
.show-the-past-leave-active {
    transition: opacity 30s cubic-bezier(1, 0, 1, 0.75);
}

.show-the-past-enter-from,
.show-the-past-leave-to {
    opacity: 0;
}

footer {
    background: var(--ocean-blue);
    color: var(--sunlight);
    width: 100vw;
}

.footer-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    max-width: 1400px;
    width: 90%;
    margin: auto;
    padding: 2rem 0;
    & h3 {
        text-transform: uppercase;
    }
    & p {
        font-size: 0.75em;
    }
    & a {
        text-decoration: none;
        color: var(--sunlight);
    }
    & a:hover {
        text-decoration: currentColor underline dashed;
        text-decoration-thickness: 2px;
    }
}

.logo {
    height: fit-content;
    & svg {
        width: auto;
        height: 56px;
        background: transparent !important;
    }
}

.top-column {
    display: grid;
    grid-template-columns: 2fr 5fr 1fr;
    grid-template-rows: 1fr;
    padding-bottom: 1rem;
    border-bottom: var(--sunlight) solid 3px;
}

.links ul {
    list-style: none;
    font-weight: 600;
    & li {
        margin: 0.25rem 0;
    }
    & > li:first-child {
        margin-top: 0;
    }
    & > li:last-child {
        margin-bottom: 0;
    }
}

.sns-list h3 {
    word-break: keep-all;
    overflow-wrap: break-word;
}

.sns-list ul {
    list-style: none;
    display: flex;
    padding: 0;
    li {
        margin-right: 0.5rem;
        a span {
            width: 48px;
            height: 48px;
        }
    }
    li:first-child {
        a {
            position: relative;
            display: block;
            width: 48px;
            height: 48px;
        }
        a span {
            position: absolute;
        }
    }
    li:last-child {
        margin-right: 0;
    }
    li:hover {
        transform: scale(120%);
        transition: all 0.2s ease;
    }
}

.bottom-column {
    display: flex;
    margin: 1rem auto;
    & > * {
        margin: 0 0.5rem;
    }
}

/* Phone Style */
@media screen and (max-width: 640px) {
    .top-column {
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
    }
    .summary {
        word-break: keep-all;
        overflow-wrap: break-word;
    }
    .sns-list {
        display: block;
        margin: auto;
    }
    .bottom-column {
        display: block;
        & > * {
            margin: 0.5rem 0;
        }
    }
}
</style>
