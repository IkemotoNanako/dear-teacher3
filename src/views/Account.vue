<template>
    <Home :value="text" />
</template>
<script>
import Home from "../components/Home"
export default {
    data() {
        return {
            text: "メンバー版"
        }
    },
    components: {
        Home
    }
}
</script>
