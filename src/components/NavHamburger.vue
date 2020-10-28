<template>
    <div class="container">
        <div class="hamburger-menu-container">
            <input type="checkbox" name="" id="check" />
            <div class="hamburger-menu">
                <div></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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

#check:checked ~ .hamburger-menu div {
    background-color: transparent;
}

#check:checked ~ .hamburger-menu div:before {
    transform: translateY(0) rotate(-45deg);
    transition: 0.3s;
}
#check:checked ~ .hamburger-menu div:after {
    transform: translateY(0) rotate(45deg);
    transition: 0.3s;
}
@media (max-width: 920px) {
    .hamburger-menu-container {
        display: flex;
    }
    #check {
        display: flex;
    }
    .nav-btn {
        position: fixed;
        height: calc(100vh -3rem);
        top: 3rem;
        left: 0;
        width: 100%;
        background-color: #00bfa6;
    }
}
</style>
