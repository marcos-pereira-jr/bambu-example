<template>
    <main class="mainUser">
        <img class="wave" src="../assets/wave.svg" />
        <div class="container">
            <div class="img">
                <img src="../assets/background.svg" />
                <div class="about">
                    <p>
                        Bambu é uma plataforma de financiamento digital para
                        projetos de pequenos agricultores que aderirão ao
                        desenvolvimento sustentável
                    </p>
                </div>
            </div>
            <div class="login-container">
                <form
                    class="form"
                    action="https://marcos-pereira-jr.github.io/bambu/#/"
                >
                    <img class="avatar" src="../assets/avatar.svg" />
                    <h2>Bem vindo de volta</h2>

                    <Input
                        icon="fas fa-user"
                        v-model="usuario"
                        label="Usuario"
                    />

                    <Input
                        icon="fa fa-unlock-alt"
                        v-model="password"
                        label="Senha"
                    />
                    <a href="https://marcos-pereira-jr.github.io/bambu/#/">
                        Esqueceu a senha
                    </a>
                    <input type="submit" class="btn" value="Login" />
                </form>
            </div>
        </div>
    </main>
</template>
<script>
import Input from '@/components/Input'
export default {
    components: { Input },
    data() {
        return {
            usuario: null,
            password: null,
        }
    },
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
} /* retirar css padrão*/
.wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
}
/* Tornar a onda um objeto fixo na tela e como background*/
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7 rem;
    padding: 0 2rem;
}
/* Onde fica os componentes, nele temos a imagem que esta separada igualmente com o form */
.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
/* deixar a imagem centralizada e alinha com o meio do container */
.img img {
    width: 500px;
}
/* imagem ocupar 500px*/
.login-container {
    display: flex;
    align-items: center;
    text-align: center;
}
/* Tornar o display flex e com os itens alinhados no centro*/
.avatar {
    width: 100px;
}
.form {
    width: 360px;
}
/*controla o tamanho do form */
.form h2 {
    margin: 15px 0;
    color: #333;
}
a {
    display: block;
    text-align: right;
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.3s;
    color: teal;
}
a:houver {
    color: chartreuse;
}
.btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 1.2rem;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    cursor: pointer;
    color: #fff;
    background-size: 200%;
    transition: 0.05s;
}
.btn:hover {
    background-position: right;
}
.about {
    background: #fefefe;
    padding: 2px;
    margin-top: 250px;
    opacity: 0.8;
    border-radius: 10px;
    margin-left: 30px;
    margin-right: 30px;
    border: 2px solid rgb(0, 191, 166);
    width: 250px;
}

/* responsivo, quando o width chegar a 1052px  */
@media screen and (max-width: 1050px) {
    .container {
        grid-gap: 5rem;
    }
}
/*quando chegar a menos que 100 diminuir os objetos */
@media screen and (max-width: 1000px) {
    form {
        width: 290px;
    }
    form h2 {
        font-size: 2.4rem;
        margin: 8px 0;
    }
    .img img {
        width: 400px;
    }
}
/*  Quando chegar a menos que 900 retirar a imagem e parti o flex em somente 1 componente*/

@media screen and (max-width: 900px) {
    .img img {
        display: none;
    }
    .container {
        grid-template-columns: 1fr;
        padding: 0 !important;
    }
    .wave {
        display: none;
    }
    .login-container {
        justify-content: center;
    }
    .about {
        display: none;
    }
}
</style>
