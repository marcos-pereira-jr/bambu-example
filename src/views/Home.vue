<template>
    <main>
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

<style>
.posts {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

main {
    width: 100%;
    background: #d3cce3;
}
</style>
