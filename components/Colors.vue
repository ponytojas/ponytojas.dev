<template>
  <div class="border w-80 color-card justify-items-center bg-white" @click="copy()">
    <div
      class="w-11/12 h-4/6 mx-auto mt-4"
      :style="{ 'background-color': color }"
    ></div>
    <div class="flex flex-col">
      <p class="mx-4 mt-4 text-2xl font-semibold">{{ this.name }}</p>
      <p class="mx-4 mt-6 text-xl font-light">{{ this.color }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Color',
  props: {
    color: String,
    name: String,
  },
  data() {
    return {}
  },
  methods: {
    copy() {
      navigator.clipboard
        .writeText(this.color)
        .then(() => {
          try {
            this.$toast.show('Copied color code to clipboard')
          } catch (e) {
            this.$toast.error('There was an error copying to clipboard')
          }
        })
        .catch((err) => {
          console.log('Something went wrong', err)
        })
    },
  },
}
</script>

<style>
.color-card {
  height: 450px;
}

.color-card {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.color-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
