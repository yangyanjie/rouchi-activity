<template>
    <div id="home">
        <div class="header">hello, home!</div>
        <Hello />
    </div>
</template>

<script>
import Hello from '@/components/HelloWorld'
export default {
    components: {
        Hello
    }
}
    
</script>

<style  lang="scss">
 #home {
    width: 100%;
    height: 100%;
    background: red;
    .header {
    width: 100%;
    height: 100px;
}
 }
</style>
