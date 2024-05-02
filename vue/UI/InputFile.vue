<template>
  <div
    id="uploadArea"
    class="upload-area"
    v-bind:class="{ 'upload-area_enabel': imgsLength }"
  >
    <input
      v-on:change="onFileChange"
      type="file"
      class="drop-zoon__file-input"
      accept="image/*"
      v-tabindex
      v-bind:disabled="!imgsLength"
    />
    <Transition
      name="collapse"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="drop-zoon__text-wrap" v-show="imgsLength">
        <p class="drop-zoon__paragraph">
          Нажмите, чтобы добавить файлы к сообщению
        </p>
        <p class="drop-zoon__comment">
          Можно добавить до 5 файлов с разрешением jpg, jpeg, gif, png и
          размером до 512Кбайт
        </p>
      </div>
    </Transition>
    <Transition
      name="collapse"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div class="dropZoon__img-container" v-if="uploadImg.length">
        <div
          v-for="item in uploadImg"
          v-bind:key="item.id"
          class="dropZoon__img-item"
          v-on:click.prevent
        >
          <img
            style="width: 100; height: 100"
            class="Image-input__image"
            :src="item.src"
          />
          <button v-on:click.prevent="deleteImg(item.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M1 1L7.2 7.2"
                stroke="#1E1E1E"
                stroke-width="1.45"
                stroke-linecap="round"
              />
              <path
                d="M1 7.2L7.2 1"
                stroke="#1E1E1E"
                stroke-width="1.45"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  data() {
    return {
      uploadImg: [],
    };
  },
  computed: {
    imgsLength() {
      if (this.uploadImg.length < 5) {
        return true;
      } else {
        return false;
      }
    },
  },
  directives: {
    tabindex: {
      inserted(el) {
        el.setAttribute("tabindex", 0);
      },
    },
  },
  methods: {
    onFileChange: function (e) {
      if (this.uploadImg.length < 5) {
        let files = e.target.files || e.dataTransfer.files;
        if (files[0].size > 512000) {
          alert("Максимальный размер файла 512Кбайт");
          return;
        }
        if (!files.length) return;
        this.createImage(files[0]);
        e.target.value = "";
      } else {
        e.preventDefault();
      }
    },
    createImage: function (file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = function (e) {
        vm.uploadImg.push({
          id: Date.now(),
          name: file.name,
          size: file.size,
          src: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    },
    deleteImg(deleteId) {
      let index = this.uploadImg.findIndex((el) => el.id == deleteId);
      if (index >= 0) {
        this.uploadImg.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss">
/* Upload Area */
.upload-area {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  min-height: 122px;
  height: auto;
  display: flex;
  padding: 22px 9px;
  border: 2px solid #cecece;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 576px) {
    padding: 12px 14px;
    border-radius: 6px;
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
    border: 2px solid rgb(86, 77, 77);
    box-shadow: 0 0 7px 1px rgb(86 77 77 / 45%);
  }

  &_enabel {
    cursor: pointer;
  }

  .drop-zoon__file-input {
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    opacity: 0;
  }

  .drop-zoon__text-wrap {
    padding-bottom: 5px;
    transition: 0.3s all;
  }

  .drop-zoon__paragraph {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
    color: #2b2b2b;
    margin-bottom: 15px;

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 16px;
    }
  }

  .drop-zoon__comment {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #707070;

    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .dropZoon__img-container {
    height: auto;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 5px;
    row-gap: 10px;
    transition: 0.3s all;

    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  .dropZoon__img-item {
    position: relative;
    display: flex;
    align-items: center;
    width: 20%;
    height: 100px;
    max-height: 200px;
    border: 5px solid #fbfbfb;
    background: rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: auto;
      max-height: 100px;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      background-color: #bbbbbb;
      color: #1e1e1e;
      opacity: 0.7;
      font-size: 14px;
      line-height: 1;
      border-radius: 3px;
      border: none;
      outline: none;
      box-shadow: none;
      cursor: pointer;
      transition: 0.3s all;

      &:hover {
        opacity: 1;
      }
    }
  }
}
/* Upload Area */
</style>