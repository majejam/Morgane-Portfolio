 <template>
  <div class="home-container">
    <div class="loader"></div>
    <div v-if="markers" class="container">
        <div v-for="marker of markers" v-bind:key="marker.id" class="markers" @click="goTodetail(marker.post_id)">
            <div class="img-container" v-if="marker['image']['sizes']['medium_large']">
              <img v-bind:src="marker['image']['sizes']['medium_large']" /> 
            </div>
        </div>
    </div>
  </div>
</template>
<script>

import Card from '@/components/partials/Card'

export default {
  name: 'Home',
  data(){
    return {
      markers: [],
    }
  },
  mounted () {
    fetch('https://www.thomaslacroix.fr/nouvo/index.php/wp-json/markers/v1/post')
      .then((r) => r.json())
      .then((res) => {
        this.markers = res.map(x => x.acf)
        console.log(res);
        document.querySelector('.loader').style.display = 'none'
        })
      .catch(error => console.log('error is', error));


      setTimeout(() => {
        console.log('resized');
        
      let images = document.querySelectorAll('.markers')
      images.forEach(element => {
        element.style.height = element.offsetWidth + "px";

      });
      }, 500);
  },
  methods:{
    goTodetail(prodId) {
      this.$router.push({name:'blog',params:{Pid:prodId}})
    }
  },
  components: {
    'Card': Card,
  }
}

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
      background: rebeccapurple;
    }
    .home-container {
      margin: 0 10%;
    }
    .container {
      display: flex;
      flex-flow: row wrap;
    }
    .markers {
        width: 20%;
        height: 300px;
        cursor: pointer;
        padding: 10px;
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
