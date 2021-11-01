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
                                        BunnerUpper
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнего баннера</div>
                                    <div class="card-body">
                                        BunnerUpper
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            BunnerUpper
                                        </div>
                                        <button class="btn btn-outline-info btn-block my-2">Добавить</button>
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
                                                        @click="editItem(index)"
                                                        >
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                        <button
                                                        class="btn btn-danger mx-3"
                                                        @click="removeItem(hall)"
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
                                        BunnerUpper
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Фото верхнього банера</div>
                                    <div class="card-body">
                                        BunnerUpper
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            BunnerUpper
                                        </div>
                                        <button class="btn btn-outline-info btn-block my-2">Додати</button>
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

export default ({
    name: 'cinema-edit',
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
            this.cinema.halls = this.cinema.halls.filter((item) => item != target)
            this.save()
        },
        add() {
            const newHall = {
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
                    url: "/img/uploadPicture.jpg",
                    urlUA: "/img/uploadPicture.jpg",
                    title: "/img/uploadPicture.jpg",
                    titleUA: "/img/uploadPicture.jpg",
                    keywords: "key words here",
                    keywordsUA: "key words here",
                    description: "/img/uploadPicture.jpg",
                    descriptionUA: "/img/uploadPicture.jpg",
                }
                    
            }
            this.cinema.halls.push(newHall)
            this.save()
        },
        submit() {
            this.save()
            
            this.$router.push({
                name: "cinema"
            });
        }
    }
    
})
</script>
