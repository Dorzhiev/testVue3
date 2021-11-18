<template>
   <div class="post" v-for="post in posts" :key="post.id">
      <img class="avatarSvg" :src="post.avatar">
      <div><strong>название: </strong>{{post.name}}</div>
      <div><strong>описание: </strong>{{post.body}}</div>
      <div><strong>дата: </strong>{{post.date}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
 .post {
    padding: 15px;
    border: 1px solid teal;
    margin-top: 15px;
  }
  .avatarSvg {
    width: 30px; 
    height: 30px
  }
</style>