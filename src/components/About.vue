<template>
  <div class="blog">
    <div id="luxy">
      <img src="../../static/the_office.gif" alt="" class="image_follow">
      
      <canvas id="canvas"></canvas>
      <div @click="goHome(page)" class="return_container">
        <span class="return">x</span>
        <div class="hover_return"></div>
      </div>
      <div class="about__container">
        <div class="big_img"></div>
        <span class="main__span">Salut ! je suis une jeune illustratrice & motion designeuse basée à Paris !</span>
        <span class="background__span">About</span>

        <div class="about__article">
          <h2>à propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae laborum ea quaerat at quam quidem
            iste corporis deserunt. Asperiores doloremque eos iure expedita, illo fuga. Vitae at dolorum aspernatur.</p>

          <h2>Mes experiences</h2>
          <span>2020 / ITECA</span><br>
          <span>DESIGN</span>

          <h2>Les liens utiles</h2>
          <span>behance</span>
          <span>dribbble</span>

        </div>
      </div>
      <div class="contact__container">
        <div>
          <span class="under_score">Contactez-moi !</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import LUXY from 'luxy.js'
  import AOS from 'aos'

  export default {
    name: 'about',
    data() {
      return {
        page: this.$route.params.home,
        offset: 0,
        start: 0,
        el: '',
        contact: '',
        mouse: true,
        hover: false,
        hold: false,
        follow: '',
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
          endY: 1000
        },
        imgPos: {
          x: 0,
          y: 0,
          endX: 100,
          endY: 1000
        },
        cursor: {
          x: 0,
          y: 0,
        }
      }
    },
    mounted() {
      let scroll
      document.body.style.position = 'relative'
      setTimeout(() => {
        scroll = LUXY.init()
        AOS.init();
        this.el = document.querySelector('.main__span')
        this.contact = document.querySelector('.under_score')
        this.follow = document.querySelector('.image_follow')

        this.contact.addEventListener('mouseenter', () => {
          this.hover = true  
          console.log('cc');
          
        })

        this.contact.addEventListener('mouseleave', () => {
          this.hover = false  
        })
        
        this.update()
      }, 1000);
      this.canvas = document.querySelector('#canvas')
      this.context = this.canvas.getContext('2d')
      this.sizes.width = this.canvas.width = window.innerWidth
      this.sizes.height = this.canvas.height = document.body.offsetHeight
      this.pos.y = document.body.offsetHeight - 150
      this.pos.endY = document.body.offsetHeight - 150
      window.addEventListener('resize', this.resize);
      window.addEventListener('click', (e) => {
        this.pos.endX = e.pageX;
        this.pos.endY = e.pageY;
      });

      window.addEventListener('mousedown', (e) => {
        this.hold = true
      });

      window.addEventListener('mouseup', (e) => {
        this.hold = false
      });

    
      window.addEventListener('mousemove', (_event) =>
        {
            this.cursor.x = _event.pageX 
            this.cursor.y = _event.pageY  
            this.mouve = true
        })

    },
    methods: {
      goHome(route) {
        if (route == 'Home') {
          console.log("Access with home url, redirecting to home");
          this.$router.push({
            name: route
          })
        } else if (typeof (route) == "undefined") {
          console.log("Access with direct url, redirecting to home");
          this.$router.push({
            name: 'Home'
          })
        } else {
          console.log("Access with category url, redirecting to category");
          this.$router.push({
            path: `/category/${route}`
          })
        }

      },
      handleScroll(event) {
        this.offset = window.pageYOffset
      },
      update() {
        this.start = this.lerp(this.start, this.offset, 0.1)
        if (Math.round(this.start) != this.offset) {
          this.el.style.transform = `translateX(-${this.start*2.5}px)`
        }

        if(this.hold) {
          this.pos.endX = this.cursor.x;
          this.pos.endY = this.cursor.y;
        }

        if(this.mouve) {
          this.imgPos.endX = this.cursor.x - 480
          this.imgPos.endY = this.cursor.y

          this.imgPos.x = this.lerp(this.imgPos.x, this.imgPos.endX, 0.05);
          this.imgPos.y = this.lerp(this.imgPos.y, this.imgPos.endY, 0.05);
        }

        if(this.hover) {
          this.follow.style.opacity = 1

          this.follow.style.transform = `translate(${this.imgPos.x}px, ${this.imgPos.y}px)`
        }
        else {
          this.follow.style.opacity = 0
        }

        this.contextUpdate()

        requestAnimationFrame(this.update);
      },
      lerp(min, max, fraction) {
        return (max - min) * fraction + min;
      },
      drawBall(x, y, radius) {
        this.context.beginPath();
        this.context.fillStyle = '#8A1538';
        this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.context.fill();
      },
      contextUpdate() {
        this.context.clearRect(0, 0, this.sizes.width, this.sizes.height);
        this.drawBall(this.pos.x, this.pos.y, 50);
        this.pos.x = this.lerp(this.pos.x, this.pos.endX, 0.1);
        this.pos.y = this.lerp(this.pos.y, this.pos.endY, 0.1);
      },
      resize() {
        this.sizes.width = this.canvas.width = window.innerWidth
        this.sizes.height = this.canvas.height = document.body.offsetHeight
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    components: {},
  }

</script>
<style scoped>
  .return_container {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    transition: 2s ease-in-out all;
    transform-origin: right;
    margin-bottom: 20px;
  }

  .return_container:hover .hover_return {
    transform: scaleX(1);
  }

  #canvas {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
   }

  .return {
    transition: 0.3s ease-in-out all;
    transition-delay: 0.2s;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 2em;
  }

  .return_container:hover .return {
    color: #F8F6ED;
    transition-delay: 0s;
    transition-duration: 0.3s;
  }

  .hover_return {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #8A1538;
    transform: scaleX(0);
    transform-origin: right;
    transition: 0.3s ease-in-out all;
    z-index: -1;
  }

  .about__container {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    box-sizing: border-box;
  }

  .big_img {
    position: relative;
    margin-top: 100px;
    width: 500px;
    height: 700px;
    background: grey;
    z-index: 1;
  }

  .main__span {
    position: absolute;
    top: 50%;
    left: 30%;
    font-weight: bold;
    color: #8A1538;
    font-size: 4em;
    width: max-content;
    z-index: 2;
    mix-blend-mode: screen;
  }

  .background__span {
    position: absolute;
    font-size: 50em;
    left: 50%;
    bottom: 0;
    color: transparent;
    transform: translate(-50%, 30%) rotateZ(-10deg);
    -webkit-text-stroke: #8A1538 2px;
    opacity: 0.5;
    user-select: none;
  }

  .about__article {
    text-align: left;
    width: 50%;
    padding-right: 10%;
    box-sizing: border-box;
    margin-top: 500px;
  }

  .contact__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  [data-aos="contact-appear"] {
    transition: 1s ease-in opacity;
    transition-delay: 1s;
  }

  .under_score {
    position: relative;
    font-size: 5em;
    color: #8A1538;
    font-weight: bold;
    cursor: pointer;
    mix-blend-mode: screen;
    user-select: none;
  }

  .under_score::after {
    content: '';
    position: absolute;
    background: #8A1538;
    top: 100%;
    left: 0;
    width: 100%;
    height: 10px;
    transform: scaleX(1);
    transition: 0.4s ease-in transform;
    transform-origin: left;
  }

  .aos-animate .under_score::after {
    transform: scaleX(1);
  }

  .under_score:hover::after {
    transform: scaleX(0);
    transform-origin: right;
  }

  .image_follow {
    transition: 1s ease-out opacity;
    opacity: 0;
  }

</style>
