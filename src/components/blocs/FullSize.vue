<template>
  <div class="fullSize-container">
      <div ref="image_container" class="image_container" v-if="data_bloc['image']['sizes']['medium_large']">
          <img class="image" v-bind:src="data_bloc['image']['sizes']['medium_large']" alt="fullsize"/>
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
  },
  mounted() {
    this.data_bloc['crop_image'] ? this.$refs.image_container.classList.remove('no-crop') : this.$refs.image_container.classList.add('no-crop')
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

.no-crop {
  height: auto;
}

</style>
