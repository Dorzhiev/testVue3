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
            }