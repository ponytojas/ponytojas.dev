<template>
  <div>
    <nav
      class="sticky md:relative bg-white md:bg-transparent shadow-md md:shadow-none z-50 w-full p-6 overscroll-x-hidden"
    >
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link to="/">
            <span class="ml-0 md:ml-10 text-xl">
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
              <nuxt-link class="gradient-text-color-1" to="projects"
                >Projects</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="gradient-text-color-2" to="about"
                >About me</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="gradient-text-color-3" to="other"
                >Other stuff</nuxt-link
              >
            </li>
          </ul>
        </div>
        <transition name="slide-fade-background">
          <div
            class="z-10 fixed inset-0 transition-opacity"
            v-if="showSideMenu"
          >
            <div
              tabindex="0"
              class="absolute inset-0 bg-black opacity-30"
            ></div>
          </div>
        </transition>
        <transition name="slide-fade">
          <aside
            v-if="showSideMenu"
            class="p-5 open-transition transform top-0 rounded-bl-lg shadow right-0 w-auto bg-white fixed pb-20 pl-12 h-auto overflow-auto ease-in-out transition-all duration-500 z-30 translate-x-0"
          >
            <div class="close mb-10">
              <button
                class="absolute top-0 right-0 mt-7 mr-7"
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
              <span class="text-gray-600 text-3xl text-center">
                Daniel Villalobos</span
              ></span
            >
            <ul class="divide-y text-right">
              <li>
                <nuxt-link
                  to="projects"
                  class="my-4 text-xl inline-block gradient-text-color-1"
                  >Projects</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="about"
                  class="my-4 text-xl inline-block gradient-text-color-2"
                  >About me</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="other"
                  class="my-4 text-xl inline-block gradient-text-color-2"
                  >Other stuff</nuxt-link
                >
              </li>
              <li></li>
            </ul>
          </aside>
        </transition>
      </div>
    </nav>
      <Nuxt class="pt-10 md:mt-0 " />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSideMenu: false,
    }
  },
  watch: {
      $route() {
        this.showSideMenu = false;
      },
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
  background-color: #f6f6f6;
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(200%);
  opacity: 0;
}

.slide-fade-background-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-background-leave-active {
  transition: all 0.3s cubic-bezier(1.5, 0.5, 0.8, 1);
}
.slide-fade-background-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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

.gradient-text-color-4 {
  background: linear-gradient(to right, #e4d0ff, #f1b0f2, #6d287b, #0d2481);
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

.gradient-text-color-4:hover {
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
