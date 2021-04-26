<template>
  <div>
    <p class="text-6xl mb-10 font-normal text-yellow-500 text-center">Projects</p>
    <div class="container flex flex-row flex-wrap mt-4 pb-10">
      <div class="m-4" v-for="project in this.projects" :key="project.id">
        <Project-Card
          :name="project.name"
          :link="project.link"
          :image="project.image"
          :lightColor="project.lightColor"
          :darkColor="project.darkColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'ColorSchema',
          link: '/colorschema',
          image: 'colorschema.png',
          lightColor: 'bg-red-400',
          darkColor: 'hover:bg-red-600',
        },
        {
          id: 2,
          name: 'fagolambda',
          link: '/fagolambda',
          image: 'fagolambda.png',
          lightColor: 'bg-green-400',
          darkColor: 'hover:bg-green-600',
        },
        {
          id: 3,
          name: 'enClase',
          link: '/enclase',
          image: 'enclase.png',
          lightColor: '#4fc3f7',
          lightColor: 'bg-blue-400',
          darkColor: 'hover:bg-blue-600',
        },
      ],
    }
  },
}
</script>