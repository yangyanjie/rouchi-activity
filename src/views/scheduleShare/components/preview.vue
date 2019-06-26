<template>
    <div class="preview-share">
        hello
    </div>
</template>

<script>
import {shareExercisePrepare} from '@/resource/index.js'
export default {
    mounted() {
        this.getShare()
    },
    methods: {
        async getShare() {
            let params = {
                classroom: "12S5NE2eFjx50lGN",
                lesson: "ATz9W3VFn9M_",
                student: "nAujmPut-Hw_"
            }
            let share = await shareExercisePrepare(params)
        }
    }
}
</script>

<style  lang="scss">
 .schedule-share {
    width: 100%;
    background: #3081f9;
 }
</style>