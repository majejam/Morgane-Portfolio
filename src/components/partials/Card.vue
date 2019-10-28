<template>
  <div class="header">
    <li class="nav-item">
        <router-link class="nav-link" to="/blog">ononoo</router-link>
    </li>
  </div>
</template>

<script>

export default {
  name: 'Card',
  data () {
    return {
      msg: 'ppnoonooo',
      hello: 10
    }
  },
  methods: {
    increment () {
      this.hello++
    }
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
