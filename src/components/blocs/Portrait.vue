<template>
  <div class="Portrait-container">
      <div ref="image_container" class="image_container" v-if="data_bloc['image']['sizes']['medium_large']">
          <img class="image" v-bind:src="data_bloc['image']['sizes']['medium_large']" alt="Portrait"/>
      </div>
  </div>

</template>

<script>

export default {
  name: 'Portrait',
  props: ['data_bloc'], 
  data () {
    return {
      hello: this.data_bloc,
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Portrait-container {
    margin: 0 10%;
}

.image_container {
    width: 100%;
    height: 75vh;
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}


</style>
