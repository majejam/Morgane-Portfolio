<template>
  <div class="card" ref="card">
    <div class="img-container" v-if="data['image']['sizes']['medium_large']">
      <img :src="data['image']['sizes']['medium_large']" />
      <div class="card-title">
        <span ref="span" class="card-title--span">{{ data['info'] }}</span>
      </div>
      <span class="card-type">{{ data['category'] }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['data'],
    data() {
      return {
        page: this.$route.params.home,

      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.$refs.card.style.height = this.$refs.card.offsetWidth + "px";
      })

      setTimeout(() => {
        this.$refs.card.style.height = this.$refs.card.offsetWidth + "px";
      }, 1000);

    },
    methods: {

    },
    activated() {
      this.$refs.card.style.height = this.$refs.card.offsetWidth + "px";
    }
  }

</script>

<style scoped>
  .card {
    width: 20%;
    height: 300px;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    user-select: none;
    position: relative;
    overflow: hidden;
  }


  .card::after {
    content: '';
    background: #8A1538;
    position: absolute;
    margin: 5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: 0.3s cubic-bezier(0.694, 0.0482, 0.335, 1) opacity;
  }


  .card-title {
    position: absolute;
    z-index: 5;
    color: white;
    top: 50%;
    left: 50%;
    width: 80%;
    font-weight: bold;
    font-size: 1.5em;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }

  .card-type {
    position: absolute;
    z-index: 5;
    color: white;
    bottom: 50px;
    left: 50%;
    width: 80%;
    opacity: 0;
    font-size: 1.1em;
    transform: translateX(-50%);
    overflow: hidden;
    text-transform: capitalize;
    transition: 0.3s cubic-bezier(0.694, 0.0482, 0.335, 1) opacity;
  }

  .card-title--span {
    display: block;
    transform: translateY(100%);
    transition: 0.3s cubic-bezier(0.694, 0.0482, 0.335, 1) transform;
  }

  .card:hover img {
    transform: scale(1.01);
  }

  .card:hover .card-type {
    opacity: 1;
  }

  .card:hover::after {
    opacity: 0.8;
  }


  .card:hover .card-title--span {
    transform: translateY(0%);
  }


  .img-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: center;
    transition: 0.3s ease-in-out all;
  }

  @media only screen and (max-width: 1600px) {
    .card {
      width: 25%;
    }
  }

  @media only screen and (max-width: 1400px) {
    .card {
      width: 33.33333334%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .card {
      width: 50%;
    }

    .home-container {
      margin: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }

</style>
