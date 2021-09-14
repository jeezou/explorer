<template>
  <div class="file-item">
    <div class="picture" :class="extChecker()"></div>
    <div class="specs">
      <p class="file">{{ name }}</p>
      <p class="type">file type: {{ type }}</p>
      <p class="length">length: {{ length }}</p>
      <p class="ext">extension: {{ extChecker() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileView",
  props: {
    name: String,
    type: String,
    length: String,
  },
  methods: {
    extChecker() {
      return this.name.split(".").pop();
    },
  },
};
</script>

<style scoped lang="scss">
.file-item {
  display: flex;
  column-gap: 20px;
  margin: 15px 0 10px 0;
  padding: 10px;
  border-radius: 15px;

  width: 60%;

  background: rgba(255, 255, 255, 0.185);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .specs {
    display: grid;
    flex-direction: column;

    .file {
      font-size: 1.5em;
      font-weight: bolder;
    }

    .type,
    .length,
    .ext {
      font-size: 0.9em;
    }
  }

  .picture {
    width: 85px;
    height: 85px;
    background: url("../assets/document.svg");
    background-size: cover;

    &.jpg,
    &.png,
    &.jpeg,
    &.svg {
      background: url("../assets/image.svg");
    }
  }
}

@media screen and (max-width: 1200px) {
  .file-item {
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .file-item {
    align-items: center;
    font-size: 0.9em;
    .picture {
      width: 60px;
      height: 60px;
    }
    .specs {
      height: 70px;
    }
  }
}
</style>
