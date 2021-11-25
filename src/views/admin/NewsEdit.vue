<template>
  <div ref="form">
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Карточка новости</h3>
      </div>

      <div class="card-body">
        <div class="card-header">
          <Switcher v-model="currentNews.status">Видимость новости</Switcher>
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
                    v-model="currentNews.title"
                    type="text"
                    class="form-control"
                    :class="{
                      'is-invalid': this.$v.currentNews.title.$invalid,
                    }"
                    placeholder="название фильма"
                  />
                  <small
                    v-if="!this.$v.currentNews.title.$required"
                    class="invalid-feedback"
                    >Поле некорректно, исправьте, пожалуйста.
                  </small>
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Описание</span>
                  </div>
                  <textarea
                    v-model="currentNews.description"
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
                      :card="currentNews.baseImg"
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
                        v-for="img in currentNews.img"
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
                        v-model="currentNews.trailerLink"
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
                        v-model="currentNews.SEO.url"
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
                        v-model="currentNews.SEO.title"
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
                        v-model="currentNews.SEO.keywords"
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
                        v-model="currentNews.SEO.description"
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
                    v-model="currentNews.titleUA"
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
                    v-model="currentNews.descriptionUA"
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
                      :card="currentNews.baseImgUA"
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
                        v-for="img in currentNews.imgUA"
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
                        v-model="currentNews.trailerLinkUA"
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
                        v-model="currentNews.SEO.urlUA"
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
                        v-model="currentNews.SEO.titleUA"
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
                        v-model="currentNews.SEO.keywordsUA"
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
                        v-model="currentNews.SEO.descriptionUA"
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
          <button class="btn btn-info btn-block" @click="submitNewsDetails()">
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
  name: "news-edit",
  components: { BackBunner, BannerUpper, Switcher, Data },
  props: {
    newsIndex: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      currentNews: {
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
        return new Date(this.currentNews.date);
      },
      set: function(d) {
        this.currentNews.date = Date.parse(d);
      },
    },
  },
  async mounted() {
    if (this.newsIndex) {
      const news = await this.getById();
      news.on("value", (snapshot) => {
        this.currentNews = snapshot.val();
      });
    }
  },
  validations: {
    currentNews: {
      title: { required },
    },
  },
  methods: {
    submitNewsDetails() {
      if (this.newsIndex) {
        this.updateElementToDatabase().then(() => {
          this.$router.push({
            name: "news",
          });
        });
      } else {
        this.saveNewsElementToDatabase().then(() => {
          this.$router.push({
            name: "news",
          });
        });
      }
    },
    async updateElementToDatabase() {
      const payload = this.currentNews;
      const path = `/news/${this.newsIndex}`;
      return await this.$store.dispatch("updateToDatabase", {
        payload,
        path,
      });
    },
    async saveNewsElementToDatabase() {
      const payload = this.currentNews;
      const path = `/news`;
      return await this.$store.dispatch("writeInstanceToDatabase", {
        payload,
        path,
      });
    },
    async loadNewsElementFromDatabase() {
      const path = `/news/${this.newsIndex}`;
      const result = await this.$store.dispatch("readFromDatabase", path);
      if (result) this.currentNews = result;
    },
    async getById() {
      const payload = this.newsIndex;
      const path = `/news`;
      return await this.$store.dispatch("getFromDatabaseById", {
        payload,
        path,
      });
    },
    back() {
      this.$router.push({
        name: "news",
      });
    },
    mainPictureChanged(target) {
      this.currentNews.baseImg.url = target.url;
    },
    mainPictureChangedUA(target) {
      this.currentNews.baseImgUA.url = target.url;
    },
    removeBaseImg: function() {
      if (this.currentNews.baseImg.url == CONFIG.PICTURE_PLUG_URL) return;
      this.$store.dispatch("removeFromStorage", this.currentNews.baseImg.url);
      this.currentNews.baseImg.url = CONFIG.PICTURE_PLUG_URL;
    },
    removeBaseImgUA: async function() {
      if (this.currentNews.baseImgUA.url == CONFIG.PICTURE_PLUG_URL) return;
      this.$store.dispatch("removeFromStorage", this.currentNews.baseImgUA.url);
      this.currentNews.baseImgUA.url = CONFIG.PICTURE_PLUG_URL;
    },
    addPicture() {
      if (!this.currentNews.img) {
        this.currentNews.img = [];
      }
      this.currentNews.img.push({
        id: `${Date.now()}${Math.random()}`,
        url: CONFIG.PICTURE_PLUG_URL,
      });
    },
    addPictureUA() {
      this.currentNews.imgUA.push({
        id: `${Date.now()}${Math.random()}`,
        url: CONFIG.PICTURE_PLUG_URL,
      });
    },
    removePicture: async function(target) {
      this.currentNews.img = this.currentNews.img.filter(
        (element) => element != target
      );
      if (target.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", target.url);
    },
    removePictureUA: async function(target) {
      this.currentNews.img = this.currentNews.img.filter(
        (element) => element != target
      );
      if (target.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", target.url);
    },
  },
};
</script>
