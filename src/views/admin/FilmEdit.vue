<template>
    <div v-if="currentFilm" ref="form">
            <div class="card-body">
                <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header">
                        <ul 
                        class="nav nav-tabs"
                        id="custom-tabs-two-tab"
                        role="tablist"
                        >
                            <li class="nav-item">
                                <a
                                id="custom-tabs-two-ua-tab"
                                class="nav-link"
                                data-toggle="pill"
                                href="#custom-tabs-two-ua"
                                role="tab"
                                >Украинский</a>
                            </li>
                            <li class="nav-item">
                                <a
                                id="custom-tabs-two-ru-tab"
                                class="nav-link active"
                                data-toggle="pill"
                                href="#custom-tabs-two-ru"
                                role="tab">Русский</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">
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
                                        v-model="currentFilm.title"
                                        type="text"
                                        class="form-control"
                                        placeholder="Название фильма"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Описание</span>
                                    </div>
                                    <textarea
                                    v-model="currentFilm.description"
                                    type="text"
                                    class="form-control"
                                    placeholder="Описание фильма"
                                    ></textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Главная картинка</div>
                                    <div class="card-body">
                                        <BackBunner
                                        :card="currentFilm.baseImg"
                                        @change-card="changedLogo"
                                        @remove-banner="removeLogo"
                                         />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in currentFilm.img"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="removeFilmPicture"
                                            />
                                        </div>
                                        <button 
                                        @click.prevent="addFilmPicture"
                                        class="btn btn-outline-info btn-block my-2">
                                            Добавить картинку
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        Ссылка на трейлер
                                    </div>
                                    <div class="card-body">
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.trailerLink"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Ссылка на видео в youtube"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Тип кино</div>
                                    <div class="card-body">
                                        <div class="col-sm-6">
                                            <div class="form-group d-flex">
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="3D"
                                                    value="3D"
                                                    v-model="currentFilm.filmType"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >3D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="2D"
                                                    v-model="currentFilm.filmType"
                                                    value="2D"
                                                    checked
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >2D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="IMAX"
                                                    v-model="currentFilm.filmType"
                                                    value="IMAX"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >IMAX</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">SEO блок</div>
                                    <div class="card-body">
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.url"
                                            type="text" 
                                            class="form-control"
                                            placeholder="url"
                                            >
                                        </div>
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Title</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.title"
                                            type="text" 
                                            class="form-control"
                                            placeholder="title"
                                            >
                                        </div>
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Keywords</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.keywords"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Keywords"
                                            >
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Description</span>
                                            </div>
                                            <textarea
                                            v-model="currentFilm.SEO.description"
                                            type="text"
                                            class="form-control"
                                            placeholder="Описание"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    class="btn btn-info col-4 pt-2 pb-2 mt-3 mb-3 offset-1"
                                    type="button"
                                    @click="submit"
                                    >
                                    Сохранить и выйти
                                    </button>
                                    <button 
                                    class="btn btn-outline-warning pt-2 pb-2 mt-3 mb-3 col-4 offset-2"
                                    type="button"
                                    @click="reset"
                                    >
                                    Вернуть базовую версию
                                    </button>
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
                                        v-model="currentFilm.titleUA"
                                        type="text"
                                        class="form-control"
                                        placeholder="Назва фільму"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Опис</span>
                                    </div>
                                    <textarea
                                    v-model="currentFilm.descriptionUA"
                                    type="text"
                                    class="form-control"
                                    placeholder="Опис фільму"
                                    ></textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Головне зображення</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="currentFilm.baseImgUA"
                                        @change-card="changedLogoUA"
                                        @remove-banner="removeLogoUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея зображень</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in currentFilm.imgUA"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="removeFilmPictureUA"
                                            />
                                        </div>
                                        <button 
                                        @click.prevent="addFilmPictureUA"
                                        class="btn btn-outline-info btn-block my-2">
                                            Додати зображення
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        Посилання на трейлер
                                    </div>
                                    <div class="card-body">
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.trailerLinkUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Посилання на відео в youtube"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Тип кіно</div>
                                    <div class="card-body">
                                        <div class="col-sm-6">
                                            <div class="form-group d-flex">
                                                <div class="form-check mx-3">
                                                    <input 
                                                    v-model="currentFilm.filmTypeUA"
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="3D"
                                                    value="3D"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >3D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    v-model="currentFilm.filmTypeUA"
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="2D"
                                                    value="2D"
                                                    checked
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >2D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    v-model="currentFilm.filmTypeUA"
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="IMAX"
                                                    value="IMAX"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >IMAX</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">SEO блок</div>
                                    <div class="card-body">
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.urlUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="url"
                                            >
                                        </div>
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Title</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.titleUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="title"
                                            >
                                        </div>
                                        <div class="input-group mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Keywords</span>
                                            </div>
                                            <input 
                                            v-model="currentFilm.SEO.keywordsUA"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Keywords"
                                            >
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Description</span>
                                            </div>
                                            <textarea
                                            v-model="currentFilm.SEO.descriptionUA"
                                            type="text"
                                            class="form-control"
                                            placeholder="Опис"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    class="btn btn-info col-4 pt-2 pb-2 mt-3 mb-3 offset-1"
                                    type="button"
                                    @click="submit"
                                    >
                                    Зберегти і вийти
                                    </button>
                                    <button 
                                    class="btn btn-outline-warning pt-2 pb-2 mt-3 mb-3 col-4 offset-2"
                                    type="button"
                                    @click="reset"
                                    >
                                    Повернути базову версію
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
  name: "film",
  components: {
      BackBunner,
      BannerUpper
  },
  props: {
        isCurrentFilm: {
            type: Boolean,
            required: false,
        },
        filmIndex: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            currentFilm: {
                id: `${Date.now()}${Math.random()}`,
                isCurrentFilm: this.isCurrentFilm,
                title: "Новый фильм",
                titleUA: "Новий фільм",
                descriprion: "",
                descriprionUA: "",
                baseImg: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                baseImgUA: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                img: [
                    {
                    id: `${Date.now()}${Math.random()}`,
                    url: CONFIG.PICTURE_PLUG_URL
                    }
                ],
                imgUA: [
                    {
                    id: `${Date.now()}${Math.random()}`,
                    url: CONFIG.PICTURE_PLUG_URL
                    }
                ],
                url: "",
                urlUA: "",
                trailerLink: "http:/youtube.com",
                trailerLinkUA: "http:/youtube.com",
                filmType: "[2D]",
                filmTypeUA: "[2D]",
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
    // beforeRouteEnter(to, from, next) {
    //     next((vm) => vm.loadFromDatabase())
    // },
    async mounted() {
        const film = await this.getById()

        film.on('value', snapshot => {
            this.currentFilm = snapshot.val()
            console.log(snapshot.val())
        })
    },
    methods: {
        // async loadFromDatabase() {
        //     const path = `/films/${this.filmIndex}`
        //     const result = await this.$store.dispatch("readFromDatabase", path)
        //     if (result) this.currentFilm = result
        // },
        submit() {
            this.saveToDatabase().then(() => {
                this.$router.push({
                    name: "films",
                })
            })
        },
        async saveToDatabase() {
            const payload = this.currentFilm
            const path = `/films`
            return await this.$store.dispatch("writeInstanceToDatabase", {
                payload,
                path,
            })
        },
        async getById() {
            const payload = this.filmIndex
            const path = `/films`
            return await this.$store.dispatch("getFromDatabaseById", {
                payload,
                path,
            })
        },
        changedLogo(target) {
            this.currentFilm.baseImg.url = target.url
        },
        changedLogoUA(target) {
            this.currentFilm.baseImgUA.url = target.url
        },
        removeLogo: async function () {
            this.currentFilm.baseImg.url = CONFIG.PICTURE_PLUG_URL
        },
        removeLogoUA: async function () {
            this.currentFilm.baseImgUA.url = CONFIG.PICTURE_PLUG_URL
        },
        reset() {
            this.$router.push({
                name: "films",
            })
        },
        addFilmPicture() {
            this.currentFilm.img.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        addFilmPictureUA() {
            this.currentFilm.imgUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        removeFilmPicture: async function (target) {
            this.currentFilm.img = this.currentFilm.img.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        removeFilmPictureUA: async function (target) {
            this.currentFilm.imgUA = this.currentFilm.imgUA.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
    },
})
</script>
