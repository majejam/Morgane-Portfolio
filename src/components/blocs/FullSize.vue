<template>
  <div class="fullSize-container">
      <div class="image_container" v-if="data_bloc['image']['sizes']['medium_large']">
          <img class="image" v-bind:src="data_bloc['image']['sizes']['medium_large']"/>
      </div>
  </div>

</template>

<script>

export default {
  name: 'FullSize',
  props: ['data_bloc'], 
  data () {
    return {
      hello: this.data_bloc,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullSize-container {
    margin: 0;
}

.image_container {
    width: 100%;
    height: 75vh;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>
