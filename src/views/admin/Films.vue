
<template>
  <div>
    <div class="card">
      <div class="card-header text-center">
        <h3>Список фильмов текущих</h3>
      </div>
      <div class="card-body card-group">
        <CardFilms 
        v-for="film in filmsCurrent"
        :key="film.id"
        :film="film"
        @film-clicked="editFilm(film)"
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
        v-for="film in filmsSoon"
        :key="film.id"
        :film="film"
        @film-clicked="editFilm(film)"
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
        CardFilms,
    },
    data() {
        return {
            films: [],
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
          title: "Новый фильм",
          descriprion: "",
          baseImg: {
            url: CONFIG.PICTURE_PLUG_URL
          },
          img: {
            id: `${Date.now()}${Math.random()}`,
            url: CONFIG.PICTURE_PLUG_URL
          },
          trailerLink: "http:/rezka",
          filmType: "[2D]",
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
    editFilm(film) {
      const index = this.films.findIndex((item) => item == film);
      this.$router.push({
          name: "filmInfo",
          params: { filmIndex: index }
      })
    },
    async removeFilm(film) {
      if (!window.confirm("Удалить фильм?")) return
      this.removeFromStorage(film.baseImg)
      // if (film.img) {
      //   film.img.forEach((item) =>
      //   this.removeFromStorage(item)
      //   )
      // }
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
