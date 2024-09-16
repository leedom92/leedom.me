<template>
  <button
    title="Scroll to top"
    aria-label="Scroll to top"
    class="z-100 fixed bottom-3 right-3 h-10 w-10 rounded-full transition duration-300 hover:bg-[#8888] hover:opacity-100 dark:text-white dark:hover:bg-[#8883] print:hidden"
    :class="scroll > 200 ? 'opacity-30' : 'pointer-events-none opacity-0'"
    @click="toTop()"
  >
    <svg
      class="m-auto w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z"
      />
    </svg>
  </button>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>
