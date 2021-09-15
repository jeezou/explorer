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
  align-self: left;
  display: flex;
  row-gap: 5px;
  position: relative;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-left: 30px;

    margin-left: 30px;

    &:before {
      border-radius: 15px;
      height: 20%;
      top: 40%;
    }
  }

  &:first-child {
    &:before {
      top: 50%;
      height: 55%;
    }

    &:hover {
      &:before {
        border-radius: 15px;
        height: 20%;
        top: 40%;
      }
    }
  }

  &:last-child {
    &:before {
      top: -5%;
      height: 55%;
    }

    &:hover {
      &:before {
        border-radius: 15px;
        height: 20%;
        top: 40%;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: 0;
    top: 0;
    border-radius: 2px;

    left: -10px;
    width: 4px;
    height: 105%;
    background: rgb(197, 197, 197);

    transition: all 0.3s ease-in-out;
  }

  width: 80%;
  border-radius: 15px;

  .specs {
    display: grid;
    margin: 20px 5px;
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
    margin: 20px;
    background: url("../assets/other.svg");
    background-size: cover;

    &.json {
      background: url("../assets/json.svg");
      background-size: cover;
    }

    &.js {
      background: url("../assets/js.svg");
      background-size: cover;
    }

    &.jpg,
    &.jpeg {
      background: url("../assets/jpg.svg");
      background-size: cover;
    }
    &.png {
      background: url("../assets/png.svg");
      background-size: cover;
    }
    &.svg {
      background: url("../assets/svg.svg");
      background-size: cover;
    }
  }
}

@media screen and (max-width: 1200px) {
  .file-item {
    width: 100%;

    .picture {
      width: 75px;
      height: 75px;
    }
  }
}

@media screen and (max-width: 992px) {
  .file-item {
    width: 100%;
    font-size: 0.9em;

    .picture {
      width: 65px;
      height: 65px;
    }
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

@media screen and (max-width: 500px) {
  .file-item {
    &:before {
      display: none;
    }
  }
}
</style>
