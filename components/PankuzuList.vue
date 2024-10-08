<script setup lang="ts">
const route = useRoute();
const router = useRouter();

console.log(route.path);
console.log(router.getRoutes());
console.log(router.resolve({ name: "news" }));

const getLinkArray = (): Array<string> => {
    let links = route.fullPath.split("/");
    return links.map<string>((value) => {
        return "/" + value;
    });
};

const linkArray = getLinkArray();
</script>

<template>
    <div>Pankuzu List</div>
    <nav>
        <ul>
            <li v-for="link in linkArray">
                <NuxtLink
                    :to="link"
                    v-if="linkArray.indexOf(link) !== linkArray.length - 1"
                >
                    {{ link }}
                </NuxtLink>
                <p v-else>{{ link }}</p>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
}
</style>
