<template>
  <div class="galery-container">
      <div v-for="(image, index) of data['images']" v-bind:key="image.id" class="galery">
        <span>{{ getClass(index) }}</span>
        <img :class="getClass(index)" :src="image['image']['sizes']['large']" :alt="image['image']['alt']" >
      </div>
  </div>
</template>

<script>

export default {
  name: 'Galery',
  props: ['data_bloc'], 
  data () {
    return {
      data: this.data_bloc,
    }
  },
  mounted() {
      console.log(this.data_bloc);
      
  }, 
  methods: {
      getClass(index) {
          return index % 2 ? "right" : "left"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.galery-container {
    margin: 0;
}

</style>
