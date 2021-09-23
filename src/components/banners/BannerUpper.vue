<template>
    <div class="banner">
        <div class="banner-item">
            <i class="fas fa-window-close"></i>
            <img class="img-upper" src="" alt="">
            <div class="div">
                <img 
                :src="avatar" 
                alt="Image" 
                height="150">
                <input type="file" @change="GetImage">
            </div>
            <div class="inputs-group">
                <div class="inputs">
                    <label for="url">URL:</label>
                    <input/>
                </div>
                <div class="inputs">
                    <label for="url">Текст:</label>
                    <input />
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
    }
</style>
