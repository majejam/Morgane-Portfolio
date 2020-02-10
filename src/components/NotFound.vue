 <template>
   <div class="home-container">
     <canvas id="canvas"></canvas>
     <div class="loader">
       <div class="loader_content">
         <span class="logo-loader">Snap ! 404 not found, <router-link :to="{ name: 'Home'}">might wanna go home
           </router-link> ?</span>
       </div>
       <img class="image_logo_red" src="https://morganelapisardi.fr/static/logo_morgane_red.png" alt="logo red">
     </div>
   </div>
 </template>
 <script>
   export default {
     name: 'NotFound',
     data() {
       return {
         markers: [],
         canvas: '',
         context: '',
         sizes: {
           width: 0,
           height: 0
         },
         pos: {
           x: 0,
           y: 0,
           endX: 100,
           endY: 150
         }
       }
     },
     methods: {
       drawBall(x, y, radius) {
         this.context.beginPath();
         this.context.fillStyle = '#8A1538';
         this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
         this.context.fill();
       },
       update() {
         this.context.clearRect(0, 0, this.sizes.width, this.sizes.height);
         this.drawBall(this.pos.x, this.pos.y, 30);
         this.pos.x = this.lerp(this.pos.x, this.pos.endX, 0.1);
         this.pos.y = this.lerp(this.pos.y, this.pos.endY, 0.1);
         requestAnimationFrame(this.update);
       },
       resize() {
         this.sizes.width = this.canvas.width = window.innerWidth
         this.sizes.height = this.canvas.height = window.innerHeight
       },
       lerp(min, max, fraction) {
         return (max - min) * fraction + min;
       }
     },
     mounted() {
       this.canvas = document.querySelector('#canvas')
       this.context = this.canvas.getContext('2d')
       this.sizes.width = this.canvas.width = window.innerWidth
       this.sizes.height = this.canvas.height = window.innerHeight
       this.update()
       window.addEventListener('resize', this.resize);
       window.addEventListener('click', (e) => {
         this.pos.endX = e.pageX;
         this.pos.endY = e.pageY;
       });
     },
   }

 </script>

 <style scoped>
   .loader {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     transition: 1s ease-in-out all;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   #canvas {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index:
   }

   .image_logo_red {
     position: absolute;
     width: 50px;
     height: auto;
     bottom: 30px;
   }

   .moveInUp-enter-active {
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

   .moveInUp-enter-active .remover {
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

 </style>
