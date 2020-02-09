<template>
  <div class="blog">
    <div id="luxy">
      <div class="markerse">
        <transition name="big" appear>
          <img class="image" v-bind:src="markers.image['sizes']['large']" v-if="markers.image['sizes']">/>
        </transition>
      </div>
      <transition name="scale" appear>
        <div transition="opacity" class="info">
          <div @click="goHome(page)" class="return_container">
            <span class="return">Return</span>
            <div class="hover_return"></div>
          </div>
          <div class="flow">
            <span class="title">{{markers.info}}</span>
            <p class="para para1">{{markers.paragraphe_1}}</p>
            <p class="para para2">{{markers.paragraphe_2}}</p>
          </div>
        </div>
      </transition>
      <Templating :data="markers"></Templating>
    </div>

  </div>

</template>

<script>
  import LUXY from 'luxy.js'
  import Templating from '@/components/partials/Template'

  export default {
    name: 'blog',
    data() {
      return {
        markers: [],
        page: this.$route.params.home
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

      setTimeout(() => {
        scroll = LUXY.init()
      }, 2000);

      document.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
          document.querySelector('.image').style.width = "80%"
        } else {
          document.querySelector('.image').style.width = "100%"
        }
      })
    },
    methods: {
      goHome(route) {
        if (route == 'Home') {
          console.log("Access with home url, redirecting to home");
          this.$router.push({
            name: route
          })
        } else if (typeof (route) == "undefined") {
          console.log("Access with direct url, redirecting to home");
          this.$router.push({
            name: 'Home'
          })
        } else {
          console.log("Access with category url, redirecting to category");
          this.$router.push({
            path: `/category/${route}`
          })
        }

      }
    },
    components: {
      'Templating': Templating,
    }
  }

</script>
<style scoped>
  .markerse {
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s ease-out all;
  }

  .info {
    position: absolute;
    top: 0px;
    left: 0;
    width: 300px;
    height: auto;
    background: #F8F6ED;
    z-index: 2;
    display: flex;
    flex-flow: column nowrap;
    transform-origin: left;
    transition: 0.5s ease-in-out all;
    transition-delay: 0.5s;
  }

  .flow {
    display: flex;
    width: 100%;
    text-align: left;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-bottom: 20px;
  }

  .return_container {
    position: relative;
    width: 300px;
    height: 100px;
    background: #F8F6ED;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    transition: 2s ease-in-out all;
    transform-origin: left;
    margin-bottom: 20px;
  }

  .hover_return {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #8A1538;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.3s ease-in-out all;
    z-index: -1;
  }

  .return_container:hover .hover_return {
    transform: scaleX(1);
  }

  .para {
    width: 80%;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 0.9em;
    margin: 10px 10%;
  }

  .scale-enter-active {
    animation: left 1s ease-in-out 0s 1 forwards;
  }

  .big-enter-active {
    animation: bigger 2s ease-in-out 0s 1 forwards;
  }

  .big-leave-active {
    animation: bigger 2s ease-in-out 0s 1 reverse;
  }

  @keyframes left {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }

  @keyframes bigger {
    0% {
      transform: scale(1.2);
    }

    100% {
      transform: scaleX(1);
    }
  }

  .scale-enter-active .title {
    opacity: 0;
  }

  .scale-enter-active .para1 {
    opacity: 0;
  }

  .scale-enter-active .para2 {
    opacity: 0;
  }

  .scale-enter-active .return {
    opacity: 0;
  }

  .scale-leave-active {
    transform: scale(0);
  }

  .moveInUp-leave-active .info {
    transform: scaleX(0);
  }

  .moveInUp-leave-active .title {
    transition-delay: 0s;
    transition-duration: 0.5s;
    opacity: 0;
  }

  .moveInUp-leave-active .para1 {
    transition-delay: 0s;
    transition-duration: 0.5s;
    opacity: 0;
  }

  .moveInUp-leave-active .para2 {
    transition-delay: 0s;
    transition-duration: 0.5s;
    opacity: 0;
  }

  .moveInUp-leave-active .return {
    opacity: 0;
    transition-delay: 0s;
    transition-duration: 0.5s;
  }

  .moveInUp-enter-active .return {
    opacity: 0;
    transition-delay: 0s;
    transition-duration: 0.5s;
  }

  .moveInUp-leave-active {
    animation: moveInUp 2s ease-in;
  }

  .moveInUp-enter-active {
    animation: fadeIn 0.3s ease-in;
    opacity: 0;
  }

  @keyframes right {
    0% {
      transform: scaleX(1);
    }

    100% {
      transform: scaleX(2);
    }
  }

  .return {
    transition: 0.3s ease-in-out all;
    transition-delay: 0.2s;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 2em;
  }

  .return_container:hover .return {
    color: #F8F6ED;
    transition-delay: 0s;
    transition-duration: 0.3s;
  }



  .para1 {
    transition: 1s ease-in-out all;
    transition-delay: 0.2s;
  }

  .para2 {
    transition: 1s ease-in-out all;
    transition-delay: 0.4s;
  }

  .title {
    font-size: 2em;
    opacity: 1;
    transition: 1s ease-in-out all;
    transition-delay: 0.3s;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    margin: 0 10%;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      transform: 1;
    }
  }

  @media only screen and (max-width: 1600px) {
    .header {
      width: 25%;
    }
  }

  @media only screen and (max-width: 1400px) {
    .header {
      width: 33%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .header {
      width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    .info {
      position: relative;
      width: 100%;
    }

    .markerse {
      height: 60vh;
    }

    .return_container {
      width: 100%;
      height: 60px;
    }
  }

</style>
