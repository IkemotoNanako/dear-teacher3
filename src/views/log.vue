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
       <div id="top-btn" class="page-top" v-scroll-to = "'body'">↑</div>
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
    async get() {
      var db = firebase.firestore();
      db.collection("record")
      //recordコレクションの中に登録したemailがあるもののみ表示
        .where("email", "==",
        this.$store.state.user.email)
      //日付順に降順に並び変える
        .orderBy('time','desc')
        .get()
      //データベースの値をqueryという変数に代入し、forEachで配列を分解し、取得した値を record配列に挿入
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
</script>
<style scoped>
h1 {
  font-style: inherit;
  font-size: 50px;
}
.log {
    background-color: rgb(220, 251, 255);
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
#top-btn {
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
}
</style>
