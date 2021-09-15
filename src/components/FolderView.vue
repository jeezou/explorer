<template>
  <div class="wrapper">
    <div
      class="folder-field"
      :style="{ 'padding-left': paddingOnQuery * depth + 'px' }"
    >
      <div
        class="folder-container"
        :class="{ active: isNotCurrent(name) }"
        @click="
          $emit('clicked', {
            folder: $event.target.textContent,
            depth: depth,
          })
        "
      >
        <div class="decor"></div>
        <p class="folder">
          {{ name }}
        </p>
      </div>
      <div
        class="files-container"
        :style="{
          'padding-left': paddingOnQuery * (depth ? depth - 1 : 1) + 'px',
        }"
      >
        <template v-for="(file, index) in files" :key="index">
          <transition-expand>
            <FileView
              :name="file.name"
              :type="file.type"
              :length="file.length"
              v-show="isContain(name) && isNotCurrent(name)"
            />
          </transition-expand>
        </template>
      </div>
    </div>
    <template v-for="(folder, index) in folders" :key="index">
      <transition-expand>
        <FolderView
          :name="folder.name"
          :folders="folder.folders"
          :files="folder.files"
          :depth="depth + 1"
          :current="current"
          :link="checkLink()"
          v-if="isContain(name)"
          @clicked="$emit('clicked', $event)"
        />
      </transition-expand>
    </template>
  </div>
</template>

<script>
import FileView from "./FileView";
import TransitionExpand from "./TransitionExpand.vue";
import { debounce } from "debounce";

export default {
  name: "FolderView",
  components: { FileView, TransitionExpand },
  emits: ["clicked"],
  props: {
    name: String,
    folders: Array,
    files: Array,
    depth: Number,
    current: Number,
    link: String,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      paddingOnQuery: 70,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.queryChecker();
      window.addEventListener("resize", debounce(this.queryChecker, 200));
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", debounce(this.queryChecker, 200));
  },
  methods: {
    queryChecker() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 992 && this.windowWidth > 768)
        this.paddingOnQuery = 50;
      else if (this.windowWidth <= 768 && this.windowWidth > 500)
        this.paddingOnQuery = 30;
      else if (this.windowWidth <= 500) this.paddingOnQuery = 0;
      else this.paddingOnQuery = 70;
    },
    childEvent() {
      this.$emit("clicked", this.$event);
    },
    checkLink() {
      if (this.isContain(this.name)) {
        return this.link;
      } else {
        this.link += `/${this.name}`;
        return this.link;
      }
    },
    isContain(name) {
      if (this.link) {
        let tmp = this.link;
        const res = tmp.split("/").indexOf(name);
        if (res < 0) return false;
        else return true;
      }
    },
    isNotCurrent(name) {
      if (this.link) {
        let tmp = this.link;
        if (tmp.indexOf("/") < 0) tmp = this.link.split();
        else tmp = this.link.split("/");
        if (tmp[tmp.length - 1] == name) return true;
        else return false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  .folder-field {
    width: 100%;
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 20px;
    margin: 0 0 20px 0;

    .files-container {
      justify-self: start;
      width: 80%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      overflow: hidden;
    }
    .folder-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 18px;
      border-radius: 15px;
      cursor: pointer;

      height: fit-content;
      width: fit-content;

      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        background: rgba(255, 255, 255, 0.137);

        .decor {
          transform: scale(0.9);
        }
      }

      &.active {
        background: rgba(255, 255, 255, 0.397);
        color: #383030;

        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

        transform: scale(0.85);
        pointer-events: none;
      }

      .decor {
        pointer-events: none;
        width: 100px;
        height: 100px;
        background: url("../assets/folder.svg");
        background-size: cover;

        transition: all 0.3s ease-in-out;
      }
      .folder {
        font-size: 1.5em;
        pointer-events: none;
        width: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .wrapper .folder-field {
    column-gap: 10px;
    .folder-container {
      .decor {
        width: 80px;
        height: 80px;
      }
    }
    .files-container {
      width: 80%;
    }
  }
}

@media screen and (max-width: 992px) {
  .wrapper .folder-field {
    align-items: center;
    width: 100%;
    column-gap: 10px;
    .folder-container {
      align-self: center;
      padding: 10px;
      .decor {
        width: 70px;
        height: 70px;
      }
      .folder {
        font-size: 1.4em;
      }
    }
    .files-container {
      padding: 0;
      width: 90%;
      border-radius: 0;
      background: none;
      box-shadow: none;
    }
  }
}
</style>
