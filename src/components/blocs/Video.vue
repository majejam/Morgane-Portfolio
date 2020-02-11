<template>
  <div class="video-container">
      <video class="video__player" :src="data['video'].url" muted autoplay loop></video>
      <div v-if="data['show_seekbar']" class="seek_bar"></div>
      <span>{{ data['legend'] }}</span>
  </div>
</template>

<script>

  export default {
    name: 'Video',
    props: ['data_bloc'],
    data() {
      return {
        data: this.data_bloc,
      }
    },
    mounted() {
      let video = document.querySelector('.video__player')
      let seekbar = {
        value: 0,
        el: document.querySelector('.seek_bar')
      }

      video.addEventListener('timeupdate', () => {
        if(this.data['show_seekbar']) {
          seekbar.value = Math.round(video.currentTime / video.duration * 10000)/10000
          seekbar.el.style.transform = `scaleX(${seekbar.value})`
        }
      })

    },
    methods: {

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 .video-container {
   width: 80%;
   margin: 50px 10%;
   box-sizing: border-box;
   text-align: left;
   overflow-x: hidden;
 }

 .seek_bar {
   width: 100%;
   height: 5px;
   background: #8A1538;
   transform: scaleX(0);
   transform-origin: left;
   transition: 0.4s linear transform;
 }

 .video-container video{
   width: 100%;
   max-height: 80vh;
   display: block;
   background: black;
 }

 .video-container span{
   display: block;
   width: 100%;
    font-weight: bold;
    font-size: 1.1em;
    padding: 10px 0;
    box-sizing: border-box;
 }

  @media only screen and (max-width: 700px) {
    .galery__image {
      width: 45%;
      height: 300px;
    }
  }

  @media only screen and (max-width: 400px) {
    .video-container span {
      font-size: 0.8em;
    }
  }

</style>
