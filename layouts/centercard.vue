<template>
  <div>
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="bg-white dark:bg-dark rounded-xl border-bluegray shadow-md border-1 border-opacity-25% p-10 w-100 sm:w-125 lg:w-150">
        <slot />
      </div>
    </div>
    <div class="absolute bottom-10 right-10">
      <nuxt-link to="/" class="icon-btn text-4xl">
        <div i="tabler-arrow-left" />
      </nuxt-link>
    </div>
  </div>
</template>
