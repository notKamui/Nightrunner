<script lang="ts" setup>
const { t } = useCustomI18n()
</script>

<template>
  <h1 class="title">
    {{ t('main.title') }}
  </h1>
  <span class="flex-center flex-row gap-5">
    <LocalizedLink to="/about" class="btn">
      {{ t('global.about') }}
    </LocalizedLink>
    <LocalizedLink to="/sample" class="btn">
      {{ t('global.sample') }}
    </LocalizedLink>
  </span>
</template>
