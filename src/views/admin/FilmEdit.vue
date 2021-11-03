<template>
    <div v-if="current" ref="form">
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
                                        v-model="current.title"
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
                                    v-model="current.description"
                                    type="text"
                                    class="form-control"
                                    placeholder="Описание фильма"
                                    ></textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Главная картинка</div>
                                    <div class="card-body">
                                        <BackBunner
                                        :card="current.baseImg"
                                        @change-card="changedMainImg"
                                        @remove-banner="removeMainImg"
                                         />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in current.img"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="remove"
                                            />
                                        </div>
                                        <button 
                                        @click.prevent="add"
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
                                            v-model="current.trailerLink"
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
                                                    v-model="current.filmType"
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
                                                    v-model="current.filmType"
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
                                                    v-model="current.filmType"
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
                                            v-model="current.SEO.url"
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
                                            v-model="current.SEO.title"
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
                                            v-model="current.SEO.keywords"
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
                                            v-model="current.SEO.description"
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
                                        v-model="current.titleUA"
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
                                    v-model="current.descriptionUA"
                                    type="text"
                                    class="form-control"
                                    placeholder="Опис фільму"
                                    ></textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Головне зображення</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="current.baseImgUA"
                                        @change-card="changedMainImgUA"
                                        @remove-banner="removeMainImgUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея зображень</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper 
                                            v-for="pic in current.imgUA"
                                            :key="pic.id"
                                            :card="pic"
                                            @remove-card="removeUA"
                                            />
                                        </div>
                                        <button 
                                        @click.prevent="addUA"
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
                                            v-model="current.trailerLinkUA"
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
                                                    v-model="current.filmTypeUA"
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
                                                    v-model="current.filmTypeUA"
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
                                                    v-model="current.filmTypeUA"
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
                                            v-model="current.SEO.urlUA"
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
                                            v-model="current.SEO.titleUA"
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
                                            v-model="current.SEO.keywordsUA"
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
                                            v-model="current.SEO.descriptionUA"
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
    name: "film-edit",
    components: {
      BackBunner,
      BannerUpper
    },
    props: {
        filmIndex: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data() {
        return {
            current: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadFromDatabase())
    },
    methods: {
        async loadFromDatabase() {
            const path = `/film/${this.filmIndex}`
            const result = await this.$store.dispatch("readFromDatabase", path)
            if (result) this.current = result
        },
        submit() {
            this.saveToDatabase()
            this.$router.push({
                name: "films",
            })
        },
        async saveToDatabase() {
            const payload = this.current
            const path = `/film/${this.filmIndex}`
            return await this.$store.dispatch("writeToDatabase", {
                payload,
                path,
            })
        },
        changedMainImg(target) {
            this.current.baseImg.url = target.url
        },
        changedMainImgUA(target) {
            this.current.baseImgUA.url = target.url
        },
        removeMainImg: async function () {
            this.current.baseImg.url = CONFIG.PICTURE_PLUG_URL
        },
        removeMainImgUA: async function () {
            this.current.baseImgUA.url = CONFIG.PICTURE_PLUG_URL
        },
        reset() {
            this.$router.push({
                name: "films" 
            })  
        },
        add() {
            this.current.img.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        addUA() {
            this.current.imgUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        remove: async function (target) {
            this.current.img = this.current.img.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        removeUA: async function (target) {
            this.current.imgUA = this.current.imgUA.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
    },
})
</script>
