<template>
  <div class="galery-container">
    <div v-for="(image, index) of data['images']" v-bind:key="image.id" :class="[getClass(index), 'galery__image']">
      <img :src="image['image']['sizes']['large']" :alt="image['image']['alt']" class="images_parallax">
    </div>
  </div>
</template>

<script>
  import simpleParallax from 'simple-parallax-js';

  export default {
    name: 'Galery',
    props: ['data_bloc'],
    data() {
      return {
        data: this.data_bloc,
      }
    },
    mounted() {
      this.setParallax()
    },
    methods: {
      getClass(index) {
        return index % 2 ? "galery__image--right" : "galery__image--left"
      },
      setParallax() {
        const images = document.querySelectorAll('.images_parallax');
        let simple = new simpleParallax(images, {
          overflow: true,
          scale: 1.5
        });
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .galery-container {
    margin: 0;
    width: 80%;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
  }

  .galery__image {
    width: 100%;
    width: 45%;
    height: 600px;
    overflow: hidden;
  }

  .galery__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .galery__image--right {
    margin-left: 55%;
  }

  @media only screen and (max-width: 700px) {
    .galery__image {
      width: 45%;
      height: 300px;
    }
  }

  @media only screen and (max-width: 400px) {
    .galery__image {
      width: 100%;
      margin: 10px 0;
    }
  }

</style>
