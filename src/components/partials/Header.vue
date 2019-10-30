<template>
  <div class="header">
    <router-link class="logo" :to="{ name: 'Home'}">Morgane Lapisardi</router-link>
    <router-link class="link" :to="{ path:'/category/motion' }" exact>motion</router-link>
    <router-link class="link" :to="{ path:'/category/illustration' }" exact>illustration</router-link>
    <router-link class="link" :to="{ path:'/category/bric-a-brac' }" exact>bric-à-brac</router-link>
    <img class="image" src="static/logo_morgane.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'Header-page',
  data () {
    return {
      msg: 'ppnoonooo',
      hello: 10
    }
  },
  mounted () {
    setTimeout(() => {
      let images = document.querySelector('.header')
      let header = document.querySelector('.header')
      if(header)
        header.style.height = images.offsetWidth + "px";
    }, 500);
  }
}

window.addEventListener('resize', () => {
      let images = document.querySelector('.header')
      let header = document.querySelector('.header')
      if(header)
        header.style.height = images.offsetWidth + "px";
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.logo {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: 1.5em;
  color: #F8F6ED;
  position: relative;
  margin-bottom: 10px;
  text-decoration: none;
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
  position: relative;
  margin-bottom: 10px;
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
</style>
