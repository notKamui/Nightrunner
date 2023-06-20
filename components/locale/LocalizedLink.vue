<script setup lang="ts">
import type { RawLocation, RouteLocation } from '@intlify/vue-router-bridge'
import type { NuxtLinkProps } from '#app'

export interface LocalizedLinkProps extends Omit<NuxtLinkProps, 'to'> {
  to: string | RawLocation | RouteLocation
}

const props = defineProps<LocalizedLinkProps>()

const { locale } = useCustomI18n()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink v-bind="props" :to="localePath(to, locale)">
    <slot />
  </NuxtLink>
</template>
