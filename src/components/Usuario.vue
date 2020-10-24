<template>
    <main>
        <img class="wave" src="@/assets/wave.svg" />
        <div class="container">
            <div class="img">
                <img src="@/assets/background.svg" />
            </div>
            <div class="login-container">
                <form>
                    <img class="avatar" src="@/assets/avatar.svg" />
                    <h2>Bem vindo</h2>
                    <div class="input-div">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <h2>Username</h2>
                            <input class="input" type="text" />
                        </div>
                    </div>

                    <div class="input-div">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <h2>Senha</h2>
                            <input class="input" type="text" />
                        </div>
                    </div>
                    <a href="a"> Esqueceu a senha </a>
                    <input type="submit" class="btn" value="Login" />
                </form>
            </div>
        </div>
    </main>
</template>
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.wave {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
}
.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7 rem;
    padding: 0 2rem;
}
.img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.img img {
    width: 500px;
}
.login-container {
    display: flex;
    align-items: center;
    text-align: center;
}
.avatar {
    width: 100px;
}
form {
    width: 360;
}
form h2 {
    font-size: 2.9rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #333;
}
.input-div {
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}
</style>
