<template>
    <div id="home">
        <div class="header">hello, home!</div>
        <img src="./images/logo.png" alt="">
        <Hello />
    </div>
</template>

<script>
import Hello from '@/components/HelloWorld'
// import {getCaptcha} from '@/resource/index.js'
export default {
    components: {
        Hello
    },
    mounted() {
        this.getCode()
    },
    methods: {
        async getCode() {
            // let code = await getCaptcha()
        }
    }
}
</script>

<style  lang="scss">
 #home {
    width: 100%;
    height: 100%;
    // background: url('~@/views/home/images/too.jpeg') center no-repeat;
    .header {
    width: 100%;
    height: 100px;
}
 }
</style>
