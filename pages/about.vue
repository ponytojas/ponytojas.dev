<template>
  <div class="container flex flex-col flex-wrap pb-10">
    <p class="text-6xl mb-10 font-normal text-red-400">About me</p>
    <div
      class="h-auto w-full md:w-10/12 lg:w-8/12 bg-transparent mb-10 md:bg-white shadow-none md:shadow rounded-none md:rounded-xl p-6 md:p-10"
    >
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mb-4"
      >
        🤔 Who I am?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        Spanish Information Systems Engineer halfway between Madrid and
        Valencia.
        <br />
        Also, I'm a computer and consumer electronics enthusiast.

        <br /><br />
        Preparing for my master's degree in Software Systems Engineering and
        Technology, while I move from home and trying to learn something new
        everyday.
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🧰 What are your favorite technologies?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        I prefer Front to Back, but I've done both. Aslo, I consider myself as a
        good professional and connoisseur of the elearning world in specific edX
        <br />
        <br />
        I've to choose which languages and technologies I prefer would be:
      </p>

      <ul
        class="ml-10 mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light list-disc"
      >
        <li>
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Vue.js</a
          >
          as web front framework
        </li>
        <ul
          class="ml-10 mb-4 mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light list-disc"
        >
          <li class="mb-2">
            I'm really familiar with
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="text-blue-400 underline"
              >NuxtJS</a
            >
            for SSR and Static Sites
          </li>
          <li class="mb-2">
            Also, I hve done several personal projects with
            <a
              href="https://gridsome.org/"
              target="_blank"
              class="text-blue-400 underline"
              >Gridsome</a
            >
            for Static Sites
          </li>
          <li class="mb-2">
            Last but not least, I've done some projects with
            <a
              href="https://cli.vuejs.org/core-plugins/pwa.html"
              target="_blank"
              class="text-blue-400 underline"
              >Vue PWA</a
            >
          </li>
        </ul>
        <li class="mb-2">
          <a
            href="https://nodejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Node.js</a
          >
          for quick backend prototyping
        </li>
        <li class="mb-2">
          <a
            href="https://www.python.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Python</a
          >
          for the everyday scripting
        </li>
        <li class="mb-2">
          I've been working with
          <a
            href="https://www.edx.org/"
            target="_blank"
            class="text-blue-400 underline"
            >edX</a
          >
          for two years, doing maintenance and development
        </li>
        <li class="mb-3">
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            class="text-blue-400 underline"
            >PostgreSQL</a
          >
          always on my team
        </li>
      </ul>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        In addition to the above, I also work with Java, Kotlin, Swift, PHP,
        C++, Matlab, MySQL, MongoDB....
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔬 Any technology interests to learn about?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        I'm looking to start with mobile development with SwiftUI and Jetpack
        Compose.
        <br />
        Also, I intend to do things with Erlang or Elixir in the near future.
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔮 Any upcoming projects?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        Soon I will start helping in a research line on technology applied to
        medicine, helping in the technical part of the data analysis by two
        biologists.
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