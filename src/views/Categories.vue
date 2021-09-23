<template>
  <section class="content-header">
    <div class="container-fluid"> 
      <div class="row">
        <div class="col-md-12">
          <h1>На главной верх</h1>
          <div class="banner-upper">
            <div class="size">
              <span class="top">Размер: 1000х190</span>
              <button class="btn btn-outline-secondary on-off">ON/OFF</button>
            </div>
            <BannerUpper />
            <div class="bottom">
              <span class="speed">Скорость вращения</span>
              <select class="form-control">
                <option>5с</option>
              </select>
              <button class="btn btn-outline-secondary btns">Cохранить</button>
            </div>

          </div>
          <h2>Сквозной банер на заднем фоне</h2>
          <div class="banner-back">
          </div>
          <h3>На главной Новости Акции</h3>
          <div class="banner-stock"> 
             <div class="size">
              <span class="top">Размер: 1000х190</span>
              <button class="on-off"></button>
            </div>
            <ul class="list-default flex">
              <li>
                <banner-card />
              </li>
            </ul>
            <div class="bottom">
              <span class="speed">Скорость вращения</span>
              <select>
                <option>test</option>
              </select>
              <button class="btns"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BannerUpper from '../components/banners/BannerUpper'

export default ({

  components: {
    BannerUpper
  }
  
})
</script>


<style lang="scss">
  .banner-upper {
    height: 500px;
    border: 1px solid black;
    margin: 50px 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .size {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 30px;
  }
  .bottom {
    display: flex;
    align-items: center;
    margin: 30px 90px;
  }
  .speed {
    margin-right: 30px;
  }
  .btns {
    margin-left: 70px;
  }
  .form-control {
    width: 70px;
  }
  .banner-back {
    height: 200px;
    border: 1px solid black;
    margin: 50px 50px;
    border-radius: 15px;
  }
  .banner-stock {
    height: 300px;
    border: 1px solid black;
    margin: 0 50px;
    border-radius: 15px;
  }

</style>