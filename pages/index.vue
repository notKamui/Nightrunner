<script lang="ts" setup>
const { toggle } = useDark()
const { locale: currentLocale, t } = useI18n()
</script>

<template>
  <div class="flex-center h-screen gap-10">
    <div class="absolute top-10 right-10 flex flex-row gap-2">
      <select v-model="currentLocale" class="px-2 py-1 rounded-lg">
        <option v-for="locale of availableLocales" :key="locale" :value="locale">
          {{ locale }}
        </option>
      </select>
      <button class="icon-btn text-8" @click="toggle()">
        <div i="tabler-sun dark:tabler-moon" />
      </button>
    </div>
    <p class="absolute top-10 left-10 text-8 font-text">
      {{ $colorMode.value === 'dark' ? $t('theme.dark') : $t('theme.light') }}
    </p>
    <h1 class="title">
      {{ t('main.title') }}
    </h1>
    <nuxt-link to="/about" class="btn">
      {{ t('global.about') }}
    </nuxt-link>
  </div>
</template>
