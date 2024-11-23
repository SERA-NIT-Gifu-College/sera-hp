<script setup lang="ts">
import {
    DropDownAlignment,
    type DropDownProperty,
} from "~/utils/types/dropDown";

const property = defineProps<DropDownProperty>();

const isOpen = ref<boolean>(false);

const listAlignment = ref<typeof DropDownAlignment | number>(
    property.alignment as DropDownAlignment | DropDownAlignment.Left
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
        <div class="dropdown-item-list-wrapper">
            <div class="dropdown-item-list" :class="{ 'show-list': isOpen }">
                <ul>
                    <li
                        v-for="entry in property.entries"
                        :key="property.entries.indexOf(entry)"
                    >
                        <NuxtLink :to="entry.link">{{ entry.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
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
    display: inline-flex;
    flex-direction: column;
}

.dropdown-label {
    background: none;
    width: 100%;
    padding: 1rem 2rem;
    border-top: currentColor solid 3px;
    border-inline: transparent solid 3px;
    border-bottom: transparent solid 3px;
    font-size: 1em;
    font-weight: bold;
    color: var(--neptune1);
    transition: 0.2s linear;
}

.dropdown-label:hover {
    cursor: pointer;
    color: var(--andromeda);
    border: currentColor solid 3px;
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

.dropdown-item-list-wrapper {
    height: 0;
}

.dropdown-item-list {
    display: block;
    background: var(--neptune1);
    color: var(--starlight);
    font-weight: bold;
    position: relative;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease;
    width: fit-content;
    min-width: 9rem;
    text-wrap: nowrap;
    line-height: 2.125rem;
    & ul {
        list-style: none;
        padding: 0 0.25rem;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-inline: 0.5rem;
    }
    & ul li {
        margin: 0.5rem 0;
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

.show-list {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease;
}
</style>
