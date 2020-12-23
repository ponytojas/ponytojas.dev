<template>
  <div
    class="min-w-full pt-14 md:pt-0 min-h-screen flex flex-col justify-items-center content-center items-center align-middle"
  >
    <div
      class="flex flex-col w-11/12 md:w-3/12 h-auto p-6 py-6 md:h-80 rounded-lg card my-10 md:my-auto md:justify-evenly"
    >
      <div class="flex flex-row mb-6 self-center">
        <p class="text-3xl text">Comprueba tu décimo</p>
      </div>
      <div class="flex flex-row self-center mb-6">
        <input
          class="border p-2 rounded-lg"
          v-model="number"
          placeholder="Número del décimo"
        />
      </div>
      <div class="flex flex-row self-center mb-6">
        <NuxtLink :to="{ name: 'CheckLottery', params: { number: number } }">
          <button
            @keyup.enter="
              this.router.push({
                name: 'CheckLottery',
                params: { number: number },
              })
            "
            class="text-white hover:text-white hover:bg-red-700 bg-red-500 font-bold py-2 px-4 rounded-lg button"
          >
            ¡Comprueba tu suerte!
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lottery',
  layout: 'christmas',
  data() {
    return {
      number: '',
    }
  },
}
</script>

<style>
.card {
  background-color: #fafafa;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
