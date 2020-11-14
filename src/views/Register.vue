<template>
    <main class="main">
        <section class="section">
            <FormRegister />
        </section>
    </main>
</template>

<script>
import FormRegister from '@/components/FormRegister'
export default {
    components: {
        FormRegister,
    },
}
</script>

<style>
.main {
    width: 100%;
    height: 100%;
    background: #d3cce3;
}
.section {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
</style>
