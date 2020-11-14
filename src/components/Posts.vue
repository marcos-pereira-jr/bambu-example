<template>
    <div class="posts">
        <Post />
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
