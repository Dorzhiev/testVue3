<template>
  <div class="app"> 
    <post-form 
       @create="createPost"
    /> <!--3. добавляем компоненты-->
    <post-list 
      :posts="posts"
    />
 <!-- вырезали в PostForm  -->
 <!-- вырезали в PostList -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm"; // 1 импортируем
import PostList from "@/components/PostList";

  export default {
    components: {
      PostForm, PostList // 2. регистрируем компоненты в components
    },
    data() {
      return {
        posts: 
          [
            {
              id: 1,
              avatar: `https://avatars.dicebear.com/api/avataaars/1.svg`,
              name: 'Vue',
              body: 'описание',
              date: new Date(Date.now()).toLocaleString()
            },
            { 
              id: 2,
              avatar: `https://avatars.dicebear.com/api/avataaars/15}.svg`, 
              name: 'Front-end', 
              body: 'описание 2',
              date: new Date(Date.now()).toLocaleString()
            },
            { 
              id: 3, 
              avatar: `https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`,
              name: 'JavaScript', 
              body: 'описание 3',
              date: new Date(Date.now()).toLocaleString() 
            },
          ],
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
      },
    },
}
</script>

<style >
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    padding: 20px;
  }
</style>