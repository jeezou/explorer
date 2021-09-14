<template>
  <div class="dec"></div>
  <div class="dec"></div>
  <div class="dec"></div>

  <div class="container">
    <div class="current-url">Current link: {{ link }}</div>
    <FolderView
      name="root"
      :folders="folders"
      :files="files"
      :depth="depth + 1"
      :current="current_depth"
      @clicked="changeFolder"
      :key="current_depth"
      :link="link"
    />
  </div>
</template>

<script>
import FolderView from "./components/FolderView.vue";
import data from "./data/list";

export default {
  name: "App",
  components: {
    FolderView,
  },
  data() {
    return {
      folders: data.folders,
      files: data.files,

      depth: -1,
      current_depth: -1,
      link: null,
    };
  },
  methods: {
    changeFolder(e) {
      if (this.link) {
        let tmpLink = this.link;
        if (tmpLink.indexOf("/") < 0) tmpLink = tmpLink.split();
        else tmpLink = tmpLink.split("/");
        if (!this.isContain(tmpLink, e.folder)) {
          if (tmpLink.length - 1 < e.depth) {
            this.link += `/${e.folder}`;
            // this.current_depth++;
          } else if (tmpLink.length - 1 == e.depth) {
            tmpLink.pop();
            this.link = tmpLink.join("/");
            this.link += `/${e.folder}`;
          }
        } else {
          tmpLink.length = e.depth + 1;
          if (tmpLink.indexOf("/") < 0) this.link = tmpLink.join("/");
          else this.link = tmpLink.join("");
          // this.current_depth = e.depth;
        }
      } else {
        this.link = `${e.folder}`;
        // this.current_depth++;
      }
    },

    isContain(link, name) {
      const res = link.indexOf(name);
      if (res < 0) return false;
      else return true;
    },

    removeEl() {
      const index = this.link.split("/").indexOf("backgrounds");
      let tmp = this.link;
      if (index >= 0) {
        tmp = tmp.split("/");
        tmp.splice(index, 1);
        tmp = tmp.join("/");
        this.link = tmp;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 70px 0;
  background-image: linear-gradient(to bottom, #f1f4f9, #dff1ff);
  min-height: 100vh;
  display: block;
  // display: flex;

  font-family: "Comfortaa", Avenir, Helvetica, Arial, sans-serif;
  color: #464861;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .dec {
    position: absolute;
    pointer-events: none;
    user-select: none;
    filter: blur(150px);

    &:first-child {
      height: 50%;
      width: 90%;
      top: 5%;
      left: 5%;
      background: rgb(251, 126, 255);
    }
    &:nth-child(2) {
      height: 50%;
      width: 60%;
      left: 2%;
      bottom: 3%;
      background: rgb(78, 206, 199);
    }
    &:nth-child(3) {
      height: 40%;
      width: 40%;
      right: 10%;
      bottom: 10%;
      background: rgb(249, 251, 99);
    }
  }

  .container {
    width: 80%;
    height: 80%;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    margin: 0 auto 70px auto;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;

    .current-url {
      font-size: 2.2em;
      margin: 0 0 40px 0;
    }
  }
}

@media screen and (max-width: 1200px) {
  #app {
    padding: 40px 0;

    .container {
      width: 95%;
      padding: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 0.8em;
    padding: 0;

    .container {
      border: none;
      box-shadow: none;
      backdrop-filter: none;
      border-radius: none;
      margin: 0;
      width: 100%;
      padding: 70px 20px 20px 20px;

      .current-url {
        font-size: 1.8em;
      }
    }
  }
}
</style>
