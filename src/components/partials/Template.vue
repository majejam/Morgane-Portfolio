<template>
  <div class="content">
    <div v-for="blocs of data.blocs" v-bind:key="blocs.id" class="container" >
        <div class="text-image" v-if="blocs['acf_fc_layout'] == 'text_image'">
            <TextImage :data_bloc="blocs"></TextImage>
        </div>
        <div class="text-image" v-if="blocs['acf_fc_layout'] == 'fullsize_image'">
            <FullSize :data_bloc="blocs"></FullSize>
        </div>
        <div class="text-image" v-if="blocs['acf_fc_layout'] == 'marquee'">
            <Marquee :data_bloc="blocs"></Marquee>
        </div>
          <div class="text-image" v-if="blocs['acf_fc_layout'] == 'texte'">
            <TextComp :data_bloc="blocs"></TextComp>
        </div>
    </div>
  </div>
 
</template>

<script>
import TextImage from '@/components/blocs/TextImage'
import FullSize from '@/components/blocs/FullSize'
import Marquee from '@/components/blocs/Marquee'
import TextComp from '@/components/blocs/TextPara'

export default {
  name: 'Template',
  props: ['data'], 
  data () {
    return {
      msg: this.data,
    }
  },
  components: {
    'TextImage': TextImage,
    'FullSize': FullSize,
    'Marquee': Marquee,
    'TextComp': TextComp,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
