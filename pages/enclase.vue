<template>
  <div class="container flex flex-col flex-wrap pb-10">
    <p class="text-6xl mb-10 font-normal text-blue-400">enClase</p>
    <div
      class="h-auto w-full md:w-10/12 lg:w-8/12 bg-transparent mb-10 md:bg-white shadow-none md:shadow rounded-none md:rounded-xl p-6 md:p-10"
    >
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mb-4"
      >
        🤔 What is enClase?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        During 2020, the Polytechnic School of Alcalá decided to develop an
        application that could control capacity and face-to-face attendance to
        class during the Covid-19 pandemic
        <br />
        As the system progressed, it was mutating to adapt to a system that
        manages the attendance of students to any subject
        <br />
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔨 How does enClase works?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        enClase is a Fullstack PWA based on:
      </p>
      <ul
        class="ml-10 mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light list-disc"
      >
        <li class="mb-3">
          <a
            href="https://nodejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Node.js</a
          >
          as backend
        </li>
        <li class="mb-3">
          Built with
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Vue.js</a
          >
        </li>
        <li class="mb-3">
          With
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            class="text-blue-400 underline"
            >PostgreSQL</a
          >
          as DataBase
        </li>
        <li class="mb-3">
          Running on
          <a
            href="https://www.docker.com/"
            target="_blank"
            class="text-blue-400 underline"
            >Docker</a
          >
          and Docker Compose
        </li>
      </ul>

      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔬 Some tech related things about it?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        It supports i18n thanks to
        <a
          href="https://kazupon.github.io/vue-i18n/"
          target="_blank"
          class="text-blue-400 underline"
          >Vue-i18n</a
        >. In order to work as a PWA, HTTPS is mandatory, and was a really interesting
        thing learn how to redirect traffic to it through different docker
        containers with nginx and only having the 80/443 port opened.
        <br />
        The school's cybersecurity group assisted in improving protection and attacks
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔮 What could be seen in the future?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        We're integreting it with the University SSO to make it even more secure.
        <br />
        And, who knows what else? Maybe a native app with biometric, NFC and QR scanner? Time will tell
      </p>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
}
</script>

<style scoped>
.card {
  background-color: #fff;
}
</style>