<template>
    <div class="card">
      <div class="card-header text-center">
        <h3>Список кинотеатров</h3>
      </div>
      <div v-if="cinemas" class="card-body card-group">
          <CardFilms 
            v-for="cinema in cinemas"
            :key="cinema.id"
            :film="cinema"
            @film-clicked="edit(cinema)"
            @remove-film="remove"
          />
      </div>
      <button
      type="button"
      class="btn btn-info btn-lg btn-block mt-5"
      @click="add()"
      >
      Добавить
      </button>
    </div>  
</template>
<script>
import CONFIG from '@/config.js'
import CardFilms from '@/components/films/CardFilms.vue'


export default ({
    name: 'cinema',
    components: {
        CardFilms
    },
    data() {
        return {
            cinemas: []
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.load())
    },
    methods: {
        add() {
            const newCinema = {
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
            this.cinemas.push(newCinema)
            this.save()
        },
        async save() {
            const payload = this.cinemas
            const path = '/cinema'
            return await this.$store.dispatch('writeToDatabase', {
                payload,
                path
            })
        },
        async remove(cinema) {
            if(!window.confirm('Удалить?')) return
            this.removeFromStorage(cinema.baseImg)
            if(cinema.img) {
                cinema.img.forEach((item) => this.removeFromStorage(item))
            }
            this.cinemas = this.cinemas.filter((item) => item != cinema)
            this.save()
        },
        async removeFromStorage(picture) {
            if(picture.url == CONFIG.PICTURE_PLUG_URL) return
            await this.$store.dispatch('removeFromStorage', picture.url)
        },
        async load() {
            const result = await this.$store.dispatch(
                "readFromDatabase",
                "/cinema"
            )
            if (result) this.cinemas = result
        },
        edit(cinema) {
            const index = this.cinemas.findIndex((item) => item == cinema)
            this.$router.push({
                name: 'cinema-edit',
                params: { cinemaIndex: index}
            })
        }
    }  
})
</script>
