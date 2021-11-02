<template>
    <div v-if="cinema" ref="form">
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
                                        v-model="cinema.title"
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
                                    v-model="cinema.description"
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
                                    v-model="cinema.conditions"
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
                                        :card="cinema.baseImg"
                                        @change-card="changedLogo"
                                        @remove-banner="removeLogo"
                                        />
                                    </div> 
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнего баннера</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="cinema.banner"
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
                                            v-for="pic in cinema.img"
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
                                                v-for="(hall, index) in cinema.halls"
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
                                            v-model="cinema.SEO.url"
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
                                            v-model="cinema.SEO.title"
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
                                            v-model="cinema.SEO.keywords"
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
                                            v-model="cinema.SEO.description"
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
                                    v-model="cinema.titleUA"
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
                                    v-model="cinema.descriptionUA"
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
                                    v-model="cinema.conditionsUA"
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
                                        :card="cinema.baseImgUA"
                                        @change-card="changedLogoUA"
                                        @remove-banner="removeLogoUA"
                                        />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнього банера</div>
                                    <div class="card-body">
                                        <BackBunner 
                                        :card="cinema.bannerUA"
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
                                            v-for="pic in cinema.imgUA"
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
                                                v-for="(hall, index) in cinema.halls"
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
                                            v-model="cinema.SEO.urlUA"
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
                                            v-model="cinema.SEO.titleUA"
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
                                            v-model="cinema.SEO.keywordsUA"
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
                                            v-model="cinema.SEO.descriptionUA"
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
            type: Number,
            required: true
        }
    },
    data() {
        return {
            cinema: null
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.load())
    },
    methods: {
        async load() {
            const path = `/cinema/${this.cinemaIndex}`
            const result = await this.$store.dispatch('readFromDatabase', path)
            if(result) this.cinema = result
        },
        async save() {
            const payload = this.cinema
            const path = `/cinema/${this.cinemaIndex}`
            return await this.$store.dispatch('writeToDatabase', {
                payload,
                path
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
            this.cinema.halls = this.cinema.halls.filter((item) => item != target)
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
            const newHall = {
                id: `${Date.now()}${Math.random()}`,
                hallNumber: "#",
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
            this.cinema.halls.push(newHall)
            this.save()
        },
        changedLogo(target) {
            this.cinema.baseImg.url = target.url
        },
        changedLogoUA(target) {
            this.cinema.baseImgUA.url = target.url
        },
        changedBanner(target) {
            this.cinema.banner.url = target.url
        },
        changedBannerUA(target) {
            this.cinema.bannerUA.url = target.url
        },
        removeLogo: async function () {
            this.cinema.baseImg.url = CONFIG.PICTURE_PLUG_URL
        },
        removeLogoUA: async function () {
            this.cinema.baseImgUA.url = CONFIG.PICTURE_PLUG_URL
        },
        removeBanner: async function () {
            this.cinema.banner.url = CONFIG.PICTURE_PLUG_URL
        },
        removeBannerUA: async function () {
            this.cinema.bannerUA.url = CONFIG.PICTURE_PLUG_URL
        },
        addPicture() {
            this.cinema.img.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        addPictureUA() {
            this.cinema.imgUA.push({
                id: `${Date.now()}${Math.random()}`,
                url: CONFIG.PICTURE_PLUG_URL,
            })
        },
        removePicture: async function (target) {
            this.cinema.img = this.cinema.img.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        removePictureUA: async function (target) {
            this.cinema.imgUA = this.cinema.imgUA.filter(
                (element) => element != target
            )
            if (target.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch("removeFromStorage", target.url)
        },
        submit() {
            this.save()
            this.$router.push({
                name: "cinema"
            })
        },
        back() {
            this.$router.push({
                name: "cinema" 
            })
        }
    }
    
})
</script>
