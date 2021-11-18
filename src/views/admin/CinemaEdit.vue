<template>
    <div v-if="currentCinema" ref="form">
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
                                        <span class="input-group-text">Название</span>
                                    </div>
                                    <input
                                        v-model="currentCinema.title"
                                        type="text"
                                        class="form-control"
                                        placeholder="Название"
                                    />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Описание</span>
                                    </div>
                                    <textarea 
                                    v-model="currentCinema.description"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Описание"
                                    >
                                    </textarea>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Условия</span>
                                    </div>
                                    <textarea 
                                    v-model="currentCinema.conditions"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Описание"
                                    >
                                    </textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Логотип</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="currentCinema.baseImg"
                                        @change-card="changedLogo"
                                        @remove-banner="removeLogo"
                                        />
                                    </div> 
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнего баннера</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="currentCinema.banner"
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
                                            v-for="pic in currentCinema.img"
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
                                    <div class="card-header">
                                        <h3>Список залов</h3>
                                    </div>
                                    <div class="card-body table-responsive p-0">
                                        <table class="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Название</th>
                                                    <th>Дата создания</th>
                                                    <th>Редактировать/Удалить</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                v-for="(hall, index) in currentCinema.halls"
                                                :key="hall.id"
                                                >
                                                    <td>{{ hall.hallNumber }}</td>
                                                    <td>{{ new Date(hall.date).toLocaleDateString() }}</td>
                                                    <td>
                                                        <button
                                                        class="btn btn-info mx-3"
                                                        @click="edit(index)"
                                                        >
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                        class="btn btn-danger mx-3"
                                                        @click="remove(hall)"
                                                        >
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button 
                                        class="btn btn-outline-info btn-block"
                                        type="button"
                                        @click="add"
                                        >
                                        Создать зал
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
                                            v-model="currentCinema.SEO.url"
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
                                            v-model="currentCinema.SEO.title"
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
                                            v-model="currentCinema.SEO.keywords"
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
                                            v-model="currentCinema.SEO.description"
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
                                        <span class="input-group-text">Назва</span>
                                    </div>
                                    <input 
                                    v-model="currentCinema.titleUA"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Назва"
                                    >
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Опис</span>
                                    </div>
                                    <textarea 
                                    v-model="currentCinema.descriptionUA"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Опис"
                                    >
                                    </textarea>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Умови</span>
                                    </div>
                                    <textarea 
                                    v-model="currentCinema.conditionsUA"
                                    type="text" 
                                    class="form-control"
                                    placeholder="Опис"
                                    >
                                    </textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Логотип</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="currentCinema.baseImgUA"
                                        @change-card="changedLogoUA"
                                        @remove-banner="removeLogoUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнього банера</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="currentCinema.bannerUA"
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
                                            v-for="pic in currentCinema.imgUA"
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
                                    <div class="card-header">
                                        <h3>Список залів</h3>
                                    </div>
                                    <div class="card-body table-responsive p-0">
                                        <table class="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Назва</th>
                                                    <th>Дата створення</th>
                                                    <th>Редагувати/Видалити</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                v-for="(hall, index) in currentCinema.halls"
                                                :key="hall.id"
                                                >
                                                    <td>{{ hall.hallNumber }}</td>
                                                    <td>{{new Date(hall.date).toLocaleDateString()}}</td>
                                                    <td>
                                                        <button
                                                        class="btn btn-info mx-3"
                                                        @click="edit(index)"
                                                        >
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                        class="btn btn-danger mx-3"
                                                        @click="remove(hall)"
                                                        >
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button 
                                        class="btn btn-outline-info btn-block"
                                        type="button"
                                        @click="add"
                                        >
                                        Створити зал
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
                                            v-model="currentCinema.SEO.urlUA"
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
                                            v-model="currentCinema.SEO.titleUA"
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
                                            v-model="currentCinema.SEO.keywordsUA"
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
                                            v-model="currentCinema.SEO.descriptionUA"
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
    name: 'cinema-edit',
    components: {
        BackBunner,
        BannerUpper
    },
    props: {
        cinemaIndex: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            currentCinema: {
                id: `${Date.now()}${Math.random()}`,
                title: "Новый кинотеатр",
                titleUA: "Новий кінотеатр",
                description: "",
                descriptionUA: "",
                conditions: "",
                conditionsUA: "",
                baseImg: {
                    url: CONFIG.PICTURE_PLUG_URL
                },
                baseImgUA: {
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
                halls: [
                    {
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
                    },
            }
        }
    },
    async mounted() {
        if(this.cinemaIndex) {
            const cinema = await this.getById()

            cinema.on('value', snapshot => {
                this.currentCinema = snapshot.val()
            })
        }
    },
    methods: {
        submit() {
            if(this.cinemaIndex) {
                this.updateToDatabase().then(() => {
                    this.$router.push({
                        name: "cinema"
                    })
                })
            } else {
                this.save().then(() => {
                    this.$router.push({
                        name: "cinema"
                    })
                })
            }
        },
        async updateToDatabase() {
            const payload = this.currentCinema
            const path = `/cinema/${this.cinemaIndex}`
            return await this.$store.dispatch("updateToDatabase", {
                payload,
                path,
            })
        },
        async save() {
            const payload = this.currentCinema
            const path = `/cinema`
            return await this.$store.dispatch('writeInstanceToDatabase', {
                payload,
                path
            })
        },
        async getById() {
            const payload = this.cinemaIndex
            const path = `/cinema`
            return await this.$store.dispatch("getFromDatabaseById", {
                payload,
                path,
            })
        },
        async remove(target) {
            if (!window.confirm("Удалить?")) return
            this.removeFromStorage(target.hallLayout)
            this.removeFromStorage(target.hallLayoutUA)
            this.removeFromStorage(target.banner)
            this.removeFromStorage(target.bannerUA)
            if (target.img) {
                target.img.forEach((item) =>
                    this.removeFromStorage(item)
                )
            }
            if (target.imgUA) {
                target.imgUA.forEach((item) =>
                    this.removeFromStorage(item)
                )
            }
            this.currentCinema.halls = this.currentCinema.halls.filter((item) => item != target)
            this.save()
        },
        async removeFromStorage(picture) {
            if (picture.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", picture.url)
        },
        edit(index) {
            this.save()
            this.$router.push({
                name: "cinema-hall",
                params: { cinemaIndex: this.cinemaIndex, hallIndex: index },
            })
        },
        add() {
            this.$router.push({
                name: 'cinema-hall'
            })
        },
        changedLogo(target) {
            this.currentCinema.baseImg.url = target.url
        },
        changedLogoUA(target) {
            this.currentCinema.baseImgUA.url = target.url
        },
        changedBanner(target) {
            this.currentCinema.banner.url = target.url
        },
        changedBannerUA(target) {
            this.currentCinema.bannerUA.url = target.url
        },
        removeLogo: async function () {
            this.currentCinema.baseImg.url = CONFIG.PICTURE_PLUG_URL
        },
        removeLogoUA: async function () {
            this.currentCinema.baseImgUA.url = CONFIG.PICTURE_PLUG_URL
        },
        removeBanner: async function () {
            this.currentCinema.banner.url = CONFIG.PICTURE_PLUG_URL
        },
        removeBannerUA: async function () {
            this.currentCinema.bannerUA.url = CONFIG.PICTURE_PLUG_URL
        },
        addPicture() {
            this.currentCinema.img.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        addPictureUA() {
            this.currentCinema.imgUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        removePicture: async function (target) {
            this.currentCinema.img = this.currentCinema.img.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        removePictureUA: async function (target) {
            this.currentCinema.imgUA = this.currentCinema.imgUA.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        back() {
            this.$router.push({
                name: "cinema" 
            })
        }
    }
    
})
</script>
