<template>
    <div class="banner">
        <div class="banner-item">
            <i class="fas fa-window-close close"></i>
            <img class="img-upper" src="" alt="">
            <div class="select-image">
                <img 
                :src="avatar" 
                alt="Image" 
                height="150"
                width="100%"
                >
                <label class="btn btn-outline-secondary btn-block">
                    <span class="add">Добавить</span>
                    <input type="file" accept="image/*" hidden="hidden" @change="GetImage">
                </label>
            </div>
            <div class="input-group input-group-sm mt-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">URL</span>
                    <input type="text" aria-label="Current URL" class="form-control">
                </div>
                <div class="input-group-prepend">
                    <span class="input-group-text">Текст</span>
                    <input type="text" aria-label="Current URL" class="form-control">
                </div>
            </div>
        </div>     
    </div>
</template>

<script>


export default ({
    name: 'BannerUpper',
    data () {
        return {
            avatar: null
        }
    },
    methods: {
        GetImage(e) {
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.avatar = e.target.result
            }
        }
    }
})
</script>

<style lang="scss">
    .banner {
        width: 200px;
        height: 300px;
        margin: 0 15px;
    }
    .banner-item {
        display: flex;
        flex-direction: column;
        border: 1px solid silver;
    }
    .close {
        margin-left: 175px;
    }
</style>
