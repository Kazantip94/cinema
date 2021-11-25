<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Список новостей</h2>
          <div class="card-tools">
            <button class="btn btn-lg btn-info" @click="addNews">
              Добавить новость
            </button>
          </div>
        </div>
        <div class="card-body table-responsive p-0">
          <table class="table text-nowrap">
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата создания</th>
                <th>Статус</th>
                <th>Редактировать/Удалить</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="story in news" :key="story.id">
                <td>{{ story.title }}</td>
                <td>
                  {{ new Date(story.date).toLocaleDateString() }}
                </td>
                <td>
                  <span v-if="story.status">ВКЛ</span>
                  <span v-else>ВЫКЛ</span>
                </td>
                <td>
                  <button
                    class="btn btn-info mx-3"
                    @click="editNews(story.uuid)"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger mx-3"
                    @click="removeNews(story)"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG from "@/config.js";
export default {
  name: "news",
  data() {
    return {
      news: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.loadNewsFromDatabase());
  },
  methods: {
    async saveNewsToDatabase() {
      const payload = this.news;
      const path = "/news";
      return await this.$store.dispatch("writeToDatabase", {
        payload,
        path,
      });
    },
    async loadNewsFromDatabase() {
      const result = await this.$store.dispatch("readFromDatabase", "/news");
      if (result) {
        this.news = result;
        for (let key in this.news) {
          this.news[key].uuid = key;
        }
      }
    },
    async removeNews(story) {
      if (!window.confirm("Удалить новость?")) return;
      this.removePictureFromStorage(story.baseImg);
      this.removePictureFromStorage(story.baseImgUA);
      if (story.img) {
        story.img.forEach((item) => this.removePictureFromStorage(item));
      }
      if (story.imgUA) {
        story.imgUA.forEach((item) => this.removePictureFromStorage(item));
      }
      this.$store
        .dispatch("removeFromDatabase", { payload: story.uuid, path: "news" })
        .then(() => {
          this.$delete(this.news, story.uuid);
        });
    },
    async removePictureFromStorage(picture) {
      if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", picture.url);
    },
    editNews(uuid) {
      this.$router.push({
        name: "news-edit",
        params: { newsIndex: uuid },
      });
    },
    addNews() {
      this.$router.push({
        name: "news-edit",
      });
    },
  },
};
</script>
