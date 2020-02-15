<template>
  <div class="HeaderBig">
    <div class="markerse">
      <transition name="big" appear>
        <img class="image" ref="image_handler" :src="this.data['article_image']['sizes']['large']">
      </transition>
    </div>
    <transition name="scale" appear>
      <div class="info">
        <div @click="goHome(page)" class="return_container">
          <span class="return">x</span>
          <div class="hover_return"></div>
        </div>
        <div class="flow">
          <span class="title">{{data.info}}</span>
          <p class="para para1">{{data.paragraphe_1}}</p>
          <p class="para para2">{{data.paragraphe_2}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBig',
    props: ['data'],
    data() {
      return {
        page: this.$route.params.home,
      }
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

      },
      handleScroll(event) {
        if (this.$refs.image_handler)
          window.pageYOffset > 50 ? this.$refs.image_handler.classList.add('image_small') : this.$refs.image_handler
          .classList.remove('image_small');
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
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
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s ease-out all;
    transform-origin: center;
  }

  .image_small {
    transform: translateX(-50%) scale(0.8);
  }

  .height {
    height: 1000px;
  }

  .info {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100vh;
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
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%) skewY(0deg);
    text-align: left;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding: 10px 10%;
    box-sizing: border-box;
    background: #F8F6ED;
    transition: 1s cubic-bezier(0.694, 0.0482, 0.335, 1) all;
    transform-origin: bottom;
  }

  .moveInUp-enter-active .flow {
    transform: translate(-50%, 200%) skewY(7deg);
  }


  .moveInUp-leave-active .flow {
    transform: translate(-50%, 120%);
  }

  .return_container {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    background: #F8F6ED;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    transition: 2s ease-in-out all;
    transform-origin: right;
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
    transform-origin: right;
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
    font-size: 1.1em;
    margin: 10px 0;
  }

  .scale-enter-active {
    /*animation: left 0.5s ease-in-out 0s 1 forwards;*/
  }

  .big-enter-active {
    animation: bigger 1s ease-in-out 0s 1 forwards;
  }

  .big-leave-active {
    animation: bigger 1s ease-in-out 0s 1 reverse;
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
      transform: scale(1.2) translateX(-50%);
    }

    100% {
      transform: scale(1) translateX(-50%);
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
    opacity: 0;
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
    animation: moveInUp 1s ease-in;
  }

  .moveInUp-enter-active {
    animation: fadeIn 1s ease-in;
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
    transition: 0.4s ease-in-out all;
    transition-delay: 0.3s;
  }

  .para2 {
    transition: 0.4s ease-in-out all;
    transition-delay: 0.4s;
  }

  .title {
    font-size: 3em;
    opacity: 1;
    transition: 0.4s ease-in-out all;
    transition-delay: 0.2s;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    color: #8A1538;
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
      width: 100%;
    }

    .title {
      font-size: 2em;
    }

    .para {
      font-size: 0.8em;
    }

    .markerse {
      height: 80vh;
      margin-bottom: 20vh;
    }

    .return_container {
      width: 50px;
      height: 50px;
    }
  }

</style>
