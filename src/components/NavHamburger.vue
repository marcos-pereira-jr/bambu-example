<template>
    <div class="container">
        <input type="checkbox" name="" id="check" />
        <div class="nav-btn">
            <div class="nav-links">
                <ul>
                    <li class="nav-link">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Menu </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Perfil </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Sobre nós</a>
                    </li>
                </ul>
            </div>
            <div class="log-sign">
                <a href="#usuario" class="btn transparent"> Entrar </a>
                <a href="#usuario" class="btn transparent"> Sair </a>
            </div>
        </div>
        <div class="hamburger-menu-container">
            <div class="hamburger-menu">
                <div></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
/*body {
    overflow: hidden;
}*/
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
.conteiner {
    max-width: 65rem;
    padding: 0 2rem;
    height: 3rem;
    margin: auto;
    display: flex;
}
.hamburger-menu-container {
    flex: 1;
    display: none; /* retirar */
    align-items: center;
    justify-content: flex-end;
}
.hamburger-menu {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
}
.hamburger-menu div {
    width: 1.6rem;
    height: 3px;
    border-radius: 3px;
    background-color: #fff;
    position: relative;
    z-index: 1001;
}
.hamburger-menu div:before,
.hamburger-menu div:after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #fff;
    border-radius: 3px;
}
.hamburger-menu div:before {
    transform: translateY(-7px);
}
.hamburger-menu div:after {
    transform: translateY(7px);
}
#check {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    width: 2.2rem;
    height: 2.5rem;
    cursor: pointer;
    opacity: 0;
    z-index: 90000;
    transition: 5s;
    display: none;
}

#check:checked ~ .hamburger-menu-container > .hamburger-menu div {
    background-color: transparent;
}

#check:checked ~ .hamburger-menu-container > .hamburger-menu div:before {
    transform: translateY(0) rotate(-45deg);
    transition: 0.3s;
}
#check:checked ~ .hamburger-menu-container > .hamburger-menu div:after {
    transform: translateY(0) rotate(45deg);
    transition: 0.3s;
}

.nav-btn {
    flex: 3;
    display: flex;
}
.nav-links {
    flex: 2;
    background-color: #00bfa6;
}

.nav-links > ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-link {
    position: relative;
}

.nav-link > a {
    line-height: 3rem;
    color: #fff;
    padding: 0 0.8rem;
    letter-spacing: 1px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
}

.nav-link > a > i {
    margin-left: 0.2rem;
}
.nav-link:hover > a {
    transform: scale(1.1);
}

.arrow {
    position: absolute;
    width: 11px;
    height: 11px;
    top: -5.5px;
    left: 32px;
    background-color: #fff;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.3s;
}

.nav-links > ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-link {
    position: relative;
}
.nav-link > a {
    line-height: 3rem;
    color: #fff;
    padding: 0 0.8rem;
    letter-spacing: 1px;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
}
.btn.transparent,
.btn.solid:hover {
    background-color: transparent;
    color: #fff;
}

.log-sign {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.container {
    display: none;
}
@media (max-width: 920px) {
    .container {
        display: flex;
    }
    .hamburger-menu-container {
        display: flex;
    }
    #check {
        display: flex;
    }
    #check:checked ~ .nav-btn {
        transform: translateX(0);
    }
    .nav-btn {
        position: fixed;
        height: calc(100vh - 3rem);
        top: 3rem;
        left: 0;
        width: 100%;
        background-color: #36c3b1;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow-y: hidden;
        overflow-y: auto;
        transform: translateX(100%);
        transition: 0.65s;
    }
    .nav-links {
        flex: initial;
        width: 100%;
        background-color: #00bfa6;
    }
    .nav-link {
        width: 100%;
    }
    .nav-links > ul {
        flex-direction: column;
    }
    .nav-link > a {
        line-height: 1;
        padding: 1.6rem 2rem;
    }
    .nav-link:hover > a {
        transform: scale(1);
        background-color: #057a6b;
    }
    .log-sign {
        flex: initial;
        width: 100%;
        padding: 1.5rem 1.9rem;
        align-items: center;
    }
    .btn {
        display: inline-block;
        padding: 0.5rem 1.3rem;
        font-size: 0.8rem;
        border: 2px solid #fff;
        border-radius: 2rem;
        line-height: 1;
        margin: 0 0.2rem;
        transition: 0.3s;
        transform: translateY(15px);
    }
}
</style>
