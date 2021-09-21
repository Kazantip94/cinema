<template>
  <section class="content-header">
    <div class="container-fluid"> 
      <div class="row">
        <div class="col-md-12">
          <div class="banner-upper">
            <h1>На главной верх</h1>
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
          <div class="banner-back">
            <h1>Сквозной банер на заднем фоне</h1>
          </div>
          <div class="banner-stock">
            <h1>На главной Новости Акции</h1>
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


<style lang="scss">
  .banner-upper {
    height: 500px;
    border: 1px solid black;
    margin: 50px 50px;
  }
  .banner-back {
    height: 200px;
    border: 1px solid black;
    margin: 50px 50px;
  }
  .banner-stock {
    height: 300px;
    border: 1px solid black;
    margin: 0 50px;
  }

</style>