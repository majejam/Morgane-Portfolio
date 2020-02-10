<template>
  <div class="text-image-container">
      <div class="text" v-html="data_bloc['title']">
      </div>
      <div class="image_container" v-if="data_bloc['image']['sizes']['medium_large']">
          <img class="image" v-bind:src="data_bloc['image']['sizes']['medium_large']"/>
      </div>
  </div>

</template>

<script>

export default {
  name: 'TextImage',
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
.text-image-container {
    margin: 50px 10%;
    display: flex;
    flex-flow: row-reverse;
}

.text{
    width: 50%;
    text-align: left;
    padding-left: 10%;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
}

.image_container {
    width: 50%;
    height: 75vh;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* tablet */
  @media only screen and (max-width: 1200px) {
    .image_container {
      height: 50vh;
    }
  }

  /* mobile */
  @media only screen and (max-width: 800px) {
    .text-image-container {
      flex-flow: column-reverse;
    }

    .text {
      width: 100%;
      padding-left: 0%;
    }

    .image_container {
      width: 100%;
    }
  }
</style>
