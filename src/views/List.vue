<template>
    <div>
        <header>
            <h1>心身を休めるためにやることリスト</h1>
            <p><a href="https://www.youtube.com/watch?v=_ONvyKmW63I&list=WL">例としてほっしーさんのYouTube</a></p>
        </header>
        <ul>
            <li v-for="(todo,index) in todos" :key="index">{{todo}}</li>
        </ul>
        <input type="text" v-model="newTodo">
        <input type="submit" value="add" @click="addTodo">
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
            this.todos.push(this.newTodo);
            this.newTodo = '';
        }
    }
}
</script>

<style>
header {
    display: flex;
}
h1 {
    padding: 20px;
}
p {
    padding: 40px
}
</style>

