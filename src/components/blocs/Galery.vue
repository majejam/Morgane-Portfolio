<template>
  <div class="galery-container" ref="galery_container">
    <div
      v-for="(image, index) of data['images']"
      v-bind:key="image.id"
      :class="[getClass(index), 'galery__image']"
    >
      <img
        :src="image['image']['sizes']['large']"
        :alt="image['image']['alt']"
        ref="images_parallax"
      />
    </div>
  </div>
</template>

<script>
import simpleParallax from "simple-parallax-js";

export default {
  name: "Galery",
  props: ["data_bloc"],
  data() {
    return {
      data: this.data_bloc
    };
  },
  mounted() {
    this.data_bloc.type == "Quinconce" ? this.setParallax() : this.setGrid();

    this.data_bloc.images.length <= 2
      ? this.$refs.galery_container.classList.add("big_image")
      : this.$refs.galery_container.classList.remove("big_image");

    this.data_bloc.images.length < 2
      ? this.$refs.galery_container.classList.add("biggest_image")
      : this.$refs.galery_container.classList.remove("biggest_image");

    this.data_bloc["cropped_image"]
      ? this.$refs.galery_container.classList.add("crop")
      : this.$refs.galery_container.classList.remove("crop");
  },
  methods: {
    getClass(index) {
      if (this.data_bloc.type == "Quinconce")
        return index % 2 ? "galery__image--right" : "galery__image--left";
    },
    setParallax() {
      if (Array.isArray(this.$refs.images_parallax)) {
        this.$refs.images_parallax.forEach(element => {
          new simpleParallax(element, {
            overflow: true,
            scale: 1.5
          });
        });
      } else {
        new simpleParallax(this.$refs.images_parallax, {
          overflow: true,
          scale: 1.5
        });
      }
    },
    setGrid() {
      this.$refs.galery_container.classList.add("galery-grid");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.galery-container {
  margin: 0;
  width: 80%;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}

.galery__image {
  width: 45%;
  height: 600px;
}

.galery__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.galery__image--right {
  margin-left: 55%;
}

.galery-grid {
  flex-flow: wrap;
  justify-content: flex-start;
}

.galery-grid .galery__image {
  margin: 30px 1.66667%;
  height: 400px;
  width: 30%;
}

.galery-grid .galery__image img {
  object-fit: contain;
}

.crop .galery__image img {
  object-fit: cover;
}

.big_image .galery__image {
  margin: 15px 2.5%;
  width: 45%;
}

.biggest_image .galery__image {
  margin: 15px 0;
  width: 100%;
  height: 100%;
}

/* tablet */
@media only screen and (max-width: 1200px) {
  .galery__image {
    width: 45%;
    height: 400px;
  }

  .galery-grid .galery__image {
    margin: 15px 2.5%;
    width: 45%;
  }
}

@media only screen and (max-width: 700px) {
  .galery__image {
    width: 45%;
    height: 300px;
  }

  .galery-grid .galery__image {
    margin: 15px 0;
    width: 100%;
  }
}

@media only screen and (max-width: 400px) {
  .galery__image {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
