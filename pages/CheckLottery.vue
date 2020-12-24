<template>
  <div
    class="min-w-full pt-14 md:pt-0 min-h-screen flex flex-col justify-items-center content-center items-center align-middle"
  >
    <div
      class="card my-4 md:my-20 md:mb-30 p-6 w-11/12 md:w-3/6 h-auto rounded-md"
    >
      <p class="text-3xl mb-4" v-if="this.mensaje">
        ¡Enhorabuena! Tu número ha sido premiado
      </p>
            <p class="text-3xl mb-4" v-if="!this.mensaje">
        Lo sentimos, este número no ha sido premiado
      </p>
      <p v-if="this.mensaje" class="prose lg:prose-xl" v-html="mensaje"></p>
      <p v-if="!this.mensaje">Revisa tu número y sino, no intentes usar el número de otra persona</p>
      <img v-if="this.$route.params.number == '72897'" class="w-full h-full" src='~assets/familia.jpg'/>
      <img v-if="this.$route.params.number == '21518'" class="w-auto mx-auto h-96" src='~/assets/sirena.png' />
    </div>
  </div>
</template>

<script>
import json from '../static/mensajes.json'

export default {
  layout: 'christmas',
  data() {
    return {
      mensaje: json[this.$route.params.number],
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
