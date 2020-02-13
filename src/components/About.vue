<template>
  <div class="blog">
    <div id="luxy">
      <img v-if="data" :src="data['gif']['sizes']['large'] " alt="gif that follows the mouse" class="image_follow"
        ref="image_follow">
      <Canvas />
      <div @click="goHome(page)" class="return_container">
        <span class="return">x</span>
        <div class="hover_return"></div>
      </div>
      <transition name="background" appear>
        <div class="background__span">
          <div class="overflow__span">
            <span class="fill_span">About</span>
          </div>
          <span class="stroke_span">About</span>
        </div>
      </transition>
      <transition name="apparition" appear>
        <div v-if="data" class="about__container">
          <div class="big_img">
            <img :src="data['image']['sizes']['large']" :alt="data['image']['alt']" class="image_para" ref="parallax">
          </div>
          <span ref="main_span" class="main__span">{{ this.data['title'] }}</span>
          <div class="about__article">
            <h2>{{ this.data['about']['title'] }}</h2>
            <p>{{ this.data['about']['text'] }}</p>
            <h2>{{ this.data['experiences']['title'] }}</h2>
            <div v-for="experience of this.data['experiences']['experiences']" v-bind:key="experience.id"
              class="experience__container">
              <div class="experience__name">
                <span>{{ experience.name }}</span>
                <span>{{ experience.year }}</span>
              </div>
              <span class="experience__type">{{ experience.work }}</span>
            </div>
            <a class="resume__link" :href="data['resume']['file']['url']" target="blank">{{ data['resume']['title'] }}
              <img src="../../static/link.svg" alt="external link"></a>
            <h2>{{ this.data['links']['title'] }}</h2>
            <div v-for="link of this.data['links']['links']" v-bind:key="link.id" class="link__container">
              <a :href="link.url" class="link__image" target="blank">
                <img :src="link.logo['sizes']['large']" :alt="link.name">
              </a>
            </div>
          </div>
          <div v-if="data" class="contact__container">
            <div>
              <a :href="this.data['cta'].mail " class="under_score" ref="under_score">{{ this.data['cta'].name }}</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
  import LUXY from 'luxy.js'
  import AOS from 'aos'
  import simpleParallax from 'simple-parallax-js';
  import Canvas from '@/components/partials/Canvas'
  export default {
    name: 'about',
    data() {
      return {
        page: this.$route.params.home,
        data: null,
        about: [],
        experiences: [],
        offset: 0,
        start: 0,
        hover: false,
        loop: '',
        sizes: {
          width: 0,
          height: 0
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
      let url = 'https://www.morganelapisardi.fr/backoffice/index.php/wp-json/markers/v1/page/about'
      fetch(url)
        .then((r) => r.json())
        .then((res) => {
          if (res === null) {
            console.log('res : null');
            next({
              name: '404'
            });
            next()
          }
          this.data = res
          document.body.style.position = 'relative'

          this.executeOnMounted()
        })
        .catch(error => {
          this.$router.push({
            name: '404'
          })
        });


    },
    methods: {
      setParallax() {
        let simple = new simpleParallax(this.$refs.parallax, {
          overflow: true,
          scale: 1.3,
          orientation: 'down'
        });
      },
      executeOnMounted() {
        setTimeout(() => {
          scroll = LUXY.init()
          AOS.init();

          this.$refs.under_score.addEventListener('mouseenter', () => {
            this.hover = true
          })

          this.$refs.under_score.addEventListener('mouseleave', () => {
            this.hover = false
          })

          this.setParallax()
          this.update()
        }, 1000);

        window.addEventListener('mousemove', (_event) => {
          this.cursor.x = _event.pageX
          this.cursor.y = _event.pageY
          this.mouve = true
        })
      },
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
        if (Math.round(this.start) != this.offset && this.$refs.main_span) {
          this.$refs.main_span.style.transform = `translateX(-${this.start*2.5}px)`
        }

        if (this.mouve && this.$refs.image_follow) {
          this.imgPos.endX = (this.cursor.x)
          this.imgPos.endY = this.cursor.y

          this.imgPos.x = this.lerp(this.imgPos.x, this.imgPos.endX, 0.05);
          this.imgPos.y = this.lerp(this.imgPos.y, this.imgPos.endY, 0.05);


          this.$refs.image_follow.style.transform = `translate(${this.imgPos.x}px, ${this.imgPos.y}px)`
        }

        if (this.hover && this.$refs.image_follow) {
          this.$refs.image_follow.style.opacity = 1

        } else {
          this.$refs.image_follow.style.opacity = 0
        }

        this.loop = requestAnimationFrame(this.update);
      },
      lerp(min, max, fraction) {
        return (max - min) * fraction + min;
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    components: {
      'Canvas': Canvas
    },
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
    flex-flow: wrap;
    justify-content: space-between;
    padding: 0 10%;
    box-sizing: border-box;
    user-select: none;
  }

  .big_img {
    position: relative;
    margin-top: 100px;
    width: 40%;
    height: 700px;
    z-index: 1;
  }

  .big_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .main__span {
    position: absolute;
    top: 440px;
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
    top: 0;
    width: 100%;
    height: 100vh;
    color: transparent;
    transform: translate(-10%, 40%) rotateZ(-10deg);
    -webkit-text-stroke: #8A1538 2px;
    opacity: 0.5;
    user-select: none;
    z-index: 0;
  }

  .fill_span {
    color: #8A1538;
  }

  .overflow__span {
    overflow: hidden;
    display: block;
    height: 0%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s linear all;
  }

  .background-enter-active {
    animation: opacity_small 1s ease-in-out 0.1s 1 backwards;
  }

  .background-leave-active {
    animation: opacity_small 1s ease-in-out 0.1s 1 reverse;
  }

  .background-enter-active .overflow__span {
    height: 100%;
  }

  .background-leave-active .overflow__span {
    height: 0;
  }

  .about__article {
    text-align: left;
    width: 50%;
    padding-right: 10%;
    box-sizing: border-box;
    margin-top: 600px;
    z-index: 2;
  }

  .resume__link {
    text-decoration: none;
    color: #8A1538;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3em;
    padding-top: 40px;
  }

  .resume__link img {
    width: 16px;
    height: 16px;
    padding-left: 10px;
  }

  .about__article p {
    font-size: 1.1em;
  }

  .about__article h2 {
    color: #8A1538;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3em;
    padding-top: 30px;
  }

  .experience__container {
    width: 70%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .experience__name {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #2c3e50;
    font-size: 1.3em;
    font-weight: bold;
  }

  .experience__type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #2c3e50;
    font-size: 1.2em;
    padding-top: 5px;
  }

  .link__container {
    display: flex;
  }

  .link__image {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    opacity: 0.5;
    transition: 0.3s ease-in-out opacity;
  }

  .link__image:hover {
    opacity: 1;
  }

  .link__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    text-decoration: none;
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
    transition: 0.3s ease-out opacity;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .apparition-enter-active {
    animation: opacity 1s ease-in-out 2s 1 backwards;
  }

  .apparition-leave-active {
    animation: opacity 1s ease-in-out 0s 1 reverse;
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes opacity_small {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }

  /* tablet */
  @media only screen and (max-width: 1200px) {
    .big_img {
      height: 500px;
    }

    .main__span {
      top: 300px;
      font-size: 2.5em;
    }

    .about__article {
      margin-top: 400px;
    }

    .background__span {
      font-size: 35em;
    }
  }

  /* mobile */
  @media only screen and (max-width: 800px) {
    .about__container {
      flex-flow: column wrap;
    }

    .big_img {
      width: 70%;
      height: 300px;
    }

    .under_score {
      font-size: 2em;
    }

    .under_score::after {
      height: 5px;
    }

    .main__span {
      top: 420px;
    }

    .background__span {
      font-size: 15em;
    }

    .experience__container {
      width: 100%;
    }

    .about__article {
      margin-top: 50px;
      width: 100%;
      padding: 0;
    }
  }

</style>
