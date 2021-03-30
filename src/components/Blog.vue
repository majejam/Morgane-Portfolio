<template>
  <div class="blog">
    <div id="luxy">
      <HeaderBig :data="markers" v-if="markers['print_type'] == 'Grand'" />
      <HeaderSimple :data="markers" v-if="markers['print_type'] == 'Simple'" />
      <Templating :data="markers"></Templating>
    </div>
  </div>
</template>

<script>
  import Templating from '@/components/partials/Template'
  import HeaderBig from '@/components/partials/HeaderBig'
  import HeaderSimple from '@/components/partials/HeaderSimple'

  export default {
    name: 'blog',
    data() {
      return {
        markers: false,
      }
    },
    mounted() {
      let scroll
      let url = 'https://www.morganelapisardi.fr/backoffice/index.php/wp-json/markers/v1/post/' + this.$route.params.Pid
      fetch(url)
        .then((r) => r.json())
        .then((res) => {
          if (res === null) {
            console.log('res : null');
            next({
              name: '404'
            });
            next()
          }
          this.markers = res
          
          document.body.style.position = 'relative'
        })
        .catch(error => {
          this.$router.push({
            name: '404'
          })
        });


    },
    components: {
      'Templating': Templating,
      'HeaderBig': HeaderBig,
      'HeaderSimple': HeaderSimple,
    }
  }

</script>
<style scoped>
  #luxy {
    padding-bottom: 30px;
    min-height: 100vh;
  }

  #luxy::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: #8A1538;
    opacity: 1;
    transition: 2s ease-out opacity;
    transition-delay: 1s; 
  }

  .moveInUp-enter-active #luxy::after {
    opacity: 0;
  }

</style>
