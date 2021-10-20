<template>
    <div class="admin-layout">
        <Navbar />
        <Sidebar />
        <router-view />
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
