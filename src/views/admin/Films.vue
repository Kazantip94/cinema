
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
        :film="film"  
        @film-clicked="edit(film.uuid)"
        @remove-film="removeFilm(film)"
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
        <h3>Список фильмов которые покажут скоро</h3>
      </div>
      <div class="card-body card-group">
        <CardFilms 
        v-for="(film, index) in filmsSoon"
        :key="index"
        :film="film"  
        @film-clicked="edit(film.uuid)"
        @remove-film="removeFilm(film)"
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
    name: "films",
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
        const currentFilms = []
        for(let prop in this.films) {
          if(this.films[prop].isCurrentFilm) {
            currentFilms.push(this.films[prop])
          }
          
        }
        return currentFilms

      },
      filmsSoon() {
        const soonFilms = []
        for(let prop in this.films) {
          if(!this.films[prop].isCurrentFilm) {
            soonFilms.push(this.films[prop])
          }
          
        }
        return soonFilms
      }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => vm.loadToDatabase())
    },
    
    methods: {
      
    add(isCurrentFilm) {
      this.$router.push({
        name: 'film-edit',
        params: {isCurrentFilm}
      })
    },
    async removeFilm(film) {
      this.removeFromStorage(film.baseImg)
      this.removeFromStorage(film.baseImgUA)
      if (film.img) {
                film.img.forEach((item) =>
                    this.removeFromStorage(item)
                )
            }
      if (film.imgUA) {
                film.imgUA.forEach((item) =>
                    this.removeFromStorage(item)
                )
            }
      this.$store.dispatch("removeFromDatabase", {payload: film.uuid, path: "films"}).then(() => {
            this.$delete(this.films, film.uuid)
        })
            
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
      if (result) {
        this.films = result
        for(let key in this.films) {
          this.films[key].uuid = key
        }
        
        console.log(this.films)
      }
    },
    edit(uuid) {
      this.$router.push({
              name: "film-edit",
              params: { filmIndex: uuid }
      })
    }
  }  
}
</script>
