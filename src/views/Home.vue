<template>
    <main class="mainHome">
        <Nav />
        <section>
            <Posts />
        </section>
    </main>
</template>

<script>
import Nav from '@/components/Nav'
import Posts from '@/components/Posts'
export default {
    components: { Nav, Posts },
    data() {
        return {
            email: 'aaa',
        }
    },
}
</script>

<style scoped>
.mainHome {
    width: 100%;
    height: 100%;
}
</style>
