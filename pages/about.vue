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
        I prefer Front to Back, but I've done both.
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
        <li>
          <a
            href="https://nodejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Node.js</a
          >
          for quick backend prototyping
        </li>
        <li>
          <a
            href="https://www.python.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Python</a
          >
          for the everyday scripting
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
        C++, Matlab....
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
      <br>
        <button
      class="w-auto mt-8 rounded mx-auto text-white px-6 py-3 transition-all duration-200 bg-red-400 hover:bg-red-600 shadow hover:shadow-xl"
    >
      <a class="font-semibold" href="mailto:daniel.villalobosdel@gmail.com">Mail to me!</a>
    </button>
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