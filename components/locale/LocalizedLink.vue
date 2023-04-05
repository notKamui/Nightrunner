<script setup lang="ts">
import type { RawLocation, RouteLocation } from '@intlify/vue-router-bridge'

defineProps<{
  to: string | RawLocation | RouteLocation
}>()

const { locale } = useCustomI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(to, locale)">
    <slot />
  </NuxtLink>
</template>
