<template>
  <div class="video-container">
      <video class="video__player" ref="video__player" :src="data['video'].url" muted autoplay loop></video>
      <div v-if="data['show_seekbar']" class="seek_bar" ref="seek_bar"></div>
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
        player: {
          value: 0,
          delta: 0,
          seekbar: this.$refs.seek_bar,
          video: this.$refs.video__player
        }

      }
    },
    mounted() {
      this.player.seekbar = this.$refs.seek_bar
      this.player.video = this.$refs.video__player
      
      this.player.video.addEventListener('timeupdate', () => {
        if(this.data['show_seekbar']) {
          this.player.delta = this.player.video.currentTime /  this.player.video.duration
          this.player.value = this.rounder(this.player.delta, 4) 
          this.player.seekbar.style.transform = `scaleX(${this.player.value})`
        }
      })

    },
    methods: {
      rounder(value, decimal) {
        const divider = (Math.pow(10, decimal))
        return Math.round(value * divider) / divider 
      }
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
