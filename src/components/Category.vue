 <template>
  <div class="home-container">
    <div class="loader">
      <div class="loader_content">
        <div class="remover"></div>
        <span class="logo-loader">ML</span>
        <div class="logo-loader-bar "></div>
      </div>
      <img class="image_logo_red" src="../../static/logo_morgane_red.png" alt="logo red">
    </div>
    <div v-if="markers" class="container">
          <Header/>
        <div v-for="(marker, index) of markers" v-bind:key="marker.id" class="markers" @click="goToArticle(slug_post[index])">
            <div class="img-container" v-if="marker['image']['sizes']['medium_large']">
              <img v-bind:src="marker['image']['sizes']['medium_large']" /> 
            </div>
        </div>
    </div>
  </div>
</template>
<script>

import Card from '@/components/partials/Card'
import Header from '@/components/partials/Header'

export default {
  name: 'Home',
  error: false,
  data(){
    return {
      markers: [],
      slug_post: [],
      error: false,
    }
  },
  mounted () {
  },
    activated () {
    fetch('https://www.morganelapisardi.fr/backoffice/index.php/wp-json/markers/v1/category/' + this.$route.params.Pid)
      .then((r) => r.json())
      .then((res) => {
        this.markers = res.map(x => x.acf)
        this.slug_post = res.map(x => x.slug)
        let loading_finished = false;
        let number_image_loaded = 0;
        let length = this.markers.length;
        let ratio_load = 0.5
        document.querySelector('.logo-loader-bar').style.transform = `scaleX(${ratio_load})`
        this.markers.forEach((marker, index) => {
          let objImg = new Image();
          objImg.src = marker['image']['sizes']['medium_large'];          
          objImg.onload = function() {
          /// do some work;
            number_image_loaded++
            console.log(Math.round((number_image_loaded/length) * 100) + '%');
            ratio_load = ((number_image_loaded/length)/2) + 0.5
            document.querySelector('.logo-loader-bar').style.transform = `scaleX(${ratio_load})`
            if(number_image_loaded == length) {
              let interval = setInterval(() => {
                let images = document.querySelectorAll('.markers')
                images.forEach(element => {
                  element.style.height = element.offsetWidth + "px";
                  if(element.offsetHeight == element.offsetWidth) {
                    setTimeout(() => {
                      clearInterval(interval)
                    }, 10000);     
                  }
                });
              }, 200);
              setTimeout(() => {
                document.querySelector('.remover').style.transform = 'scaleY(1)'
                let image = document.querySelector('.header')
                let header = document.querySelector('.header')
                if(header)
                header.style.height = image.offsetWidth + "px";
                setTimeout(() => {
                  document.querySelector('.logo-loader').style.opacity = '0'
                  document.querySelector('.logo-loader-bar').style.opacity = '0'
                  document.querySelector('.remover').style.transformOrigin = 'top'
                  document.querySelector('.remover').style.transform = 'scaleY(0)'
                }, 500);
                setTimeout(() => {
                  document.querySelector('.loader').style.opacity = '0'
                  document.body.style.position = 'relative'
                }, 1000);
                setTimeout(() => {
                  document.querySelector('.loader').style.display = 'none'
                }, 2050);
              }, 100); 
              console.log("All elements loaded");
            }
          }
        });
  

        })
      .catch(error => {
          this.$router.push({
            name: '404'
          })
        });
  },
  methods:{
    goTodetail(prodId) {
      this.$router.push({name:'blog',params:{Pid:prodId}})
    },
    goToArticle(slug) {
      this.$router.push({name:'blog', params:{Pid:slug, home:this.$route.params.Pid}})
    }
  },
  components: {
    'Card': Card,
    'Header': Header,
  }
}

document.body.style.position = 'fixed'

window.addEventListener('resize', () => {
  let images = document.querySelectorAll('.markers')
  images.forEach(element => {
    element.style.height = element.offsetWidth + "px";
  });
  
})
</script>

<style scoped>
    .loader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
    .moveInUp-enter-active{
      animation: fadeIn 0.3s ease-in;
      animation-delay: 1s;
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

    .home-container {
      margin: 5px;
    }
    .container {
      display: flex;
      flex-flow: row wrap;
    }
    .markers {
        width: 20%;
        height: 300px;
        cursor: pointer;
        padding: 5px;
        box-sizing: border-box;
    }
    .markers:hover img {
        transform: scale(1.01);
    }
    .markers_inner {
      height: 100%;
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

    @media only screen and (max-width: 1600px) {
      .markers {
        width: 25%;
      }
    }

    @media only screen and (max-width: 1400px) {
      .markers {
        width: 33%;
      }
    }
    
    @media only screen and (max-width: 1000px) {
    .markers {
        width: 50%;
      }
    }

    @media only screen and (max-width: 600px) {
    .markers {
        width: 100%;
      }
    }
</style>
