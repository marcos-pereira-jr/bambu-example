<template>
    <div>
        <Nav />
        <main>
            <h1>{{ msg }}</h1>
        </main>
    </div>
</template>

<script>
import Nav from '@/components/Nav/Nav'
export default {
    components: { Nav },
    data() {
        return {
            msg: 'HOME',
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
