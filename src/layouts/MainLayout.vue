<template>
  <div>
    
    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />
    
    <main class="content-wrapper" :class="{full: !isOpen}">
      <div>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>
