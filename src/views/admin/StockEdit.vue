<template>
  <div ref="form">
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Карточка акции</h3>
      </div>

      <div class="card-body">
        <div class="card-header">
          <Switcher v-model="currentStocks.status">Видимость акции</Switcher>
        </div>

        <div class="form-group col-4">
          <div class="input-group date">Дата</div>
          <Data v-model="thisDate" />
        </div>

        <div
          class="
                        card card-primary card-outline card-outline-tabs
                        mt-5
                    "
        >
          <div class="card-header p-0 border-bottom-0">
            <ul id="custom-tabs-two-tab" class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  id="custom-tabs-two-ru-tab"
                  class="nav-link active"
                  data-toggle="pill"
                  href="#custom-tabs-two-ru"
                  role="tab"
                  >Русский</a
                >
              </li>
              <li class="nav-item">
                <a
                  id="custom-tabs-two-ua-tab"
                  class="nav-link"
                  data-toggle="pill"
                  href="#custom-tabs-two-ua"
                  role="tab"
                  >Украинский</a
                >
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div id="custom-tabs-two-tabContent" class="tab-content">
              <div
                id="custom-tabs-two-ru"
                class="tab-pane fade show active"
                role="tabpanel"
              >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Название</span>
                  </div>
                  <input
                    v-model="currentStocks.title"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-invalid': this.$v.currentStocks.title.$invalid,
                    }"
                    placeholder="название фильма"
                  />
                  <small
                    v-if="!this.$v.currentStocks.title.$required"
                    class="invalid-feedback"
                    >Поле некорректно, исправьте, пожалуйста.
                  </small>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Описание</span>
                  </div>
                  <textarea
                    v-model="currentStocks.description"
                    type="text"
                    class="form-control"
                    placeholder="описание"
                  ></textarea>
                </div>

                <div class="card">
                  <div class="card-header">
                    Главная картинка
                  </div>
                  <div class="card-body">
                    <BackBunner
                      :card="currentStocks.baseImg"
                      @change-card="mainPictureChanged"
                      @remove-banner="removeBaseImg"
                    />
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    Галерея картинок
                  </div>
                  <div class="card-body">
                    <div class="card-group">
                      <BannerUpper
                        v-for="img in currentStocks.img"
                        :key="img.id"
                        :card="img"
                        @remove-card="removePicture"
                      />
                    </div>
                    <button
                      class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                      @click="addPicture"
                    >
                      Добавить картинку
                    </button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    Ссылка на трейлер
                  </div>
                  <div class="card-body">
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">url</span>
                      </div>
                      <input
                        v-model="currentStocks.trailerLink"
                        type="text"
                        class="form-control"
                        placeholder="url"
                      />
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">SEO</div>
                  <div class="card-body">
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">url</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.url"
                        type="text"
                        class="form-control"
                        placeholder="url"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Title</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.title"
                        type="text"
                        class="form-control"
                        placeholder="title"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Keywords</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.keywords"
                        type="text"
                        class="form-control"
                        placeholder="keywords"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-3
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Description</span>
                      </div>
                      <textarea
                        v-model="currentStocks.SEO.description"
                        type="text"
                        class="form-control"
                        placeholder="описание"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="custom-tabs-two-ua"
                class="tab-pane fade"
                role="tabpanel"
              >
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Назва</span>
                  </div>
                  <input
                    v-model="currentStocks.titleUA"
                    type="text"
                    class="form-control"
                    placeholder="назва фильму"
                  />
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Опис</span>
                  </div>
                  <textarea
                    v-model="currentStocks.descriptionUA"
                    type="text"
                    class="form-control"
                    placeholder="опис"
                  ></textarea>
                </div>

                <div class="card">
                  <div class="card-header">
                    Главная картинка
                  </div>
                  <div class="card-body">
                    <BackBunner
                      :card="currentStocks.baseImgUA"
                      @change-card="mainPictureChangedUA"
                      @remove-banner="removeBaseImgUA"
                    />
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">
                    Галерея картинок
                  </div>
                  <div class="card-body">
                    <div class="card-group">
                      <BannerUpper
                        v-for="img in currentStocks.imgUA"
                        :key="img.id"
                        :card="img"
                        @remove-card="removePictureUA"
                      />
                    </div>
                    <button
                      class="
                                                btn btn-outline-info btn-block
                                                my-2
                                            "
                      @click="addPictureUA"
                    >
                      Добавить картинку
                    </button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    Ссылка на трейлер
                  </div>
                  <div class="card-body">
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">url</span>
                      </div>
                      <input
                        v-model="currentStocks.trailerLinkUA"
                        type="text"
                        class="form-control"
                        placeholder="url"
                      />
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header">SEO</div>
                  <div class="card-body">
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">url</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.urlUA"
                        type="text"
                        class="form-control"
                        placeholder="url"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Title</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.titleUA"
                        type="text"
                        class="form-control"
                        placeholder="title"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-1
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Keywords</span>
                      </div>
                      <input
                        v-model="currentStocks.SEO.keywordsUA"
                        type="text"
                        class="form-control"
                        placeholder="keywords"
                      />
                    </div>
                    <div
                      class="
                                                input-group input-group-sm
                                                mb-3
                                            "
                    >
                      <div class="input-group-prepend">
                        <span class="input-group-text">Description</span>
                      </div>
                      <textarea
                        v-model="currentStocks.SEO.descriptionUA"
                        type="text"
                        class="form-control"
                        placeholder="описание"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-info btn-block" @click="submitStocksDetails()">
            Сохранить
          </button>
          <button class="btn btn-info btn-block" @click="back()">
            Вернутся
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG from "@/config.js";
import BackBunner from "@/components/banners/BackBunner.vue";
import BannerUpper from "@/components/banners/BannerUpper.vue";
import { required } from "vuelidate/lib/validators";
import Switcher from "@/components/banners/Switcher.vue";
import Data from "@/components/banners/Data.vue";
export default {
  name: "stocks-edit",
  components: { BackBunner, BannerUpper, Switcher, Data },
  props: {
    stocksIndex: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      currentStocks: {
        id: `${Date.now()}${Math.random()}`,
        date: Date.now(),
        status: true,
        title: "",
        titleUA: "",
        description: "",
        descriptionUA: "",
        baseImg: {
          url: CONFIG.PICTURE_PLUG_URL,
        },
        baseImgUA: {
          url: CONFIG.PICTURE_PLUG_URL,
        },
        img: [
          {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL,
          },
        ],
        imgUA: [
          {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL,
          },
        ],
        trailerLink: "http://youtube.com",
        trailerLinkUA: "http://youtube.com",
        SEO: {
          url: "",
          urlUA: "",
          title: "",
          titleUA: "",
          keywords: "",
          keywordsUA: "",
          description: "",
          descriptionUA: "",
        },
      },
    };
  },
  computed: {
    thisDate: {
      get: function() {
        return new Date(this.currentStocks.date);
      },
      set: function(d) {
        this.currentStocks.date = Date.parse(d);
      },
    },
  },
  async mounted() {
    if (this.stocksIndex) {
      const stocks = await this.getById();
      stocks.on("value", (snapshot) => {
        this.currentStocks = snapshot.val();
      });
    }
  },
  validations: {
    currentStocks: {
      title: { required },
    },
  },
  methods: {
    submitStocksDetails() {
      if (this.stocksIndex) {
        this.updateElementToDatabase().then(() => {
          this.$router.push({
            name: "stock",
          });
        });
      } else {
        this.saveStocksElementToDatabase().then(() => {
          this.$router.push({
            name: "stock",
          });
        });
      }
    },
    async updateElementToDatabase() {
      const payload = this.currentStocks;
      const path = `/stocks/${this.stocksIndex}`;
      return await this.$store.dispatch("updateToDatabase", {
        payload,
        path,
      });
    },
    async saveStocksElementToDatabase() {
      const payload = this.currentStocks;
      const path = `/stocks`;
      return await this.$store.dispatch("writeInstanceToDatabase", {
        payload,
        path,
      });
    },
    async loadStocksElementFromDatabase() {
      const path = `/stocks/${this.stocksIndex}`;
      const result = await this.$store.dispatch("readFromDatabase", path);
      if (result) this.currentStocks = result;
    },
    async getById() {
      const payload = this.stocksIndex;
      const path = `/stocks`;
      return await this.$store.dispatch("getFromDatabaseById", {
        payload,
        path,
      });
    },
    back() {
      this.$router.push({
        name: "stock",
      });
    },
    mainPictureChanged(target) {
      this.currentStocks.baseImg.url = target.url;
    },
    mainPictureChangedUA(target) {
      this.currentStocks.baseImgUA.url = target.url;
    },
    removeBaseImg: function() {
      if (this.currentStocks.baseImg.url == CONFIG.PICTURE_PLUG_URL) return;
      this.$store.dispatch("removeFromStorage", this.currentStocks.baseImg.url);
      this.currentStocks.baseImg.url = CONFIG.PICTURE_PLUG_URL;
    },
    removeBaseImgUA: async function() {
      if (this.currentStocks.baseImgUA.url == CONFIG.PICTURE_PLUG_URL) return;
      this.$store.dispatch("removeFromStorage", this.currentStocks.baseImgUA.url);
      this.currentStocks.baseImgUA.url = CONFIG.PICTURE_PLUG_URL;
    },
    addPicture() {
      if (!this.currentStocks.img) {
        this.currentStocks.img = [];
      }
      this.currentStocks.img.push({
        id: `${Date.now()}${Math.random()}`,
        url: CONFIG.PICTURE_PLUG_URL,
      });
    },
    addPictureUA() {
      this.currentStocks.imgUA.push({
        id: `${Date.now()}${Math.random()}`,
        url: CONFIG.PICTURE_PLUG_URL,
      });
    },
    removePicture: async function(target) {
      this.currentStocks.img = this.currentStocks.img.filter(
        (element) => element != target
      );
      if (target.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", target.url);
    },
    removePictureUA: async function(target) {
      this.currentStocks.img = this.currentStocks.img.filter(
        (element) => element != target
      );
      if (target.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", target.url);
    },
  },
};
</script>
