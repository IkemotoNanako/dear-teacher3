<template>
    <Home :value="text" />
</template>
<script>
import Home from "../components/Home"
export default {
    data() {
        return {
            text: "お試し版"
        }
    },
    components: {
        Home
    }
}
</script>
