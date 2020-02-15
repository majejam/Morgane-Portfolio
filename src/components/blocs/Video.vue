<template>
  <div class="video-container">
    <div class="video-wrapper">
      <video class="video__player" ref="video__player" :src="data['video'].url" autoplay loop>
      </video>
      <div class="video-controls" @click="soundControl">
        <img src="../../../static/volume.svg" ref="on" alt="volume icon">
        <img src="../../../static/mute.svg" ref="off" alt="volume icon">
      </div>
    </div>

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
          sound: false,
          seekbar: this.$refs.seek_bar,
          video: this.$refs.video__player
        }

      }
    },
    mounted() {
      this.player.seekbar = this.$refs.seek_bar
      this.player.video = this.$refs.video__player
      this.player.video.volume = 0
      this.soundIcon()

      this.player.video.addEventListener('timeupdate', () => {
        if (this.data['show_seekbar']) {
          this.player.delta = this.player.video.currentTime / this.player.video.duration
          this.player.value = this.rounder(this.player.delta, 4)
          this.player.seekbar.style.transform = `scaleX(${this.player.value})`
        }
      })

    },
    methods: {
      rounder(value, decimal) {
        const divider = (Math.pow(10, decimal))
        return Math.round(value * divider) / divider
      },
      soundControl() {
        this.player.sound = !this.player.sound
        this.player.sound ?  this.player.video.volume = 1 : this.player.video.volume = 0

        this.soundIcon()
      },
      soundIcon() {
        if(this.player.sound) {
          this.$refs.on.classList.add('show')
          this.$refs.off.classList.remove('show')
        }
        else {
          this.$refs.off.classList.add('show')
          this.$refs.on.classList.remove('show')
        }
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

  .video-container video {
    width: 100%;
    max-height: 80vh;
    display: block;
    background: black;
  }

  .video-wrapper {
    position: relative;
  }

  .video-controls {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 16px;
    height: 16px;
  }

  .video-controls img{
    height: 16px;
    width: 16px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s ease-in-out opacity;
  }

  .show {
    opacity: 1 !important;
  }

  .video-container span {
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
