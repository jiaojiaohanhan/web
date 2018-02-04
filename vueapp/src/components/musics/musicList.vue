<template>
    <div>
        <ul class="ul1">
            <li>music</li>
            <li>music</li>
            <li>music</li>
            <li>music</li>
        </ul>
    </div>
</template>

<script>
    // import top from '@/components/common/Top'
    // import bottom from '@/components/common/Bottom'
    // export default {
    //     components:{
    //         top,
    //         bottom
    //     }
    // }
    export default{
        mounted:function(){
            this.$store.commit('change','rgb(0, 150, 136)');
            this.$store.commit('change2','music');
        }
    }
</script>

<style scoped>

</style>