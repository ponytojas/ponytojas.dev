<template>
  <div class="container">
    <div class="mt-20 md:mt-0">
      <div class="px-2 md:px-0">
        <span class="text-gray-600 font-thin title"
          >Hi there<span style="color: #FF6D70">!</span> I'm <span class="font-normal">Daniel Villalobos</span></span
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
  </div>
</template>

<script>
export default {}
</script>

<style>
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
  background: linear-gradient(
    to right,
    #4fc3f7,
    #6ed477,
    #6ED477
  );
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

.links {
  padding-top: 15px;
}
</style>
