<script lang="ts" setup>
definePageMeta({
  layout: 'centercard',
})

useHead({
  title: 'About • Nightrunner',
})

const { t } = useI18n()
</script>

<template>
  <div class="text-center mb-5">
    <h1 class="title">
      {{ t('about.title') }}
    </h1>
  </div>

  <div>
    <p>
      {{ t('about.summary') }}
    </p>

    <p class="mt-5">
      {{ t('about.features') }}
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
      {{ t('about.config') }}
    </p>
  </div>
</template>
