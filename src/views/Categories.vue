<template>
   <div>
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной верх
            </div>
            <div class="card-body">
                <div class="row p-3">
                    <small class="col-6 text-muted">Pазмер 1000x190</small>
                    <div class="col-6 text-right">
                    </div>
                </div>
                <div class="row pl-3">
                    <div class="col-10">
                        <div class="card-group">
                            <BannerUpper
                                v-for="banner in banners"
                                :key="banner.id"
                                :card="banner"
                                @remove-card="removeBanner"
                                @change-card="changeBanner"
                            />
                        </div>
                    </div>
                </div>
                <button
                    class="btn-lg btn-outline-info btn-block my-5 shadow"
                    @click="addBanner"
                >
                    Добавить
                </button>
                <div class="row my-5 p-3">
                    <div class="input-group col">
                        <div class="input-group-prepend col-3">
                            Скорость вращения:
                        </div>
                        <select
                            
                            class="form-control shadow mx-3 col-3"
                        >
                            <option
                                v-for="time in times"
                                :key="time"
                                :value="time"
                                :label="`${time} сек`"
                            ></option>
                        </select>
                    </div>

                    <div class="col">
                        <button class="btn"></button>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerUpper from '../components/banners/BannerUpper'
import CONFIG from "@/config.js"

export default ({

  components: {
    BannerUpper
  },
  data() {
        return {
            banners: [],
            times: [" 5", "15", "30"],
        }
    },

    methods: {
        addBanner() {
            this.banners.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
                text: "описание",
            })
        },
        async removeBanner(target) {
            this.banners = this.banners.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
        changeBanner(card) {
            const index = this.banners.findIndex((item) => item.id == card.id);
            if (index != -1) this.banners[index] = card;
        },
    },
  
})
</script>

<style lang="scss" scoped>
.card-group {
    gap: 0.5rem
}
</style>