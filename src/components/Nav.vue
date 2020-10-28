<template>
    <header>
        <div class="conteiner">
            <div class="logo-container">
                <h3 class="logo">🎋 Bambu<span> Help</span></h3>
            </div>
            <div class="nav-btn">
                <div class="nav-links">
                    <ul>
                        <li class="nav-link">
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-link">
                            <a href="#"
                                >Menu <i class="fas fa-caret-down"></i>
                            </a>
                            <div class="dropdown">
                                <ul>
                                    <li class="dropdown-link">
                                        <a href="#">Drop</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Drop</a>
                                    </li>
                                    <li class="dropdown-link">
                                        <a href="#">Drop</a>
                                    </li>
                                    <div class="arrow"></div>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-link">
                            <a href="#">Perfil </a>
                        </li>
                        <li class="nav-link">
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <div class="log-sign">
                    <a href="#usuario" class="btn transparent"> Entrar </a>
                    <a href="#usuario" class="btn transparent"> Sair </a>
                </div>
            </div>
            <NavHamburger />
        </div>
    </header>
</template>
<script>
import NavHamburger from '@/components/NavHamburger'
export default {
    components: {
        NavHamburger,
    },
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    overflow: hidden;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
header {
    position: sticky;
    top: 0px;
    background-color: #00bfa6;
    width: 100%;
    z-index: 1000;
}
.conteiner {
    max-width: 65rem;
    padding: 0 2rem;
    height: 3rem;
    margin: auto;
    display: flex;
}
.logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #00bfa6;
}
.nav-btn {
    flex: 3;
    display: flex;
}
.nav-links {
    flex: 2;
    background-color: #00bfa6;
}
.log-sign {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #00bfa6;
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
}
.logo {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: unset;
    line-height: 3rem;
}
.logo span {
    font-weight: 300;
}
.btn.solid,
.btn.transparent:hover {
    background-color: #fff;
    color: #69bde7;
}
.btn.transparent,
.btn.solid:hover {
    background-color: transparent;
    color: #fff;
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

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 10rem;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
}

.dropdown ul {
    position: relative;
}

.dropdown-link > a {
    display: flex;
    background-color: #fff;
    color: #00bfa6;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    align-items: center;
    justify-content: space-between;
    transition: 0.3px;
}
.dropdown-link:hover > a {
    background-color: #00bfa6;
    color: #fff;
}
.dropdown-link:not(:nth-last-child(2)) {
    border-bottom: 1px solid #efefef;
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
.dropdown-link:first-child:hover ~ .arrow {
    background-color: #00bfa6;
}
.dropdown-link {
    position: relative;
}

.nav-link:hover > .dropdown {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
}

@media (max-width: 920px) {
    .nav-btn {
        display: none;
    }
}
</style>
