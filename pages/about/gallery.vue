<script setup lang="ts">
const { data } = await useFetch("/api/getGalleryImages");

enum Direction {
    BACKWARD = -1,
    FORWARD = 1,
}

const showViewer = ref<boolean>(false);
const imagePathViewer = ref<string>("");
const captionViewer = ref<string>("");
const indexViewer = ref<number>(0);

const openViewer = (entry: GalleryEntry) => {
    showViewer.value = true;
    imagePathViewer.value = entry.imagePath;
    captionViewer.value = entry.caption;
    indexViewer.value = data.value?.indexOf(entry) as number;
    document.getElementsByTagName("body")[0].classList.add("no_scroll");
};

const closeViewer = () => {
    showViewer.value = false;
    document.getElementsByTagName("body")[0].classList.remove("no_scroll");
};

const changeImage = (direction: number) => {
    const lastIndex = (data.value?.length as number) - 1;
    const delta = direction;
    let newIndex = indexViewer.value + delta;
    if (newIndex < 0) {
        newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
        newIndex = 0;
    }
    const nextEntry = data.value?.at(newIndex);
    indexViewer.value = data.value?.indexOf(
        nextEntry as GalleryEntry
    ) as number;
    imagePathViewer.value = nextEntry?.imagePath as string;
    captionViewer.value = nextEntry?.caption as string;
};

useSeoMeta(
    generateSeoMeta(
        "写真集",
        "岐阜高専宇宙工学研究会の出場大会などでの写真です。",
        "/sera-logo-text.svg"
    )
);
</script>

<template>
    <PageTop text="写真集" image-path="/images/page-top.jpg" />
    <PankuzuList current-page-name="写真集" />
    <main>
        <p>大会や日々の活動の様子をアップロードしていきます</p>
        <div class="image-list">
            <div
                v-for="entry in data"
                class="image-thumbnail"
                @click="openViewer(entry)"
                :key="entry.id"
            >
                <figure>
                    <img :src="entry.imagePath" :alt="entry.caption" />
                    <figcaption>{{ entry.caption }}</figcaption>
                </figure>
            </div>
        </div>
        <Transition name="image-viewer-transition">
            <div class="image-viewer" v-if="showViewer">
                <button @click="closeViewer" class="close">
                    <Icon name="ic:baseline-close" />
                </button>
                <img :src="imagePathViewer" :alt="captionViewer" />
                <p>{{ captionViewer }}</p>
                <button @click="changeImage(Direction.FORWARD)" class="next">
                    <Icon name="material-symbols:arrow-forward-rounded" />
                </button>
                <button @click="changeImage(Direction.BACKWARD)" class="back">
                    <Icon name="material-symbols:arrow-back-rounded" />
                </button>
            </div>
        </Transition>
    </main>
</template>

<style scoped>
main {
    justify-self: center;
}

.image-list {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}

.image-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20rem;
    height: 15rem;
    background-color: var(--starlight1);
    border-radius: 1rem;
    transition: scale 0.2s ease-in-out;
}

.image-thumbnail:hover {
    background-color: var(--starlight5);
    cursor: pointer;
    scale: 105%;
    transition: scale 0.2s ease-in-out;
}

.image-thumbnail > figure > img {
    width: 15rem;
    height: 10rem;
    object-fit: cover;
}

.image-thumbnail > figure > figcaption {
    width: 15rem;
    text-align: center;
}

.image-viewer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: grid;
    grid-template-columns: 5rem auto 5rem;
    grid-template-rows: 5rem auto 5rem;
    grid-template-areas:
        "top top close"
        "left image right"
        "caption caption caption";
    width: 100vw;
    height: 100vh;
    background-color: rgba(70, 70, 70, 0.9);
}

.image-viewer img {
    width: max-content;
    height: auto;
    max-height: 80vh;
    grid-area: image;
    justify-self: center;
    align-self: center;
}

.image-viewer p {
    color: var(--sunlight);
    font-size: 24pt;
    grid-area: caption;
    justify-self: center;
    align-self: flex-end;
}

.image-viewer .close {
    grid-area: close;
    width: 3rem;
    height: 3rem;
    place-self: center;
    & > span {
        display: flex;
        width: 2rem;
        height: 2rem;
        place-content: center;
    }
}

.image-viewer .next {
    grid-area: right;
    width: 3rem;
    height: 3rem;
    place-self: center;
    place-content: center;
    & > span {
        width: 2rem;
        height: 2rem;
    }
}

.image-viewer .back {
    grid-area: left;
    width: 3rem;
    height: 3rem;
    place-self: center;
    & > span {
        display: flex;
        width: 2rem;
        height: 2rem;
        place-content: center;
    }
}

.image-viewer-transition-enter-active,
.image-viewer-transition-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.image-viewer-transition-enter-from,
.image-viewer-transition-leave-to {
    opacity: 0;
}
</style>

<style>
.no_scroll {
    height: 100%;
    overflow-y: hidden;
}
</style>
