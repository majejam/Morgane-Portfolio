 <template>
   <div class="home-container">
     <Loader :data.sync="this.loader" @ended="hasLoaded" />
     <div v-if="markers" class="container">
       <Header />
       <Card v-for="(marker, index) of markers" :data="marker" v-bind:key="marker.id"
         @click.native="goToArticle(slug_post[index])" />
     </div>
   </div>
 </template>
 <script>
   import Header from '@/components/partials/Header'
   import Loader from '@/components/partials/Loader'
   import Canvas from '@/components/partials/Canvas'
   import Card from '@/components/partials/Card'

   export default {
     name: 'Home',
     data() {
       return {
         markers: [],
         slug_post: [],
         loader: '',
         scroll: '',
       }
     },
     mounted() {
       fetch('https://www.morganelapisardi.fr/backoffice/index.php/wp-json/markers/v1/post')
         .then((r) => r.json())
         .then((res) => {
           this.markers = res.map(x => x.acf)
           this.category = res.map(x => x.category)
           this.slug_post = res.map(x => x.slug)
           let number_image_loaded = 0;
           this.loader = 0.5
           this.markers.forEach((marker, index) => {
             marker.category = this.category[index][0].name

             let objImg = new Image();
             objImg.src = marker['image']['sizes']['medium_large'];
             objImg.onload = () => {
               number_image_loaded++
               this.loader = ((number_image_loaded / this.markers.length) / 2) + 0.5
             }
           });
         })
         .catch(error => console.log('error is', error));
     },
     activated() {
     },
     methods: {
       goTodetail(prodId) {
         this.$router.push({
           name: 'blog',
           params: {
             Pid: prodId,
             home: "home"
           }
         })
       },
       goToArticle(slug) {
         this.$router.push({
           name: 'blog',
           params: {
             Pid: slug,
             home: "Home"
           }
         })
       },
       hasLoaded(value) {
         console.log('Loading took', value, 'seconds');
       }
     },
     components: {
       'Header': Header,
       'Loader': Loader,
       'Canvas': Canvas,
       'Card': Card,
     }
   }

 </script>

 <style scoped>
   .home-container {
     padding: 5px;
     box-sizing: border-box;
   }

   .container {
     display: flex;
     flex-flow: row wrap;
   }

 </style>
