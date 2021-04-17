<template>
  <div class="container flex flex-row flex-wrap mt-4">
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
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'fagolambda',
          link: '/fagolambda',
          image: 'fagolambda.png',
          color: 'green',
        },
        {
          id: 1,
          name: 'enClase',
          link: '/enclase',
          image: 'enclase.png',
          lightColor: '#4fc3f7',
          darkColor: '#2196F3',
        },
      ],
    }
  },
}
</script>