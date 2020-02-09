<template>
  <div class="content">
    <div v-for="blocs of data.blocs" v-bind:key="blocs.id" class="container" >
        <TextImage v-if="blocs['acf_fc_layout'] == 'text_image'" :data_bloc="blocs"></TextImage>
        <FullSize v-if="blocs['acf_fc_layout'] == 'fullsize_image'" :data_bloc="blocs"></FullSize>
        <Marquee v-if="blocs['acf_fc_layout'] == 'marquee'" :data_bloc="blocs"></Marquee>
        <TextComp v-if="blocs['acf_fc_layout'] == 'texte'" :data_bloc="blocs"></TextComp>
        <Galery v-if="blocs['acf_fc_layout'] == 'galery'" :data_bloc="blocs"></Galery>
    </div>
  </div>
 
</template>

<script>
import TextImage from '@/components/blocs/TextImage'
import FullSize from '@/components/blocs/FullSize'
import Marquee from '@/components/blocs/Marquee'
import TextComp from '@/components/blocs/TextPara'
import Galery from '@/components/blocs/Galery'

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
    'Galery': Galery,
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
