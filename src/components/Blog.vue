<template>
 <div class="blog">
  <transition name="scale" appear>
     <div transition="opacity" class="info">
        <span class="return" @click="goHome()">home</span>
        <div class="flow">
          <span class="title">{{markers.info}}</span>
          <p class="para para1">{{markers.paragraphe_1}}</p>
          <p class="para para2">{{markers.paragraphe_2}}</p>
        </div>
     </div>
  </transition>
    <div class="markerse">
      <transition name="big" appear>
      <img class="image" v-bind:src="markers.image['sizes']['large']"  v-if="markers.image['sizes']">/>
      </transition>
    </div>
  <Templating :data="markers"></Templating>
 </div>

</template>

<script>

import Templating from '@/components/partials/Template'

 export default {
  name:'blog',
  data(){
    return {
      markers: [],
    }
  },
  mounted () {
    let url = 'https://www.thomaslacroix.fr/nouvo/index.php/wp-json/markers/v1/post/' + this.$route.params.Pid    
    fetch(url)
      .then((r) => r.json())
      .then((res) => {
        this.markers = res
        console.log(this.markers);
        
        })
  },
    methods:{
    goHome() {
        this.$router.push({name:'Home'})
    }
  },
  components: {
    'Templating': Templating,
  }
}
 
</script>
<style scoped>
 .markerse {
     position: relative;
     top: 0;
     left: 0;
     height: 100vh;
     width: 100%;
     overflow: hidden;
 }

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 800px;
    height: 200px;
    background: white;
    z-index: 2;
    display: flex;
    flex-flow: column nowrap;
    transform-origin: left;
    transition: 0.5s ease-in-out all;
    transition-delay: 0.5s;
}
.flow {
  display: flex;
  width: 100%;
  text-align: left;
  justify-content: space-around;
}

.para {
  width: 30%;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 0.9em;
}

.scale-enter-active {
    animation: left 2s ease-in-out 0s 1 forwards;
}

.big-enter-active {
  animation: bigger 2s ease-in-out 0s 1 forwards;
}

.big-leave-active {
  animation: bigger 2s ease-in-out 0s 1 reverse;
}

@keyframes left{
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}

@keyframes bigger{
  0%{
    transform: scale(1.2);
  }
  100%{
    transform: scaleX(1);
  }
}

.scale-enter-active .title{
    opacity: 0;
}

.scale-enter-active .para1{
    opacity: 0;
}

.scale-enter-active .para2{
    opacity: 0;
}

.scale-enter-active .return{
    opacity: 0;
}

.scale-leave-active{
    transform: scale(0);
}

.moveInUp-leave-active .info {
  transform: scaleX(0);
}

.moveInUp-leave-active .title{
  transition-delay: 0s;
  transition-duration: 0.5s;
  opacity: 0;
}

.moveInUp-leave-active .para1{
  transition-delay: 0s;
  transition-duration: 0.5s;
    opacity: 0;
}

.moveInUp-leave-active .para2{
  transition-delay: 0s;
  transition-duration: 0.5s;
  opacity: 0;
}

.moveInUp-leave-active .return{
    opacity: 0;
    transition-delay: 0s;
  transition-duration: 0.5s;
}

.moveInUp-leave-active{
  animation: moveInUp 2s ease-in;
}

.moveInUp-enter-active{
  animation: fadeIn 0.3s ease-in;
  opacity: 0;
}

@keyframes right{
  0%{
    transform: scaleX(1);
  }
  100%{
    transform: scaleX(2);
  }
}

.return {
    transition: 1s ease-in-out all;
    transition-delay: 0.2s;
    opacity: 0;
}

.para1 {
    transition: 1s ease-in-out all;
    transition-delay: 0.2s;
}

.para2 {
    transition: 1s ease-in-out all;
    transition-delay: 0.4s;
}

.title {
    font-size: 2em;
    opacity: 1;
    transition: 1s ease-in-out all;
    transition-delay: 0s;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
}

@keyframes appear{
  0%{
    opacity: 0;
  }
  100%{
    transform: 1;
  }
}
</style>
