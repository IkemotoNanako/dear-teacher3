<template>
    <div class="list">
        <header>
            <h1>心身を休めるためにやることリスト</h1>
            <a href="https://www.youtube.com/watch?v=_ONvyKmW63I&list=WL">例としてほっしーさんのYouTube</a>
        </header>
        <ul>
            <li v-for="(todo,index) in todos" :key="index"><input type="checkbox">{{todo.newTodo}}</li>
        </ul>
        <input type="text" v-model="newTodo">
        <input type="submit" value="追加" @click="add">
        <input type="submit" value="全て削除" @click="del">
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    data() {
        return {
            newTodo: '',
            todos: [
            ]
        }
    },
    methods: {
        del() {
        var db = firebase.firestore();
        this.id.forEach(element => {
            db.collection("list")
            .doc(element)
            .delete();
         });
    },
        get1() {
        var db = firebase.firestore();    
        db.collection("list")
            .get()  
            .then(query => {
             query.forEach(doc => {
                 var id = doc.id;
                 this.id.push(id);
              });
      });
        },
        add() {
            var db = firebase.firestore();
        db.collection("list")
          .add({
              newTodo:this.newTodo
          })
          this.get1()
        },
        get2() {
            var db = firebase.firestore();
         db.collection("list")
            .get()
            .then(query => {
          query.docs.forEach(doc => {
            var data = doc.data();
            this.todos.push(data);
          });
        });
        }},
        created() {
            this.get1();
            this.get2();
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
li {
    margin: 0px;
    padding: 0px;
}
input {
    margin-bottom: 100px;
}
</style>

