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
      <li class="nav-item">
        <a href="#" class="navbar-brand">
          <img src="#" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        </a>
      </li>
      <li class="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle" ref="dropdown">Меню</a>
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
   logout() {
     this.$router.push('/')
   }
 }
})
</script>

