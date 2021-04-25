<template>
  <div class="container max-h-screen">
    <div class="mt-20 md:mt-0 z-10 my-auto h-full">
      <div class="px-2 md:px-0">
        <span class="text-gray-600 font-thin title"
          >Hi there<span style="color: #4fc3f7">!</span> I'm
          <span class="font-normal">Daniel Villalobos</span></span
        >
      </div>
      <div class="p-4 md:p-6">
        <p class="text-gray-600 font-light subtitle">
          I'm a
          <span class="line-through title-gradient-text">(bad)</span>
          developer, UI/UX passionate and technology lover
        </p>
      </div>
    </div>

    <div class="shape-blob"></div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
}
</script>

<style>
.shape-blob {
  background: #FFDB30;
  height: 500px;
  width: 500px;
  left: -200px;
  top: -150px;
  transform: rotate(-180deg);
  animation: transform 30s ease-in-out infinite both alternate,
    movement_two 60s ease-in-out infinite both;
  opacity: 0.4;
  position: absolute;
}

@keyframes transform {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}

.container {
  margin: 0 auto;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title-gradient-text {
  text-decoration: line-through;
  background: linear-gradient(to right, #FFAFA2, #FF6D70, #F6546A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title {
  display: block;
  font-size: 100px;
  color: #35495e;
}

.subtitle {
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
  .subtitle {
    font-size: 2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.links {
  padding-top: 15px;
}
</style>
