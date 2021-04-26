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
<div class="blobs overflow-hidden opacity-20">
  <div class="blob"></div>
</div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
}
</script>

<style>
.blobs {
	 width: 250px;
	 height: 200px;
	 margin: 0 auto;
	 position: absolute;
	 left: 30%;
	 top: 38%;
	 margin-left: -150px;
	 margin-top: -150px;
	 border-radius: 100%;
	 -webkit-animation: myturn linear 50s infinite;
	 -moz-animation: myturn linear 50s infinite;
}
 .blobs:after {
	 content: '';
	 height: 10px;
	 width: 10px;
	 border-radius: 50%;
	 position: relative;
	 display: block;
}
 .blob:nth-child(1) {
	 top: -10px;
	 left: -10px;
	 width: 250px;
	 height: 260px;
	 background: #FFDB30;
	 border-radius: 100%;
	 -webkit-animation: mytopdown linear 40s infinite;
	 -moz-animation: mytopdown linear 40s infinite;
	 animation: mytopdown linear 40s infinite;
}
 @keyframes mytopdown {
	 0% {
		 top: 0px;
		 transform: rotate(0deg) scale(1);
	}
	 50% {
		 top: 15px;
		 transform: rotate(180deg) scale(1.24);
	}
	 100% {
		 top: 0px;
		 transform: rotate(360deg) scale(1);
	}
}
 @-webkit-keyframes myturn {
	 0% {
		 -webkit-transform: rotate(0deg) skewX(0deg);
	}
	 100% {
		 -webkit-transform: rotate(-360deg) skewX(0deg);
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
