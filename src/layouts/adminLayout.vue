<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <Navbar />
            <Sidebar />
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <transition mode="out-in" name="fade">
                            <router-view />
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default ({
    name: 'admin-layout',
    components: {
        Navbar, Sidebar
    },
    async mounted() {
        if(!Object.keys(this.$store.getters.info).length) {
            await this.$store.dispatch('fetchInfo')
        }
    }
})
</script>
