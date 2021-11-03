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
                        <Switcher
                            v-model="settings.bannersSwitch"
                        ></Switcher>
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
                            v-model="settings.bannersRotationSpeed"
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
                        <Button
                            class="btn btn-lg w-50"
                            @click="saveBanners"
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                Сквозной баннер на заднем фоне
            </div>
            <div class="row p-3">
                <small class="col-6 text-muted">Pазмер 2000x3000</small>
            </div>

            <div class="row py-5 px-3">
                <div class="col-3">
                    <div class="form-group">
                        <div class="form-check m-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="midBanner.bannerType"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Фото на фоне"
                                />Фото на фоне</label
                            >
                        </div>
                        <div class="form-check m-3">
                            <label class="form-check-label"
                                ><input
                                    v-model="midBanner.bannerType"
                                    class="form-check-input"
                                    type="radio"
                                    name="radio1"
                                    value="Просто фон"
                                />
                                Просто фон</label
                            >
                        </div>
                    </div>
                </div>

                <div class="col-9">
                    <BackBunner
                        :card="midBanner"
                        @remove-banner="removeMidBanner"
                        @change-card="changeMidBanner"
                    />
                </div>
            </div>
        </div>

        <!-- third block -->
        <div class="card mt-3">
            <div class="card-header text-center font-weight-bold">
                На главной новости и акции
            </div>
            <div class="card-body">
                <div class="row p-3">
                    <small class="col-6 text-muted">Pазмер 1000x190</small>
                    <div class="col-6 text-right">
                        <Switcher
                            v-model="settings.bottomSwitch"
                        ></Switcher>
                    </div>
                </div>
                <div class="row pl-3">
                    <div class="col-10">
                        <div class="card-group p-3">
                            <BannerUpper
                                v-for="action in bottom"
                                :key="action.id"
                                :card="action"
                                @remove-card="removeBottom"
                            />
                        </div>
                    </div>
                </div>
                <button
                    class="btn-lg btn-outline-info btn-block shadow m-3"
                    @click="addBottom"
                >
                    Добавить
                </button>
                <div class="row p-3 mt-5 input-group">
                    <div class="input-group col">
                        <div class="input-group-prepend col-3">
                            Скорость вращения:
                        </div>
                        <select
                            v-model="settings.bottomRotationSpeed"
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
                        <Button
                            class="btn btn-lg w-50"
                            @click="saveBottom"
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BannerUpper from '@/components/banners/BannerUpper'
import CONFIG from "@/config.js"
import Switcher from "@/components/banners/Switcher"
import Button from "@/components/banners/Button"
import BackBunner from "@/components/banners/BackBunner"

export default ({

  components: {
    BannerUpper,    
    Switcher,
    Button,
    BackBunner
  },
    data() {
        return {
            settings: {
                bannersSwitch: true,
                bannersRotationSpeed: "1",
                bottomSwitch: true,
                bottomRotationSpeed: "1",
            },
            banners: [],
            midBanner: {
                url: CONFIG.PICTURE_PLUG_URL,
                bannerType: "Фото на фоне",
            },
            bottom: [],
            times: ["5", "15", "30"],
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.fetchBanners();
            vm.fetchBottom();
            vm.fetchMidBanner();
            vm.loadSettings();
        });
    },
    watch: {
        settings: {
            handler() {
                this.saveSettings();
            },
            deep: true,
        },
    },
    methods: {
        async loadSettings() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/settings"
            );
            if (result) {
                this.settings = result;
            }
        },
        saveSettings() {
            const payload = this.settings;
            const path = "/settings";
            this.$store.dispatch("writeToDatabase", { payload, path });
        },
        addBanner() {
            this.banners.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
                text: "описание",
            });
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
        async saveBanners() {
            const payload = this.banners
            let path = "/banners"
            this.$store.getters['getBannerImages'].forEach(async banner => {
                const downloadUrl = await this.$store.dispatch("uploadToStorage", {
                    file: banner.file,
                    path: "/images/"
                })
                const found = payload.find(item => item.id == banner.id)
                if(found) {
                    found.url = downloadUrl
                    await this.$store.dispatch("writeToDatabase", {payload: found, path })
                }
            })
            this.$store.commit('clearBannerImages')
            // await this.$store.dispatch("writeToDatabase", { payload, path })
            
        },
        async fetchBanners() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/banners"
            );
            if (result) this.banners = result;
        },
        async changeMidBanner() {
            const path = "/midbanners";
            const payload = this.midBanner;
            await this.$store.dispatch("writeToDatabase", { payload, path });
        },
        async removeMidBanner() {
            this.midBanner.url = CONFIG.PICTURE_PLUG_URL;
            this.midBanner.bannerType = "Просто фон";
        },
        async fetchMidBanner() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/midbanners"
            );
            if (result) {
                this.midBanner.url = result.url;
                this.midBanner.bannerType = result.bannerType;
            }
        },
        addBottom() {
            const action = {
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            };
            this.bottom.push(action);
        },
        async removeBottom(target) {
            this.bottom = this.bottom.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
        async saveBottom() {
            const payload = this.bottom;
            const path = "/bannersBottom";
            await this.$store.dispatch("writeToDatabase", { payload, path });
            // this.$successMessage("Данные сохранены");
        },
        async fetchBottom() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/bannersBottom"
            );
            if (result) this.bottom = result;
        },
    }
  
})
</script>

<style lang="scss" scoped>
.card-group {
    gap: 0.5rem
}
</style>