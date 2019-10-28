<template>
<div class="overflow">
  <div class="marquee-container">
      <span v-for="index in 10" :key="index" class="inner_span">{{ data_bloc['text'] }}</span>
  </div>
</div>


</template>

<script>

export default {
  name: 'Marquee',
  props: ['data_bloc'],
  mounted () {
      let container = document.querySelector('.marquee-container')
      let translate_offset = container.offsetWidth/2
      container.style.transform = `translateX(${-translate_offset}px)`
      window.addEventListener( 'wheel', (_e) => {
          if(!this.data_bloc['scroll_auto']) {
            if (_e.deltaY > 0 && translate_offset < container.offsetWidth) {
                translate_offset += 2
            }
            else if(_e.deltaY < 0 && translate_offset > 0){
                translate_offset -= 2
            }
          }
          else {
            if (_e.deltaY > 0 && translate_offset > 0) {
                translate_offset -= 2
            }
            else if(_e.deltaY < 0 && translate_offset < container.offsetWidth){
                translate_offset += 2
            }
          }

            container.style.transform = `translateX(${-translate_offset}px)`
      }, false );

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.overflow {
    width: 100%;
    overflow: hidden;
}
.marquee-container {
    width: max-content;
    display: flex;
    justify-content: space-between;
}

.inner_span{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    font-size: 20em;
    font-style: italic;
    padding-right: 10px;
}

</style>
