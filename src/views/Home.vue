<template>
    <div>
        <Nav />
        <main>
            <section>
                <div class="overlay">
                    <Input icon="fas fa-user" v-model="email" label="E-mail" />
                    <p>{{ email }}</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Input from '@/components/Input'
export default {
    components: { Nav, Input },
    data() {
        return {
            email: 'aaa',
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    position: relative;
    height: calc(100vh -3rem);
    width: 100%;
    background-color: #f2f2f2;
    overflow: hidden;
}
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(56, 165, 238, 0.5);
}
</style>
