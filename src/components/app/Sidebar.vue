<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
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
      {title: 'Статистика', url: '/', exact: true},
      {title: 'Баннера/Слайдеры', url: '/categories'},
      {title: 'Фильмы', url: '/planning'},
      {title: 'Кинотеатры', url: '/record'},
      // {title: 'Новости', url: '/categories'},
      // {title: 'Акции', url: '/categories'},
      // {title: 'Страницы', url: '/categories'},
      // {title: 'Пользователи', url: '/categories'},
      // {title: 'Рассылка', url: '/categories'}
    ]
  })
}
</script>

<style lang="scss" scoped>
  // body, .main-sidebar {
  //   height: 1000px
  // }
</style>



