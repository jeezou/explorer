<template>
  <div class="dec"></div>
  <div class="dec"></div>
  <div class="dec"></div>

  <div class="container">
    <h2 class="title">Simple Local Files Explorer</h2>
    <div class="menu-bar">
      <div class="menu-item" @click="resetChanges">Reset</div>
      <div class="menu-item">All Files</div>
      <div class="menu-item">Images</div>
      <div class="menu-item">Folders</div>
    </div>
    <div class="current-url-query" v-if="link && windowWidth <= 992">
      Current link: {{ link }}
    </div>

    <div class="main">
      <div class="current-url" v-if="link && windowWidth > 992">
        Current link: {{ link }}
      </div>
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
  </div>
</template>

<script>
import FolderView from "./components/FolderView.vue";
import data from "./data/list";

import { debounce } from "debounce";

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

      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = this.getWindowWidth();
      window.addEventListener(
        "resize",
        debounce(() => (this.windowWidth = this.getWindowWidth()), 100)
      );
    });
  },

  beforeDestroy() {
    window.removeEventListener(
      "resize",
      debounce(() => (this.windowWidth = getWindowWidth()), 100)
    );
  },
  methods: {
    getWindowWidth() {
      return Math.max(window.innerWidth, document.documentElement.clientWidth);
    },
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
    resetChanges() {
      this.link = null;
      this.depth = -1;
      this.current_depth = -1;
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

  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./assets/landscape4.jpg");
    background-size: cover;
  }

  font-family: "Comfortaa", Avenir, Helvetica, Arial, sans-serif;
  // color: #464861;
  color: rgb(224, 224, 224);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 80%;
  height: 80%;
  position: relative;
  background: rgba(255, 255, 255, 0.103);
  border-radius: 20px;
  // backdrop-filter: blur(5px);
  box-shadow: 0 0 45px 10px rgba(0, 0, 0, 0.205);
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

  .title {
    font-size: 2.2em;
    width: 100%;
    text-align: center;
    margin: 10px 0 30px 0;
  }

  .menu-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
    font-size: 1.2em;

    .menu-item {
      margin: 30px 0 50px 0;
      cursor: pointer;
      position: relative;

      transition: all 0.2s ease-in-out;

      &:before {
        content: "";
        position: absolute;
        box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.52);
        height: 2px;
        border-radius: 30px;
        width: 0;
        top: 115%;
        left: 0;

        transition: all 0.2s ease-in-out;
      }

      &:hover {
        color: #fafafa;
        &:before {
          width: 100%;
          box-shadow: inset 0 0 0 5px #fafafa;
        }
      }
    }
  }
  .current-url-query {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
  }
}

.main {
  width: 100%;
  padding: 50px;
  position: relative;
  background: rgba(255, 255, 255, 0.103);
  border-radius: 20px;
  // backdrop-filter: blur(5px);
  margin: auto;
  position: relative;

  .current-url {
    font-size: 2em;
    position: absolute;
    right: 10%;
  }
}
// }

@media screen and (max-width: 1200px) {
  #app {
    padding: 40px 0;

    .container {
      width: 95%;
      padding: 30px;
    }
  }
}

@media screen and (max-width: 992px) {
  #app {
    .container {
      .menu-bar {
        column-gap: 0;
        justify-content: space-around;
      }
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
      background: transparent;
      border-radius: none;
      margin: 0;
      width: 100%;
      padding: 70px 20px 20px 20px;

      .main {
        padding: 10px 20px;
      }
    }
  }
}
</style>
