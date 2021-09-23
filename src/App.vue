<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {

  components: {
    Navbar, Sidebar
  }
}
</script>


<style lang="scss">
@import '~admin-lte/plugins/fontawesome-free/css/all.min.css';
@import '~admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
@import '~admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
@import '~admin-lte/plugins/jqvmap/jqvmap.min.css';
@import '~admin-lte/dist/css/adminlte.min.css';
@import '~admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
@import '~admin-lte/plugins/daterangepicker/daterangepicker.css';
@import '~admin-lte/plugins/summernote/summernote-bs4.min.css';
</style>
