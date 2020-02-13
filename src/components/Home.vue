 <template>
   <div class="home-container">
     <Canvas/>
     <Loader :data.sync="this.loader" @ended="hasLoaded" />
     <div v-if="markers" class="container">
       <Header />
       <div v-for="(marker, index) of markers" v-bind:key="marker.id" class="markers" ref="markers"
         @click="goToArticle(slug_post[index])">
         <div class="img-container" v-if="marker['image']['sizes']['medium_large']">
           <img :src="marker['image']['sizes']['medium_large']" />
         </div>
       </div>
     </div>
   </div>
 </template>
 <script>
   import Header from '@/components/partials/Header'
   import Loader from '@/components/partials/Loader'
   import Canvas from '@/components/partials/Canvas'

   export default {
     name: 'Home',
     data() {
       return {
         markers: [],
         slug_post: [],
         loader: '',
       }
     },
     mounted() {
       window.addEventListener('resize', () => {
         this.$refs.markers.forEach(element => {
           if (element)
             element.style.height = element.offsetWidth + "px";
         });
       })

       fetch('https://www.morganelapisardi.fr/backoffice/index.php/wp-json/markers/v1/post')
         .then((r) => r.json())
         .then((res) => {
           this.markers = res.map(x => x.acf)
           this.slug_post = res.map(x => x.slug)
           let number_image_loaded = 0;
           this.loader = 0.5
           this.markers.forEach((marker, index) => {
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
       if(this.$refs.markers) {
        this.$refs.markers.forEach(element => {
          element.style.height = element.offsetWidth + "px";
        });
       }
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
         let interval = setInterval(() => {
           this.$refs.markers.forEach(element => {
             element.style.height = element.offsetWidth + "px";
             if (element.offsetHeight == element.offsetWidth) {
               setTimeout(() => {
                 clearInterval(interval)
               }, 10000);
             }
           });
         }, 200);
       }
     },
     components: {
       'Header': Header,
       'Loader': Loader,
       'Canvas': Canvas,
     }
   }
 </script>

 <style scoped>

   .image_logo_red {
     position: absolute;
     width: 50px;
     height: auto;
     bottom: 30px;
   }

   #canvas {
     mix-blend-mode: hard-light !important;
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
     user-select: none;
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
