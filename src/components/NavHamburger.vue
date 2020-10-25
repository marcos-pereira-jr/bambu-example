<template>
    <div class="hamburger-menu-container">
        <div class="hamburger-menu">
            <div></div>
        </div>
    </div>
</template>
<style scoped>
.hamburger-menu-container {
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}
.hamburger-menu {
    width: 3rem;
    height: 3rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hamburger-menu div {
    width: 1.6rem;
    height: 3px;
    border-radius: 3px;
    background-color: #fff;
    position: relative;
}
</style>
