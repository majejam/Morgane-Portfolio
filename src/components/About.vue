<template>
  <div class="blog">
    <div id="luxy">
      <div @click="goHome(page)">
        <span class="return">back</span>
      </div>
    </div>
  </div>

</template>

<script>
  import LUXY from 'luxy.js'

  export default {
    name: 'about',
    data() {
      return {
        page: this.$route.params.home,
      }
    },
    mounted() {
      let scroll
      document.body.style.position = 'relative'
      setTimeout(() => {
        scroll = LUXY.init()
      }, 1000);
    },
    methods: {
      goHome(route) {
        if (route == 'Home') {
          console.log("Access with home url, redirecting to home");
          this.$router.push({
            name: route
          })
        } else if (typeof (route) == "undefined") {
          console.log("Access with direct url, redirecting to home");
          this.$router.push({
            name: 'Home'
          })
        } else {
          console.log("Access with category url, redirecting to category");
          this.$router.push({
            path: `/category/${route}`
          })
        }

      },
    },
    components: {},
  }

</script>
<style scoped>

</style>
