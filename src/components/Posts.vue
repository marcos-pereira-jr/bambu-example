<template>
    <div class="posts">
        <Post />
        <Post title="Ultimo porjeto" />
    </div>
</template>
<script>
import Post from '@/components/Post'
export default {
    components: { Post },
}
</script>
<style scoped>
.posts {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
</style>
