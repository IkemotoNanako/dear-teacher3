<template>
    <Home :value="text" />
</template>
<script>
import Home from "../components/Home"//Home.vueコンポーネントをインポートしている
export default {
    data() {
        return {
            text: "メンバー版"//親コンポーネントから受け取った値に代入している
        }
    },
    components: {
        Home
    }
}
</script>
