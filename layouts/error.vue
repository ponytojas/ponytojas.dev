<template>
  <div class="w-full h-full">
    <p class="text-3xl text-center">
      These aren't the droids you're looking for...
    </p>
    <nuxt-link to="/">
      <p class="text-2xl text-center mb-10 goback-gradient-text cursor-pointer">
        Go back to you ship safety
      </p>
    </nuxt-link>
    <img
      class="mx-auto my-auto w-3/12 h-3/12 floating"
      src="../assets/404.png"
    />
  </div>
</template>

<style scoped>
.floating {
  animation-name: floating;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.goback-gradient-text {
  text-decoration: line-through;
  background: linear-gradient(to right, #90d8cc, #4fc3f7, #1b97ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>