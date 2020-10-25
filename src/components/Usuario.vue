<template>
    <main>
        <img class="wave" src="../assets/wave.svg" />
        <div class="container">
            <div class="img">
                <img
                    src="https://raw.githubusercontent.com/marcos-pereira-jr/bambu/9092d1fa88118170382f4033c765d2a81bf6e6ce/src/assets/background.svg"
                />
            </div>
            <div class="login-container">
                <form>
                    <img class="avatar" src="../assets/avatar.svg" />
                    <h2>Bem vindo de volta</h2>
                    <div :class="['input-div one', { focus: isFocus }]">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Username</h5>
                            <input
                                @focus="onFocus"
                                @blur="onBlur"
                                class="input"
                                type="text"
                            />
                        </div>
                    </div>

                    <div :class="['input-div two', { focus: isFocusPass }]">
                        <div class="i">
                            <i class="fa fa-unlock-alt"></i>
                        </div>
                        <div>
                            <h5>Senha</h5>
                            <input
                                @focus="onFocusPass"
                                @blur="onBlurPass"
                                class="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <a href="a"> Esqueceu a senha </a>
                    <input type="submit" class="btn" value="Login" />
                </form>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            isFocus: false,
            isFocusPass: false,
        }
    },
    methods: {
        onFocus() {
            this.isFocus = true
        },
        onBlur() {
            this.isFocus = false
        },
        onFocusPass() {
            this.isFocusPass = true
        },
        onBlurPass() {
            this.isFocusPass = false
        },
    },
}
</script>
<style>
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
form {
    width: 360px;
}
/*controla o tamanho do form */
form h2 {
    margin: 15px 0;
    color: #333;
}
/* alem de usar display grid para alinhar o icone em fração de 7% e 93% com borda*/
.input-div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}
.input-div:after,
.input-div:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #026702;
    transition: 0.3s;
}

.input-div::after {
    right: 50%;
}
.input-div::before {
    left: 50%;
}
.input-div.focus .i {
    color: #026702;
}
.input-div.focus div h5 {
    top: -5px;
    font-size: 15px;
}
/* Aumentar a barra abaixo do input*/
.input-div.focus:after,
.input-div.focus:before {
    width: 50%;
}

.input-div.one {
    margin-top: 0;
}
.input-div.tow {
    margin-bottom: 4px;
}
/*Tornar o incone no meio*/
.i {
    display: flex;
    justify-content: center;
    align-items: center;
}
.i i {
    color: #d9d9d9;
    transition: 0.3s;
}
/* tornar os filhos imediatos em uma posição relativa */
.input-div > div {
    position: relative;
    height: 45px;
}
/* tornar os filhos imediatos em uma posição absoluta para não aparecer os nomes dos campos */
.input-div > div h5 {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 20px;
    /*display: none; */
    transition: 0.3s;
}
/* Input tornar absolute sem background */
.input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-family: sans-serif;
    color: #555;
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
    }
    .wave {
        display: none;
    }
    .login-container {
        justify-content: center;
    }
}
</style>
