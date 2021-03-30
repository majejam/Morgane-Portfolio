<template>
      <canvas ref="canvas" id="canvas"></canvas>
</template>

<script>
  export default {
    name: 'Canvas',
    data() {
      return {
        mouse: true,
        hover: false,
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
        cursor: {
          x: 0,
          y: 0,
        }
      }
    },
    mounted() {
        this.executeOnMounted()
    },    
    methods: {
      executeOnMounted() {
        setTimeout(() => {
          this.context = this.$refs.canvas.getContext('2d')
          this.resize()
          this.pos.y = document.body.offsetHeight - 150
          this.pos.endY = 150
          this.update()
        }, 1000);

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

        window.addEventListener('mousemove', (_event) => {
          this.cursor.x = _event.pageX
          this.cursor.y = _event.pageY
        })
      },
      update() {
        if (this.hold) {
          this.pos.endX = this.cursor.x;
          this.pos.endY = this.cursor.y;
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
        this.pos.x = this.lerp(this.pos.x, this.pos.endX, 0.05);
        this.pos.y = this.lerp(this.pos.y, this.pos.endY, 0.05);
      },
      resize() {
        this.sizes.width = this.$refs.canvas.width = window.innerWidth
        this.sizes.height = this.$refs.canvas.height = document.body.offsetHeight || window.innerHeight
      },
    },
  }

</script>

<style scoped>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    mix-blend-mode: screen;
    pointer-events: none;
}
</style>
