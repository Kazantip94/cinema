<template>
    <div class="card">
      <div class="card-header text-center">
        <h3>Список кинотеатров</h3>
      </div>
      <div  class="card-body card-group">
          <CardFilms 
            v-for="cinema in cinemas"
            :key="cinema.id"
            :film="cinema"
            @film-clicked="edit(cinema.uuid)"
            @remove-film="remove(cinema)"
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
            this.$router.push({
                name: 'cinema-edit'
            })
        },
        async save() {
            const payload = this.cinemas
            const path = '/cinema'
            return await this.$store.dispatch('writeToDatabase', {payload, path })
        },
        async remove(cinema) {
            if(!window.confirm('Удалить?')) return
            this.removeFromStorage(cinema.baseImg)
            if(cinema.img) {
                cinema.img.forEach((item) => this.removeFromStorage(item))
            }
            this.$store.dispatch("removeFromDatabase", {payload: cinema.uuid, path: "cinema"}).then(() => {
            this.$delete(this.cinemas, cinema.uuid)
            })
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
            if (result) {
                this.cinemas = result
                for(let key in this.cinemas) {
                    this.cinemas[key].uuid = key
                }
            } 
        },
        edit(uuid) {
            this.$router.push({
                name: 'cinema-edit',
                params: { cinemaIndex: uuid}
            })
        }
    }  
})
</script>
