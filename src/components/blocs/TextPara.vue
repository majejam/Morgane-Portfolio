<template>
  <div class="texte_container">
    <span class="title">{{ data_bloc["title"] }}</span>
    <div
      class="paragraphe"
      v-if="data_bloc['paragraphe_1'] || data_bloc['paragraphe_2']"
    >
      <p>{{ data_bloc["paragraphe_1"] }}</p>
      <p>{{ data_bloc["paragraphe_2"] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextPara",
  props: ["data_bloc"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.texte_container {
  margin: 50px 10%;
  text-align: left;
  overflow: hidden;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 3em;
  font-style: italic;
  padding-right: 10px;
  line-height: 1;
  padding-bottom: 20px;
}

.paragraphe {
  display: flex;
  flex-flow: nowrap;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  justify-content: space-between;
}

p {
  width: 45%;
}

/* tablet */
@media only screen and (max-width: 1200px) {
}

/* mobile */
@media only screen and (max-width: 800px) {
  .paragraphe {
    flex-flow: column;
  }

  p {
    width: 100%;
  }
}
</style>
