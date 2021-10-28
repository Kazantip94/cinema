<template>
    <div class="card border shadow m-3">
        <button type="button" class="close card-header text-right pr-1">
            <span @click="$emit('remove-film', film)">&times;</span>
        </button>
        <img
            class="card-img-top img-responsive"
            :src="film.baseImg.url"
            alt=""
            @click="edit"
        />

        <h5 class="card-footer text-center">
            {{ film.title | cut }}
        </h5>
    </div>
</template>

<script>
export default {
    name: "CardFilms",
    filters: {
        cut: function (value) {
            if (!value) return "";
            value = value.toString();
            if (value.length < 18) return value;
            return value.slice(0, 14) + " ...";
        },
    },
    props: {
        film: {
            type: Object,
            default: null,
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        edit() {
            this.$router.push({
                name: "film",
                params: { id: this.index }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    min-width: 250px;
    max-width: 250px;
    height: 322px;
    cursor: pointer;
    & img {
        height: 75%;
    }
}
</style>