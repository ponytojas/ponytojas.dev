<template>
  <div class="flex  justify-center">
    <div class="w-11/12">
      <div>
        <div class="flex flex-row w-auto flex-wrap justify-center h-auto my-10">
          <div v-for="color in colors" :key="color.color">
            <Colors
              :color="color.color"
              :name="color.name"
              class="m-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from '../static/colors.json'
export default {
  transition: 'fade',
  data() {
    return {
      colors: [],
    }
  },
  methods: {},

  beforeMount() {
    this.colors = colors
  },
}
</script>

<style></style>
