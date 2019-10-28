<template>
  <div id="app">
    <transition name="moveInUp">
      <keep-alive include="Home">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
  animation-delay: 2s;
  opacity: 0;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

.swipe {
  background: rebeccapurple;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  transform: scaleX(0);
}
.swiper-enter-active{
  animation: scaleDown 1s ease-in;
  animation-delay: 0.5s;
  opacity: 0;
}
@keyframes scaleDown{
  0%{
    transform: scaleX(1)
  }
  100%{
    transform: scaleX(0)
  }
}
.swiper-leave-active{
  animation: scaleUp 2s ease-in;
}
@keyframes scaleUp{
  0%{
    transform: scaleX(0)
  }
  100%{
    transform: scaleX(1)
  }
}
</style>


<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #app {
    margin: 0;
  }
</style>