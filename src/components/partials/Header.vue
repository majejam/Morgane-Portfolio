<template>
  <div class="header">
    <div class="overflow">
      <router-link class="logo" :to="{ name: 'Home'}">Morgane Lapisardi</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_1" :to="{ path:'/category/motion' }" exact>motion</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_2" :to="{ path:'/category/illustration' }" exact>illustration</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_3" :to="{ path:'/category/bric-a-brac' }" exact>bric-à-brac</router-link>
    </div>
    <img class="image" src="static/logo_morgane.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Header-page',
    data() {
      return {
        msg: 'ppnoonooo',
        hello: 10
      }
    },
    mounted() {
      let interval = setInterval(() => {
        let header = document.querySelector('.header')
        if (header)
          header.style.height = header.offsetWidth + "px";

      }, 200);
    }
  }

  window.addEventListener('resize', () => {
    let header = document.querySelector('.header')
    if (header)
      header.style.height = header.offsetWidth + "px";
  })

</script>

<style scoped>
  .header {
    width: 20%;
    height: 100%;
    background: #8A1538;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 5px solid #F8F6ED;
    box-sizing: border-box;
    color: #F8F6ED;
    position: relative;
  }

  .overflow {
    overflow: hidden;
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .logo {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    letter-spacing: 0.1em;
    font-size: 1.5em;
    color: #F8F6ED;
    position: absolute;
    margin-bottom: 10px;
    text-decoration: none;
    transition-delay: 0s;
    transition-timing-function: ease-out;
    transition-duration: 0.4s;
  }

  .logo::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #8A1538;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.3s ease-in-out transform;
  }

  .logo:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  .link {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-size: 1.5em;
    color: #F8F6ED;
    text-decoration: none;
    position: absolute;
    margin-bottom: 10px;
    transition-delay: 0s;
    transition-timing-function: ease-out;
    transition-duration: 0.4s;
  }

  .delay_1 {
    transition-delay: 0.1s;
  }

  .delay_2 {
    transition-delay: 0.2s;
  }

  .delay_3 {
    transition-delay: 0.3s;
  }

  .link::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #8A1538;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.3s ease-in-out transform;
  }

  .link:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  .image {
    position: absolute;
    width: 50px;
    height: auto;
    bottom: 30px;
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
    .header {
      width: 100%;
    }
  }

  .moveInUp-enter-active .logo {
    transform: translateY(150%);
  }

  .moveInUp-enter-active .link {
    transform: translateY(150%);
  }

</style>
