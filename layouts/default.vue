<template>
  <div>
    <div class="flex flex-row mt-6">
      <nuxt-link to="/">
        <span class="ml-10 text-xl">
          {{ this.$route.path }}: $ > cd ~/<span class="blinking">_</span></span
        >
      </nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<style>
@import '~/assets/fonts/Inter Web/inter.css';

html {
  font-family: 'Inter';
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fafafa;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.blinking {
  animation: blinkingText 1.2s infinite;
}
@keyframes blinkingText {
  0% {
    color: #e20d36;
  }
  49% {
    color: #e20d36;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #e20d36;
  }
}
</style>
