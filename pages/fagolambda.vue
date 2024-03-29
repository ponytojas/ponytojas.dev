<template>
  <div class="container flex flex-col flex-wrap pb-10">
    <p class="text-6xl mb-10 font-normal text-green-400">Fagolambda</p>
    <div
      class="h-auto w-full md:w-10/12 lg:w-8/12 bg-transparent mb-10 md:bg-white shadow-none md:shadow rounded-none md:rounded-xl p-6 md:p-10"
    >
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mb-4"
      >
        🤔 What is Fagolambda?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        Science is not something for a few, knowledge must be shared.
        <br />
        <br />
        This is a space for people to get to see how exciting and curious
        biology is. Here you will find articles on biological curiosities
        explained for everyone, because the basis of science is communication.
        <br />
        <br />
        You can read articles as varied and on different topics as neurobiology
        (how some blind people are able to dodge objects), parasitology (snails
        that allow themselves to be eaten), general physiology (Why does your
        heart beat?)
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔨 How does Fagolambda works?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        Fagolambda uses a JAMStack architecture composed of:
      </p>
      <ul
        class="ml-10 mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light list-disc"
      >
        <li class="mb-3">
          <a
            href="https://www.netlifycms.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Netlify CMS</a
          >
          as CMS
        </li>
        <li class="mb-3">
          Deployed over
          <a
            href="https://www.netlify.com/"
            target="_blank"
            class="text-blue-400 underline"
            >Netlify</a
          >
        </li>
        <li class="mb-3">
          Build with
          <a
            href="https://gridsome.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Gridsome</a
          >
          based on
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="text-blue-400 underline"
            >Vue.js</a
          >
        </li>
      </ul>

      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🚀 And the work flow?
      </p>

      <ul
        class="ml-10 mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light list-decimal"
      >
        <li class="mb-3">A new article is posted on the CMS.</li>
        <li class="mb-3">
          A pull request is made on Github with the new article
        </li>
        <li class="mb-3">Netlify recives a trigger to start the build</li>
        <li class="mb-3">
          It gets the latest code sources and article Markdown files from Github
        </li>
        <li class="mb-3">
          All pages are generated (or get from cache) as static files that are
          serverd
        </li>
      </ul>

      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-semibold mt-10 mb-4"
      >
        🔮 What could be seen in the future?
      </p>
      <p
        class="text-lg md:text-xl lg:text-2xl text-gray-900 text-justify font-light"
      >
        Shortly we will launch a very special twitter account, and probably a
        python bot will be added in order to create automatic tweets.
        <br />
        Also, maybe an RSS or a mobile application.
        <br />
        We will see!
      </p>

      <button
        class="w-auto mt-8 rounded mx-auto text-white px-4 py-2 hover:bg-green-600 bg-green-400"
      >
        <a href="https://fagolambda.com/" target="_blank">Visit Fagolambda!</a>
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