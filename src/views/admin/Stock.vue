<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Список акций</h2>
          <div class="card-tools">
            <button class="btn btn-lg btn-info" @click="addStocks">
              Добавить акции
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
              <tr v-for="stock in stocks" :key="stock.id">
                <td>{{ stock.title }}</td>
                <td>
                  {{ new Date(stock.date).toLocaleDateString() }}
                </td>
                <td>
                  <span v-if="stock.status">ВКЛ</span>
                  <span v-else>ВЫКЛ</span>
                </td>
                <td>
                  <button
                    class="btn btn-info mx-3"
                    @click="editStocks(stock.uuid)"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger mx-3"
                    @click="removeStocks(stock)"
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
  name: "stock",
  data() {
    return {
      stocks: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.loadStocksFromDatabase());
  },
  methods: {
    async saveStocksToDatabase() {
      const payload = this.stocks;
      const path = "/stocks";
      return await this.$store.dispatch("writeToDatabase", {
        payload,
        path,
      });
    },
    async loadStocksFromDatabase() {
      const result = await this.$store.dispatch("readFromDatabase", "/stocks");
      if (result) {
        this.stocks = result;
        for (let key in this.stocks) {
          this.stocks[key].uuid = key;
        }
      }
    },
    async removeStocks(stock) {
      if (!window.confirm("Удалить новость?")) return;
      this.removePictureFromStorage(stock.baseImg);
      this.removePictureFromStorage(stock.baseImgUA);
      if (stock.img) {
        stock.img.forEach((item) => this.removePictureFromStorage(item));
      }
      if (stock.imgUA) {
        stock.imgUA.forEach((item) => this.removePictureFromStorage(item));
      }
      this.$store
        .dispatch("removeFromDatabase", { payload: stock.uuid, path: "stocks" })
        .then(() => {
          this.$delete(this.stocks, stock.uuid);
        });
    },
    async removePictureFromStorage(picture) {
      if (picture.url == CONFIG.PICTURE_PLUG_URL) return;
      await this.$store.dispatch("removeFromStorage", picture.url);
    },
    editStocks(uuid) {
      this.$router.push({
        name: "stocks-edit",
        params: { stocksIndex: uuid },
      });
    },
    addStocks() {
      this.$router.push({
        name: "stocks-edit",
      });
    },
  },
};
</script>
