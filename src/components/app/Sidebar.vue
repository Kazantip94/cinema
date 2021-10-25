<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" class="brand-link center">
        <span class="brand-text font-weight-light fz">KinoCMS</span>
      </a>
       <div class="sidebar">
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" :class="{open: value}">
              <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                class="nav-item"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
              >
                <a href="#" class="nav-link">{{link.title}}</a>
              </router-link>
          </ul>
        </nav>
   </div>
  </aside>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      // {title: 'Статистика', url: '/', exact: true },
      {title: 'Статистика', url: '/statistics' },
      {title: 'Баннера/Слайдеры', url: '/banners'},
      {title: 'Фильмы', url: '/films'},
      {title: 'Кинотеатры', url: '/cinema'},
      {title: 'Новости', url: '/news'},
      {title: 'Акции', url: '/stock'},
      {title: 'Страницы', url: '/pages'},
      {title: 'Пользователи', url: '/users'},
      {title: 'Рассылка', url: '/newsletter'}
    ]
  })
}
</script>

<style lang="scss" scoped>
  .center{
    text-align: center;
}
  .fz {
    font-size: 25px;
  }
  body:not(.layout-fixed) .main-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
}
</style>



