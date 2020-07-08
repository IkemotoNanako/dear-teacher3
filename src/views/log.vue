<template>
    <div>
        <div>
            <table>
                <tr>
                    <th>日付</th>
                    <th>寝つき</th>
                    <th>起床</th>
                    <th>睡眠の質</th>
                    <th>心の安定</th>
                    <th>食欲</th>
                    <th>気力</th>
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
            db.collection("records")
            .get()
            .then(query => {
                query.forEach(doc => {
                    var data =doc.data();
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

