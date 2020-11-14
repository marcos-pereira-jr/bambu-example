<template>
    <div class="container">
        <div class="form">
            <div class="title">
                <div class="logo-container">
                    <h3 class="logo">🎋 Bambu<span> Registro</span></h3>
                </div>
            </div>
            <Input label="Primeiro Nome" v-model="form.firtName" class="name" />
            <Input
                label="Segundo Nome"
                v-model="form.lastName"
                class="endereco"
            />
            <Input label="E-mail" v-model="form.email" class="email" />
            <Input
                label="Senha"
                v-model="form.password"
                type="password"
                class="password"
            />
            <Input
                label="Confirme a senha"
                v-model="form.confirmPassword"
                type="password"
                class="confir-password"
            />
            <div class="container-button">
                <input
                    type="submit"
                    class="btn-form btn-submit"
                    value="Salvar"
                />
                <input
                    type="button"
                    value="Cancelar"
                    class="btn-form btn-cancel"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Input from '@/components/Input'
export default {
    components: { Input },
    data() {
        return {
            form: {
                firtName: null,
                lastName: null,
                email: null,
                password: null,
                confirmPassword: null,
            },
        }
    },
}
</script>

<style scoped>
.container {
    background-color: #014738;
    margin-top: 30px;
    border-radius: 40px 0 0 0;
}
.form {
    display: grid;
    height: calc(100vh -40vw);
    width: 60vw;
    background-color: #f5f5f5;
    grid-template:
        'title title title' 50px
        'name endereco endereco' 50px
        'email email email' 50px
        'password password password' 50px
        'confir-password confir-password confir-password' 50px
        '. . container-button' 50px;
    gap: 10px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-top: 1px;
    border-radius: 50px 1px 1px 1px;
}
.name {
    grid-area: name;
}
.endereco {
    grid-area: endereco;
}
.email {
    grid-area: email;
}
.title {
    grid-area: title;
    margin-left: 30px;
    margin-right: 30px;
}
.logo {
    border: 1px solid rgba(0, 0, 0, 0.125);
}
.password {
    grid-area: password;
}
.confir-password {
    grid-area: confir-password;
}
.container-button {
    width: 100%;
    grid-area: container-button;
    display: inline-flex;
}
.btn-form {
    padding: 1px;
    display: block;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    color: #fff;
    background-size: 150%;
    transition: 0.05s;
}
.btn-submit {
    background-color: #014738;
    padding: 10px;
}
.btn-cancel {
    background-color: rgb(182, 182, 36);
}
</style>
