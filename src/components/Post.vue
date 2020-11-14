<template>
    <div class="post">
        <div class="user">
            <div class="avatar-user">
                <img src="../assets/avatar.svg" />
            </div>
        </div>
        <div class="container-count">
            <div class="count">
                <p1>0/01</p1>
            </div>
        </div>
        <div class="container-button">
            <input type="submit" class="btn-contribution" value="Contribuir" />
        </div>
        <div class="container-title">
            <div class="title">
                <p1>{{ title }}</p1>
            </div>
        </div>
        <div class="container-body">
            <div class="body-card">
                <h1>
                    {{ descrition }}
                </h1>
            </div>
        </div>
        <div class="container-image">
            <img :src="image" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        avatar: {
            type: String,
            required: false,
            default: '../assets/avatar.svg',
        },
        title: {
            type: String,
            required: false,
            default: 'Projeto TESTE',
        },
        descrition: {
            type: String,
            required: false,
            default:
                ' Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Nec orci ornare   consequat. Praesent lacinia ultrices consectetur. Sed nonipsum felis. Per aumento de cachacis, eu reclamis. Em pé sem',
        },
        image: {
            type: String,
            required: false,
            default:
                'https://criancaenatureza.org.br/wp-content/uploads/2018/08/nyt-1000x500.jpg',
        },
    },
}
</script>
<style scoped>
img {
    width: 10vw;
}
.avatar-user {
    background-color: #014738;
    border-radius: 0 0 40% 40%;
}
.post {
    display: grid;
    margin-top: 10vh;
    width: 60vw;
    background-color: #f5f5f5;
    grid-template-areas:
        'user container-title container-title container-title container-count'
        'container-body container-body container-body container-body container-body'
        'container-button container-button container-button container-button container-button'
        'container-image container-image container-image container-image container-image ';
    gap: 0;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
.container-title {
    height: 100%;
    grid-area: container-title;
    padding-top: 2vh;
    padding-left: 50px;
    padding-right: 50px;
}
.user {
    padding-top: 0;
}
.title {
    border-bottom: 1px solid rgb(26, 160, 148);
}

.user {
    grid-area: user;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 100px;
}

.container-body {
    grid-area: container-body;
    padding-top: 2vh;
    padding-left: 50px;
    padding-right: 50px;
}
.body-card {
    font-size: 0.7rem;
}
.container-image {
    grid-area: container-image;
}
.container-image > img {
    height: 100%;
    width: 100%;
}

.container-count {
    font-size: 1.3rem;
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.count {
    color: rgb(149, 149, 149);
}
.container-button {
    width: 100%;
    grid-area: container-button;
}
.btn-contribution {
    padding: 1px;
    display: block;
    width: 100%;
    font-size: 1.2rem;
    border: none;
    background-image: linear-gradient(to right, #1a6b50, #38d39f, #1a6b50);
    border-radius: 10% 10% 0 0;
    cursor: pointer;
    color: #fff;
    background-size: 150%;
    transition: 0.05s;
}
</style>
