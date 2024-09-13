<script setup lang="ts">
import type { DropDownProperty } from "#imports";

const property = defineProps<DropDownProperty>();

const isOpen = ref<boolean>(false);
const showInMobile = ref<boolean>(property.showInMobile);
const { viewPortType } = useWindowDimensions();

const listAlignment = ref<typeof DropDownAlignment | number>(
    property.alignment | DropDownAlignment.Left
);

const alignmentClass = computed(() => ({
    "left-aligned-list": listAlignment.value === DropDownAlignment.Left,
    "right-aligned-list": listAlignment.value === DropDownAlignment.Right,
}));

const handleMouseHoverEvent = (event: Event) => {
    const eventType = event.type;
    if (property.mode !== DropDownMode.onMouseHover) return;
    if (eventType === "mouseover") {
        isOpen.value = true;
    } else if (eventType === "mouseleave") {
        isOpen.value = false;
    }
    return;
};

const handleClickEvent = () => {
    if (property.mode !== DropDownMode.onClick) return;
    isOpen.value = !isOpen.value;
    return;
};

const handleFocusOutEvent = () => {
    if (property.mode !== DropDownMode.onClick) return;
    isOpen.value = false;
    return;
};
</script>

<template>
    <div
        class="dropdown-menu"
        :class="alignmentClass"
        v-on="{
            mouseover: handleMouseHoverEvent,
            mouseleave: handleMouseHoverEvent,
        }"
        v-if="
            (showInMobile === true && viewPortType !== ViewPortType.DESKTOP) ||
            (showInMobile === false && viewPortType !== ViewPortType.MOBILE)
        "
    >
        <button
            class="dropdown-label"
            v-on="{
                click: handleClickEvent,
                focusout: handleFocusOutEvent,
            }"
        >
            {{ property.label }}
        </button>
        <Transition name="dropdown-fade">
            <div class="dropdown-item-list" v-if="isOpen">
                <ul>
                    <li
                        v-for="entry in property.entries"
                        :key="property.entries.indexOf(entry)"
                    >
                        <NuxtLink :to="entry.link">{{ entry.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
    transition: opacity 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
    opacity: 0;
}

.dropdown-menu {
    display: inline-block;
    width: fit-content;
    position: relative;
}

.dropdown-label {
    background: none;
    width: fit-content;
    padding: 1rem 2rem;
    border: transparent solid 3px;
    font-size: 1em;
    font-weight: bold;
    color: var(--neptune1);
}

.dropdown-label:hover {
    cursor: pointer;
    color: var(--andromeda);
    border-top: currentColor solid 3px;
    transition: 0.2s linear;
}

.left-aligned-list {
    text-align: left;
    & .dropdown-item-list {
        left: 0;
    }
}

.right-aligned-list {
    text-align: right;
    & .dropdown-item-list {
        right: 0;
        text-align: left;
    }
}

.dropdown-item-list {
    display: block;
    background: var(--neptune1);
    color: var(--starlight);
    font-weight: bold;
    position: absolute;
    top: auto;
    min-width: 100%;
    width: fit-content;
    text-wrap: nowrap;
    & ul {
        list-style: none;
        padding: 0 0.25rem;
    }
    & ul li {
        margin: 0.5rem 0;
        transition: 0.2s linear;
    }
    & ul li:first-child {
        margin-top: 0;
    }
    & ul li:last-child {
        margin-bottom: 0;
    }
    & ul li a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: currentColor;
        padding: 0 0.5rem;
    }
    & ul li:hover a {
        text-decoration: currentColor underline dashed;
        text-decoration-thickness: 2px;
    }
}
</style>
