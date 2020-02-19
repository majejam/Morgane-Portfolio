<template>
  <div class="header" ref="header">
    <div class="overflow">
      <router-link class="logo" :to="{ name: 'Home'}">Morgane Lapisardi</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_1 motion" :to="{ path:'/category/motion' }" exact>Motion</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_2 illustration" :to="{ path:'/category/illustration' }" exact>Illustration
      </router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_3 hobbies" :to="{ path:'/category/hobbies' }" exact>Hobbies</router-link>
    </div>
    <div class="overflow">
      <router-link class="link delay_4 about" :to="{ path:'/about' }" exact>About</router-link>
    </div>
    <img class="image_logo delay_3" src="../../../static/logo_morgane.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Header-page',
    data() {
      return {
        msg: 'ppnoonooo',
        hello: 10,
        currentPage: this.$router.currentRoute
      }
    },
    mounted() {

      window.addEventListener('resize', () => {
        if (this.$refs.header)
          this.$refs.header.style.height = this.$refs.header.offsetWidth + "px";
      })
      let interval = setInterval(() => {

        if (this.$refs.header)
          this.$refs.header.style.height = this.$refs.header.offsetWidth + "px";

      }, 200);

    },
  }

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
    padding: 5px 5px 15px 5px;
    border: 5px solid #F8F6ED;
    box-sizing: border-box;
    color: #F8F6ED;
    position: relative;
    user-select: none;
    z-index: 101;
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

  .logo::before {
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

  .logo:hover::before {
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

  .delay_4 {
    transition-delay: 0.4s;
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

  .router-link-exact-active::after {
    transform-origin: left;
    transform: scaleX(1);
    transition-delay: 0.8s;
  }

  .moveInUp-enter-active .router-link-exact-active::after {
    transform-origin: right;
    transform: scaleX(0);
  }

  .image_logo {
    position: absolute;
    width: 30px;
    height: auto;
    bottom: 15px;
    opacity: 1;
    transition: 1s ease-out opacity 1s;
  }


  @media only screen and (max-width: 1600px) {
    .header {
      width: 25%;
    }
  }

  @media only screen and (max-width: 1400px) {
    .header {
      width: 33.33333334%;
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

    .image_logo {
      bottom: 10px;
    }
  }

  .moveInUp-enter-active .logo {
    transform: translateY(150%);
  }

  .moveInUp-enter-active .link {
    transform: translateY(150%);
  }

  .moveInUp-enter-active .image_logo {
    opacity: 0;
  }

</style>
