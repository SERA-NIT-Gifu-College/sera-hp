<script setup lang="ts">
import type { SlideProperty, SlideEntry } from "~/utils/slide.ts";

const property = defineProps<SlideProperty>();

const width = property.width;
const height = property.height;
let timer: NodeJS.Timeout;

const controlIcons = ["ic:baseline-pause", "ic:baseline-play-arrow"];

const currentSlide = ref<number>(0);
const isPaused = ref<boolean>(false);
const controlIconName = ref<string>(controlIcons[0]);

const previewAnimation: Keyframe[] = [
    {
        strokeDashoffset: "calc(4 * 3.141592 * 16px)",
        stroke: "var(--starlight)",
    },
    { strokeDashoffset: "0", stroke: "var(--starlight)" },
];

const previewAnimationTiming: KeyframeEffectOptions = {
    duration: property.duration,
    iterations: 1,
    easing: "linear",
};

const slideAnimationTimingMargin = 100;
const slideAnimation = {
    opacity: [0, 1, 1, 1, 0],
    offset: [0, 0.2, 0.5, 0.8, 1],
    easing: ["ease-in", "ease-out"],
};

const slideAnimationTiming: KeyframeEffectOptions = {
    duration: property.duration + slideAnimationTimingMargin,
    iterations: 1,
    easing: "linear",
};

let previewElement: SVGCircleElement;
let currentPreviewAnimation: Animation;
let slideElement: Element;
let currentSlideAnimation: Animation;

const getCircleElement = (previewIndex: number): SVGCircleElement => {
    const elm = (
        document
            .querySelectorAll(".preview")
            [previewIndex].querySelector("svg") as SVGElement
    ).querySelector("circle") as SVGCircleElement;
    return elm;
};

const getSlideElement = (slideIndex: number): Element => {
    const elm = document.querySelectorAll(".slide")[slideIndex];
    return elm;
};

const cycleSlide = () => {
    currentSlide.value += 1;
    if (currentSlide.value === property.entries.length) {
        currentSlide.value = 0;
    }
    slideElement = getSlideElement(currentSlide.value);
    currentSlideAnimation = slideElement.animate(
        slideAnimation,
        slideAnimationTiming
    );
    previewElement = getCircleElement(currentSlide.value);
    currentPreviewAnimation = previewElement.animate(
        previewAnimation,
        previewAnimationTiming
    );
    return;
};

const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(cycleSlide, property.duration);
    return;
};

const handelClick = (entry: SlideEntry) => {
    currentPreviewAnimation.cancel();
    previewElement.style.stroke = "transparent";
    currentSlide.value = property.entries.indexOf(entry);
    previewElement = getCircleElement(currentSlide.value);
    currentPreviewAnimation = previewElement.animate(
        previewAnimation,
        previewAnimationTiming
    );
    if (isPaused.value) {
        previewElement.style.stroke = "var(--starlight)";
        currentPreviewAnimation.finish();
        return;
    }
    resetTimer();
    return;
};

const toggleAutoSlide = () => {
    if (isPaused.value) {
        previewElement.style.stroke = "transparent";
        timer = setInterval(cycleSlide, property.duration);
        isPaused.value = false;
        previewElement = getCircleElement(currentSlide.value);
        currentPreviewAnimation = previewElement.animate(
            previewAnimation,
            previewAnimationTiming
        );
        slideElement = getSlideElement(currentSlide.value);
        currentSlideAnimation = slideElement.animate(
            slideAnimation,
            slideAnimationTiming
        );
        controlIconName.value = controlIcons[0];
    } else {
        clearInterval(timer);
        isPaused.value = true;
        currentPreviewAnimation.cancel();
        currentSlideAnimation.cancel();
        previewElement.style.stroke = "var(--starlight)";
        controlIconName.value = controlIcons[1];
    }
};

onMounted(() => {
    previewElement = getCircleElement(currentSlide.value);
    slideElement = getSlideElement(currentSlide.value);
    currentPreviewAnimation = previewElement.animate(
        previewAnimation,
        previewAnimationTiming
    );
    currentSlideAnimation = slideElement.animate(
        slideAnimation,
        slideAnimationTiming
    );
    timer = setInterval(cycleSlide, property.duration);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
    <div class="slide-show">
        <div class="slides">
            <ul>
                <li
                    v-for="(entry, index) in property.entries"
                    :key="index"
                    :style="{
                        backgroundImage: `url('${entry.imagePath}')`,
                    }"
                    v-show="currentSlide === index"
                    class="slide"
                >
                    <div class="content">
                        <h1>{{ entry.title }}</h1>
                        <p>{{ entry.content }}</p>
                        <NuxtLink :to="entry.link" v-if="entry.link">
                            詳しくはコチラ
                        </NuxtLink>
                    </div>
                </li>
            </ul>
        </div>
        <div class="controler">
            <div
                v-for="entry in property.entries"
                :key="property.entries.indexOf(entry)"
                class="preview"
                @click="handelClick(entry)"
            >
                <img :src="entry.imagePath" alt="slide image preview" />
                <svg
                    width="72"
                    height="72"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle r="32" cx="36" cy="36" fill="transparent" />
                </svg>
            </div>
            <button @click="toggleAutoSlide">
                <Icon :name="controlIconName" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.slide-show {
    position: relative;
    width: v-bind(width);
    height: v-bind(height);
}

.slides {
    width: 100%;
    height: 100%;
    background-color: rgb(190, 190, 190);
}

ul {
    position: relative;
    list-style: none;
    margin: 0;
}

.slide {
    width: v-bind(width);
    height: v-bind(height);
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(180, 180, 180, 0.5);
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: cover;
    background-blend-mode: exclusion;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-1.5vw);
    display: flex;
    flex-direction: column;
    & > h1 {
        margin: auto 0;
        font-size: 3vw;
        text-align: center;
        color: var(--starlight);
    }
    & > p {
        height: 3rem;
        justify-self: center;
        color: var(--starlight);
        font-size: 14pt;
        font-weight: 600;
    }
    & > a {
        width: fit-content;
        border: var(--starlight) 3px solid;
        background-color: transparent;
        padding: 0.5rem 2rem;
        color: var(--uranus);
        text-decoration: none;
        font-weight: bold;
        font-size: 16pt;
        place-self: center;
        transition: all 0.3s ease;
    }
    & > a:visited {
        color: var(--uranus);
    }
    & > a:hover {
        background-color: var(--starlight);
        color: var(--neptune1);
        transition: all 0.3s ease;
    }
}

.controler {
    display: flex;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    & > button {
        display: flex;
        border: none;
        border-radius: 4rem;
        background-color: rgba(100, 100, 100, 0.8);
        width: 4rem;
        height: 4rem;
    }
    & > button:hover {
        cursor: pointer;
    }
    & > button > span {
        width: 4rem;
        height: 4rem;
        color: var(--starlight);
    }
}

.preview {
    --preview-size: 4rem;
    --stroke-width: 4px;
    --calculated-size: calc(var(--preview-size) + (var(--stroke-width) * 2));
    --image-offset: calc(var(--stroke-width) * 1.5);
    position: relative;
    width: var(--calculated-size);
    height: var(--calculated-size);
    margin-inline: 0.25rem;
    &:hover {
        cursor: pointer;
    }
    & svg {
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        width: var(--calculated-size);
        height: var(--calculated-size);
    }
    & svg circle {
        stroke-width: 4px;
        stroke: transparent;
        stroke-dasharray: 201.06px;
    }
    & img {
        position: absolute;
        top: var(--image-offset);
        left: var(--image-offset);
        z-index: 5;
        width: calc(var(--preview-size) - var(--stroke-width));
        height: calc(var(--preview-size) - var(--stroke-width));
        object-fit: cover;
        border-radius: 4rem;
    }
}
</style>
