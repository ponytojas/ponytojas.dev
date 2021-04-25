<template>
  <div
    class="border rounded-lg bg-white card shadow flex flex-col"
    style="width: 350px; height: 350px"
  >
    <img :src="require(`~/assets/${image}`)" class="rounded-t-lg" />
    <p class="mt-4 text-4xl text-gray-900">{{ name }}</p>

    <button
      class="w-6/12 mt-8 rounded mx-auto text-white px-4 py-2"
      :class="[lightColor, darkColor]"
    >
      <nuxt-link :to="link">Check more</nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    image: String,
    lightColor: String,
    darkColor: String
  },  
}
</script>

<style>
.card {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>