<template>
  <div ref="loader" class="loader">
    <div class="loader_content">
      <div ref="remover" class="remover"></div>
      <span ref="logo_loader" class="logo-loader">ML</span>
      <div ref="logo_loader_bar" class="logo-loader-bar "></div>
    </div>
    <img class="image_logo_red" src="static/logo_morgane_red.png" alt="logo red">
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: ['data'],
    watch: {
      data: function () { 
        this.$refs.logo_loader_bar.style.transform = `scaleX(${this.data})`
        if (this.data == 1) {
            this.hasFinished()
            this.removeLoader()
        }
      }
    },
    data() {
      return {
        ended: false,
        elapsedTime: 0,
        startTime: 0,
        endTime:0,
      }
    },
    mounted() {
        document.body.style.position = 'fixed'
        this.startTime = new Date()
    },
    methods: {
      hasFinished() {
        this.ended = true
        this.endTime = new Date()
        this.elapsedTime = (this.endTime - this.startTime) / 1000
        this.$emit('ended', this.elapsedTime)
      },
      removeLoader() {
          setTimeout(() => {
            this.$refs.remover.style.transform = 'scaleY(1)'
            setTimeout(() => {
              this.$refs.logo_loader.style.opacity = '0'
              this.$refs.logo_loader_bar.style.opacity = '0'
              this.$refs.remover.style.transformOrigin = 'top'
              this.$refs.remover.style.transform = 'scaleY(0)'
            }, 500);
            setTimeout(() => {
              this.$refs.loader.style.opacity = '0'
              document.body.style.position = 'relative'
            }, 1000);
            setTimeout(() => {
              this.$refs.loader.style.display = 'none'
            }, 2050);
          }, 100);
      }
    }
  }

</script>

<style scoped>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: 1000;
    background: #F8F6ED;
    transition: 1s ease-in-out all;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image_logo_red {
    position: absolute;
    width: 50px;
    height: auto;
    bottom: 30px;
  }

  .loader_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    position: relative;
    overflow: hidden;
  }

  .logo-loader {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-size: 2em;
    color: #8A1538;
    position: relative;
  }

  .remover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #8A1538;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: 0.5s ease-in-out transform;
  }

  .logo-loader-bar {
    height: 2px;
    width: 100%;
    background: #8A1538;
    transition: 0.3s ease-in-out transform;
    transform: scaleX(0);
    transform-origin: left;
    /*animation: left 2s ease-in-out 0s infinite forwards;*/
  }

  @keyframes left {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }

    49% {
      transform: scaleX(1);
      transform-origin: left;
    }

    51% {
      transform: scaleX(1);
      transform-origin: right;
    }

    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

  .logo {
    width: 20%;
    height: 300px;
    cursor: pointer;
    margin: 10px;
    background: rebeccapurple;
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

</style>
