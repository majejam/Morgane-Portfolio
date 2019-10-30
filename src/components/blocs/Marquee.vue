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

      window.addEventListener( 'scroll', (_e) => {
          let delta = ((document.body.offsetHeight - window.innerHeight) - window.pageYOffset) / (document.body.offsetHeight - window.innerHeight)
           
          container.style.transform = `translateX(${-translate_offset + (delta * 500)}px)`
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

.inner_span:nth-child(even){
    color: #8A1538;
    -webkit-text-stroke-color: #8A1538;
    -webkit-text-stroke-width: 5px;
}

.inner_span:nth-child(odd){
    color: transparent;
    -webkit-text-stroke-color: #8A1538;
    -webkit-text-stroke-width: 5px;
}

</style>
