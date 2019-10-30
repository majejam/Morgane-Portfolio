 <template>
  <div class="home-container">
    <div class="loader">
      <div class="loader_content">
        <div class="remover"></div>
        <span class="logo-loader">Snap ! 404 not found, <router-link :to="{ name: 'Home'}">might wanna go home</router-link> ?</span>
        <div class="logo-loader-bar "></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'NotFound',
  data(){
    return {
      markers: [],
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
      background: #F8F6ED;
      transition: 1s ease-in-out all; 
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .moveInUp-enter-active{
      animation: fadeIn 1s ease-in;
      animation-delay: 0s;
      opacity: 0;
    }
    .loader_content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      position: relative;
    }
    .logo-loader {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      letter-spacing: 0.1em;
      font-size: 2em;
      color: #8A1538;
      position: relative;
    }

    a {
        color: #8A1538;
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
      transition-delay: 0s;
    }

    .moveInUp-enter-active .remover{
        transform: scaleY(1);
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
      0%{
        transform: scaleX(0);
        transform-origin: left;
      }
      49%{
        transform: scaleX(1);
        transform-origin: left;
      }
      51%{
        transform: scaleX(1);
        transform-origin: right;
      }
      100%{
        transform: scaleX(0);
        transform-origin: right;
      }
    }

</style>
