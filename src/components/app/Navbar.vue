<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">

            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle" ref="dropdown">{{name}}</a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow" style="left: 0px; right: inherit;">
              <li><a href="#" class="dropdown-item" @click.prevent="logout">Выйти</a></li>
            </ul>
          </li>
    </ul>
  </nav>
</template>

<script>


export default ({
 methods: {
   async logout() {
     await this.$store.dispatch('logout')
     this.$router.push('/')
     console.log('logout')
   }
 },
 computed: {
   name() {
     return this.$store.getters.info.name
   }
 }
})
</script>

