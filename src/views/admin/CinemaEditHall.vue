<template>
     <div ref="form">
        <div class="card">
            <div class="card-body">
                    <div class="card-header p-0 border-bottom-0">
                        <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                            <li class="nav-item">
                                <a 
                                href="#custom-tabs-two-ru" 
                                class="nav-link active"
                                id="custom-tabs-two-ru-tab"
                                data-toggle="pill"
                                role="tab"
                                >
                                Русский
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                href="#custom-tabs-two-ua" 
                                class="nav-link"
                                id="custom-tabs-two-ua-tab"
                                data-toggle="pill"
                                role="tab"
                                >
                                Украинский
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">
                            <div class="tab-pane fade show active" id="custom-tabs-two-ru" role="tabpanel">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Номер зала</span>
                                    </div>
                                    <input
                                        v-model="hall.hallNumber"
                                        type="text"
                                        class="form-control"
                                        placeholder="Номер зала"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Описание зала</span>
                                    </div>
                                    <textarea 
                                    v-model="hall.description"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Описание зала"
                                    >
                                    </textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Схема зала</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="hall.hallLayout"
                                        @change-card="changedHall"
                                        @remove-banner="removeHall"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнего баннера</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="hall.banner"
                                        @change-card="changedBanner"
                                        @remove-banner="removeBanner"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in hall.img"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="removePicture"
                                            />
                                        </div>
                                        <button 
                                        class="btn btn-outline-info btn-block my-2"
                                        @click.prevent="addPicture"
                                        >
                                        Добавить
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">SEO</div>
                                    <div class="card-body">
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.url"
                                            type="text" 
                                            class="form-control"
                                            placeholder="URL"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Title</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.title"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Title"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Keywords</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.keywords"
                                            type="text" 
                                            class="form-control"
                                            placeholder="keywords"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Description</span>
                                            </div>
                                            <textarea 
                                            v-model="hall.SEO.description"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Описание"
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <button
                                        type="button"
                                        class="btn btn-info btn-block btn-lg"
                                        @click="submit"
                                    >
                                        Сохранить и выйти
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-info btn-block btn-lg"
                                        @click="back"
                                    >   
                                        Вернутся
                                    </button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="custom-tabs-two-ua" role="tabpanel">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Номер зала</span>
                                    </div>
                                    <input 
                                    v-model="hall.hallNumber"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Номер зала"
                                    >
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Опис</span>
                                    </div>
                                    <textarea 
                                    v-model="hall.descriptionUA"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Опис"
                                    >
                                    </textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Схема залу</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="hall.hallLayoutUA"
                                        @change-card="changedHallUA"
                                        @remove-banner="removeHallUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Верхній банер</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="hall.bannerUA"
                                        @change-card="changedBannerUA"
                                        @remove-banner="removeBannerUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in hall.imgUA"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="removePictureUA"
                                            />
                                        </div>
                                        <button 
                                        class="btn btn-outline-info btn-block my-2"
                                        @click.prevent="addPictureUA"
                                        >
                                        Додати
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">SEO</div>
                                    <div class="card-body">
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.urlUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="URL"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Title</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.titleUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Title"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Keywords</span>
                                            </div>
                                            <input 
                                            v-model="hall.SEO.keywordsUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="keywords"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Description</span>
                                            </div>
                                            <textarea 
                                            v-model="hall.SEO.descriptionUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Опис"
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <button
                                        type="button"
                                        class="btn btn-info btn-block btn-lg"
                                        @click="submit"
                                    >
                                        Зберегти і вийти
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-info btn-block btn-lg"
                                        @click="back"
                                    >
                                        Повернутись
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import CONFIG from '@/config.js'
import BackBunner from '@/components/banners/BackBunner.vue'
import BannerUpper from '@/components/banners/BannerUpper.vue'

export default ({
    name: 'cinema-hall',
    components: {
        BackBunner,
        BannerUpper
    },
    props: {
        hallIndex: {
            type: Number,
            required: false
        },
        cinemaIndex: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            hall: {
                id: `${Date.now()}${Math.random()}`,
                hallNumber: "",
                date: Date.now(),
                description: "",
                descriptionUA: "",
                hallLayout: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                hallLayoutUA: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                banner: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                bannerUA: {
                    url: CONFIG.PICTURE_PLUG_URL
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
                SEO: {
                    url: "",
                    urlUA: "",
                    title: "",
                    titleUA: "",
                    keywords: "",
                    keywordsUA: "",
                    description: "",
                    descriptionUA: "",
                }
            }
        }
    },
    methods: {
        submit() {
            this.$store.commit('setHall', this.hall)
            this.$router.push({
                name: "cinema-edit"
            })
        },
        back() {
            this.$router.push({
                name: "cinema-edit"
            })
        },
        addPicture() {
            this.hall.img.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },
        addPictureUA() {
            this.hall.imgUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            });
        },
        removePicture: async function (target) {
            this.hall.img = this.hall.img.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
        removePictureUA: async function (target) {
            this.hall.imgUA = this.hall.imgUA.filter((element) => element != target);
            if (target.url == CONFIG.PICTURE_PLUG_URL) return;
            await this.$store.dispatch("removeFromStorage", target.url);
        },
        changedHall(target) {
            this.hall.hallLayout.url = target.url;
        },
        changedHallUA(target) {
            this.hall.hallLayoutUA.url = target.url;
        },
        changedBanner(target) {
            this.hall.banner.url = target.url;
        },
        changedBannerUA(target) {
            this.hall.bannerUA.url = target.url;
        },
        removeHall: async function () {
            this.hall.hallLayout.url =
                CONFIG.PICTURE_PLUG_URL;
        },
        removeHallUA: async function () {
            this.hall.hallLayoutUA.url =
                CONFIG.PICTURE_PLUG_URL;
        },
        removeBanner: async function () {
            this.hall.banner.url =
                CONFIG.PICTURE_PLUG_URL;
        },
        removeBannerUA: async function () {
            this.hall.bannerUA.url =
                CONFIG.PICTURE_PLUG_URL;
        },
    }
})
</script>
