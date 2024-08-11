<script setup lang="ts"></script>

<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/news">
          News
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">
          Projects
        </NuxtLink>
      </li>
      <li>Link</li>
      <li>Contact</li>
      <li>
        <NuxtLink to="/about">
          About SERA
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/">
      <img ref="/sera-logo-no-text.svg">
    </NuxtLink>
    <ul>
      <li>
        <NuxtLink to="/">For non-member</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Info</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-row: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
