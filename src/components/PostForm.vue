<template>
  <form @submit.prevent>
      <h4>Создание поста</h4> 
      <input 
        v-model="post.name"
        class="input" 
        type="text" 
        placeholder="название"
      >
      <input 
      v-model="post.body"
      class="input" 
      type="text" 
      placeholder="описание">
      <button 
        class="btn" 
        @click="createPost"
      >
        Создать
      </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    name: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
            this.post.id = Date.now();
            this.post.avatar = `https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`;
            this.post.date = new Date(Date.now()).toLocaleString();
            this.$emit('create', this.post)
            this.post = {
                name: '',
                body: '',
              }
            }
        }
    }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
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