<template>
  <div class="log">
    <h1>記録</h1>
    <div class="table">
      <table>
        <tr>
          <th>日付</th>
          <th>寝つき</th>
          <th>起床</th>
          <th>睡眠の質</th>
          <th>心の安定</th>
          <th>食欲</th>
          <th>気力</th>
          <th>体調</th>
          <th>備考</th>
        </tr>
        <tr v-for="(record,index) in records" :key="index">
          <td>{{record.now}}</td>
          <td>{{record.selected1}}</td>
          <td>{{record.selected2}}</td>
          <td>{{record.selected3}}</td>
          <td>{{record.selected4}}</td>
          <td>{{record.selected5}}</td>
          <td>{{record.selected6}}</td>
          <td>{{record.selected7}}</td>
          <td>{{record.remark}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      records: []
    };
  },
  methods: {
    get() {
      var db = firebase.firestore();
      db.collection("record")
        .get()
        .then(query => {
          query.docs.forEach(doc => {
            var data = doc.data();
            this.records.push(data);
          });
        });
    }
  },
  created() {
    this.get();
  }
};
const sortArray = this.records.sort((a, b) => new Date(a) - new Date(b));
</script>
<style scoped>
h1 {
  font-style: inherit;
  font-size: 50px;
}
.log {
    background-color: rgb(220, 251, 255);
    height: 500px;
}
table {
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 650px;
  table-layout: fixed;
  color: #000;
}

table th {
  padding: 15px 0;
  border-right: 1px solid #bbb;
  text-align: center;
}

table tr {
  background-color: #fff;
  padding: 30px;
  border-bottom: 1px solid #bbb;
}

table tr:last-child{
   border-bottom: none
}

table td {
  padding: 1em 10px 1em 1em;
  border-right: 1px solid #bbb;
  text-align: center;
}

table th:last-child,
table td:last-child{
  border: none;
}
@media screen and (max-width: 768px) {
    .table {
      overflow-x: auto;
    }
}
</style>
