<template>
    <div class="preview-share">
        <!-- <preview/> -->
        <img class="student-title center" src="./images/student-title.png" alt="" srcset="">
        <img class="student-header center" src="./images/student-1.png" alt="">
    </div>
</template>

<script>
import preview from './components/preview'
export default {
    components: {
        preview
    }
}
</script>

<style  lang="scss">
 .preview-share {
    padding-top: 80px;
    width: 100%;
    // background: url('images/preview-bg.png') no-repeat;
    // background-size: 100% auto;
    // background-color: #3081f9;
    .student-title {
        width: 514px;
        height: 92px;
    }
    .student-header {
        width: 128px;
        height: 128px;
        border: 2px solid #fff;
        border-radius: 50%;
        overflow: hidden;
    }
 }
</style>
