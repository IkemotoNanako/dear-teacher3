<template>
    <div class="list">
        <header>
            <h1>心身を休めるためにやることリスト</h1>
            <p>このページから離れるとリストは消えるよ  スクショなどしてね</p>
            <a href="https://www.youtube.com/watch?v=_ONvyKmW63I&list=WL">例としてほっしーさんのYouTube</a>
        </header>
        <ul>
            <li v-for="(todo,index) in todos" :key="index"><input type="checkbox">{{todo}}</li>
        </ul>
        <input type="text" v-model="newTodo">
        <input type="submit" value="追加" @click="addTodo">
        <input type="submit" value="削除" @click="delateTodo">
    </div>
</template>
<script>
export default {
    data() {
        return {
            newTodo: '',
            todos: [
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo);//追加
            this.newTodo = '';
        },
         delateTodo() {
            this.todos.pop(this.newTodo);//削除
        }
    }
}
</script>

<style>
.list {
    background-color: rgb(220, 251, 255);
}
header {
    display: flex;
}
h1 {
    padding: 20px 20px 0px 20px;
}
a {
    padding: 50px 0px 0px 40px;
}
ul {
    list-style: none;
}
input {
    margin-bottom: 100px;
}