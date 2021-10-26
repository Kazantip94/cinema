<template>
    <div ref="form">
            <div class="card-body">
                <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header">
                        <ul 
                        class="nav nav-tabs"
                        id="custom-tabs-two-tab"
                        role="tablist"
                        >
                            <li class="nav-item">
                                <a
                                id="custom-tabs-two-ua-tab"
                                class="nav-link"
                                data-toggle="pill"
                                href="#custom-tabs-two-ua"
                                role="tab"
                                >Украинский</a>
                            </li>
                            <li class="nav-item">
                                <a
                                id="custom-tabs-two-ru-tab"
                                class="nav-link active"
                                data-toggle="pill"
                                href="#custom-tabs-two-ru"
                                role="tab">Русский</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="custom-tabs-two-tabContent">
                            <div
                            id="custom-tabs-two-ru"
                            class="tab-pane fade show active"
                            role="tabpanel"
                            >
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Название</span>
                                    </div>
                                    <input
                                        
                                        type="text"
                                        class="form-control"
                                        placeholder="Название фильма"
                                    />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Описание</span>
                                    </div>
                                    <textarea
                                    type="text"
                                    class="form-control"
                                    placeholder="Описание фильма"
                                    ></textarea>
                                </div>
                                <div class="card">
                                    <div class="card-header">Главная картинка</div>
                                    <div class="card-body">
                                        <BackBunner />
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Галерея картинок</div>
                                    <div class="card-body">
                                        <div class="card-group">
                                            <BannerUpper />
                                        </div>
                                        <button class="btn btn-outline-info btn-block my-2">
                                            Добавить картинку
                                        </button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        Ссылка на трейлер
                                    </div>
                                    <div class="card-body">
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Ссылка на видео в youtube"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">Тип кино</div>
                                    <div class="card-body">
                                        <div class="col-sm-6">
                                            <div class="form-group d-flex">
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="3D"
                                                    value="3D"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >3D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="2D"
                                                    value="2D"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >2D</label>
                                                </div>
                                                <div class="form-check mx-3">
                                                    <input 
                                                    type="checkbox" 
                                                    class="form-check-input"
                                                    id="IMAX"
                                                    value="IMAX"
                                                    >
                                                    <label
                                                    class="form-check-label"
                                                    >IMAX</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">SEO блок</div>
                                    <div class="card-body">
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">URL</span>
                                            </div>
                                            <input 

                                            type="text" 
                                            class="form-control"
                                            placeholder="url"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Title</span>
                                            </div>
                                            <input 

                                            type="text" 
                                            class="form-control"
                                            placeholder="title"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-1">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Keywords</span>
                                            </div>
                                            <input 

                                            type="text" 
                                            class="form-control"
                                            placeholder="Keywords"
                                            >
                                        </div>
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Description</span>
                                            </div>
                                            <textarea
                                            type="text"
                                            class="form-control"
                                            placeholder="Описание"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    class="btn btn-info col-4 pt-2 pb-2 mt-3 mb-3 offset-1"
                                    type="button"
                                    >
                                    Сохранить и выйти
                                    </button>
                                    <button 
                                    class="btn btn-outline-warning pt-2 pb-2 mt-3 mb-3 col-4 offset-2"
                                    type="button"
                                    >
                                    Вернуть базовую версию
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
// import CONFIG from "@/config.js"
import BackBunner from "@/components/banners/BackBunner"
import BannerUpper from '@/components/banners/BannerUpper'

export default ({
  name: "FilmInfo",
  components: {
      BackBunner,
      BannerUpper,
  }
})
</script>
