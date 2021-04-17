<template>
  <div>
    <nav
      class="fixed md:relative bg-white md:bg-transparent shadow-md md:shadow-none z-50 w-full p-6"
    >
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link to="/">
            <span class="ml-10 text-xl">
              {{ this.$route.path }}: $ > cd ~/<span class="blinking"
                >_</span
              ></span
            >
          </nuxt-link>
        </div>
        <div class="md:hidden">
          <button @click="showSideMenu = !showSideMenu">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8 fill-current text-black"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="hidden md:block">
          <ul class="flex space-x-8 text-xl">
            <li>
              <a class="gradient-text-color-1" href="#">Projects</a>
            </li>
            <li>
              <a class="gradient-text-color-2" href="#">About me</a>
            </li>
            <li>
              <a class="gradient-text-color-3" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div
          class="z-10 fixed inset-0 transition-opacity"
          :class="{ hidden: !showSideMenu }"
        >
          <div tabindex="0" class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0"
          :class="{ hidden: !showSideMenu }"
        >
          <div class="close">
            <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="showSideMenu = !showSideMenu"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <span class="flex w-full items-center p-4 border-b">
            <span class="text-gray-800 text-2xl text-center">
              Daniel Villalobos</span
            ></span
          >
          <ul class="divide-y font-sans">
            <li>
              <nuxt-link to="/" class="my-4 inline-block"
                >{{ this.$route.path }}: $ > cd ~/<span class="blinking"
                  >_</span
                ></nuxt-link
              >
            </li>
            <li>
              <a href="#" class="my-4 inline-block gradient-text-color-1"
                >Projects</a
              >
            </li>
            <li>
              <a href="#" class="my-4 inline-block gradient-text-color-2"
                >About me</a
              >
            </li>
            <li>
              <a href="#" class="my-4 inline-block gradient-text-color-3"
                >Contact</a
              >
            </li>
          </ul>
        </aside>
      </div>
    </nav>
    <Nuxt class="pt-24 md:mt-0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideMenu: false,
    }
  },
}
</script>

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
  background-color: #f9f9f9;
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

.gradient-text-color-1 {
  background: linear-gradient(to right, #ffafa2, #ff6d70, #c31331);
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 1);
  transition: color 0.2s ease-in-out;
}

.gradient-text-color-2 {
  background: linear-gradient(to right, #b2ddfd, #1b97ad, #90d8cc);
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 1);
  transition: color 0.2s ease-in-out;
}

.gradient-text-color-3 {
  background: linear-gradient(to right, #f6d58a, #ffdb30, #a5664b, #502e2d);
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 1);
  transition: color 0.2s ease-in-out;
}

.gradient-text-color-1:hover {
  color: rgba(0, 0, 0, 0);
}

.gradient-text-color-2:hover {
  color: rgba(0, 0, 0, 0);
}

.gradient-text-color-3:hover {
  color: rgba(0, 0, 0, 0);
}

@keyframes rainbow {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
</style>
