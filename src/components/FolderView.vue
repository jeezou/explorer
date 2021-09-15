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
          <transition name="fade">
            <FileView
              :name="file.name"
              :type="file.type"
              :length="file.length"
              v-show="isContain(name) && isNotCurrent(name)"
            />
          </transition>
        </template>
      </div>
    </div>
    <template v-for="(folder, index) in folders" :key="index">
      <transition name="fade">
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
      </transition>
    </template>
  </div>
</template>

<script>
import FileView from "./FileView";
import { debounce } from "debounce";

export default {
  name: "FolderView",
  components: { FileView },
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  .folder-field {
    width: 100%;
    display: grid;
    grid-template-rows: auto auto;
    // column-gap: 50px;
    margin: 0 0 20px 0;

    .files-container {
      justify-self: start;
      width: 80%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .folder-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 22px;
      border-radius: 20px;
      cursor: pointer;

      height: fit-content;
      width: fit-content;

      transition: all 0.3s ease-in-out;

      &:hover {
        // transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        // margin-left: 20px;

        background: rgba(255, 255, 255, 0.137);

        .decor {
          transform: scale(0.9);
        }
      }

      &.active {
        background: rgba(255, 255, 255, 0.52);
        color: #2b2b2b;
        // margin-left: 50px;

        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

        transform: scale(0.9);
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
    }
    .files-container {
      padding: 0;
      width: 90%;
    }
  }
}
</style>
