<template>
  <div class="app"> 
    <form @submit.prevent>
      <h4>Создание поста</h4> 
      <input 
        :value="name" 
        @input="name=$event.target.value" 
        class="input" 
        type="text" 
        placeholder="название"
      >
      <input 
      :value="body" 
      @input="body=$event.target.value" 
      class="input" 
      type="text" 
      placeholder="описание">
      <button class="btn" @click="createPost">Создать</button>
    </form>

    <div class="post" v-for="post in posts" :key="post.id">
      <img class="avatarSvg" :src="post.avatar">
      <div><strong>название: </strong>{{post.name}}</div>
      <div><strong>описание: </strong>{{post.body}}</div>
      <div><strong>дата: </strong>{{post.date}}</div>
    </div>
  </div>
</template>

<script>
  export default {
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
          name: '',
          body: ''
      }
    },
    methods: {
      createPost() {
        const newPost = {
          id: Date.now(),
          avatar: `https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`,
          name: this.name,
          body: this.body

        }
        this.posts.push(newPost);
        this.name = '';
        this.body = '';
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
  .post {
    padding: 15px;
    border: 1px solid teal;
    margin-top: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .avatarSvg {
    width: 30px; 
    height: 30px
  }
  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
</style>