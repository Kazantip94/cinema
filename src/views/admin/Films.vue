
<template>
  <div>
    <div class="card">
      <div class="card-header text-center">
        <h3>Список фильмов текущих</h3>
      </div>
      <div class="card-body card-group">
        <CardFilms 
        v-for="(film, index) in filmsCurrent"
        :key="index"
        :index="index"
        :film="film"  
        @remove-film="removeFilm"
        />
      </div>
      <button
      type="button"
      class="btn btn-info btn-lg btn-block"
      @click="add(true)"
      >
      Добавить
      </button>
    </div>
    <div class="card">
      <div class="card-header text-center">
        <h3>Список фильмов текущих</h3>
      </div>
      <div class="card-body card-group">
        <CardFilms 
        v-for="(film, index) in filmsSoon"
        :key="index"
        :index="index"
        :film="film"  
        @remove-film="removeFilm"
        />
      </div>
      <button
      type="button"
      class="btn btn-info btn-lg btn-block"
      @click="add(false)"
      >
      Добавить
      </button>
    </div>
  </div>
    
 
    
</template>

<script>
import CONFIG from "@/config.js"
import CardFilms from "@/components/films/CardFilms.vue"
export default {
    name: "Films",
    components: {
        CardFilms
    },
    data() {
        return {
            films: []
        }
    },
    computed: {
      filmsCurrent() {
        return this.films.filter((item) => item.ListofСurrentFilms)
      },
      filmsSoon() {
        return this.films.filter((item) => !item.ListofСurrentFilms)
      }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadToDatabase())
    },
    methods: {
      add(currentFilms) {
        const newFilm = {
          id: `${Date.now()}${Math.random()}`,
          ListofСurrentFilms: currentFilms,
          title: "",
          titleUA: "",
          descriprion: "",
          descriprionUA: "",
          baseImg: {
            url: CONFIG.PICTURE_PLUG_URL
          },
          baseImgUA: {
            url: CONFIG.PICTURE_PLUG_URL
          },
          img: {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL
          },
          imgUA: {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL
          },
          trailerLink: "http:/youtube.com",
          trailerLinkUA: "http:/youtube.com",
          filmType: "[2D]",
          filmTypeUA: "[2D]",
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
        this.films.push(newFilm)
        this.saveToDatabase()
      },

    async removeFilm(film) {
      if (!window.confirm("Удалить фильм?")) return
      this.removeFromStorage(film.baseImg)
      this.removeFromStorage(film.baseImgUA)
      if (film.img) {
        film.img.forEach((item) =>
          this.removeFromStorage(item)
        )
      }
       if (film.imgUA) {
        film.img.forEach((item) =>
          this.removeFromStorage(item)
        )
      }
      this.films = this.films.filter((item) => item != film)
      this.saveToDatabase()
            // this.saveToDatabase().then(() =>
            //     this.$successMessage("Фильм удален")
            // )
    },
    async removeFromStorage(picture) {
      if (picture.url == CONFIG.PICTURE_PLUG_URL) return
      await this.$store.dispatch("removeFromStorage", picture.url)
    },
    async saveToDatabase() {
      const payload = this.films
      const path = "/films"
      return await this.$store.dispatch("writeToDatabase", { payload, path })
    },
    async loadToDatabase() {
      const result = await this.$store.dispatch(
        "readFromDatabase",
         "/films"
         )
      if (result) this.films = result
    }
  }  
}
</script>
