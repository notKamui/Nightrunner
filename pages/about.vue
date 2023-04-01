<script setup lang="ts">
definePageMeta({
  layout: 'centercard',
})

useHead({
  title: 'About • Nightrunner',
})
</script>

<template>
  <div class="text-center mb-5">
    <h1 class="title">
      About Nightrunner
    </h1>
  </div>

  <div>
    <p>
      Nightrunner is a simple, fast, and ready to use starter template for Nuxt 3.
      It features the necessary tools to get you started immediately on your next project.
    </p>

    <p class="mt-5">
      Nightrunner is built on top of the following technologies:
      <ul list>
        <li>Nuxt 3</li>
        <li>Vue 3</li>
        <li>Typescript</li>
        <li>Unocss</li>
        <li>Pinia</li>
        <li>Vue-i18n</li>
        <li>Vue Macros</li>
      </ul>
    </p>

    <p class="mt-5">
      On top of that, it contains little helpers to help with localization, color schemes, and even a sensible configuration for ESLint and VSCode.
    </p>
  </div>
</template>
