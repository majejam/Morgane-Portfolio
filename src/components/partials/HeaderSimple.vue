<template>
  <div class="HeaderSimple">
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
    name: 'HeaderSimple',
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

      }
    }
  }

</script>

<style scoped>

  .info {
    width: 100%;
    transition: 0.5s ease-in-out all;
    transition-delay: 0.5s;
  }

  .flow {
    display: flex;
    width: 100%;
    transform: translate(0%, 0%) skewY(0deg);
    text-align: left;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding: 10px 10%;
    margin: 100px 0 20px 0;
    box-sizing: border-box;
    transition: 0.5s cubic-bezier(0.694, 0.0482, 0.335, 1) all;
    transform-origin: bottom;
  }

  .moveInUp-enter-active .flow {
    transform: translate(0%, 50%);
  }


  .moveInUp-leave-active .flow {
    transform: translate(0, -50%);
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
    font-size: 4em;
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

    .flow {
      margin: 50px 0;
    }
  }

</style>
