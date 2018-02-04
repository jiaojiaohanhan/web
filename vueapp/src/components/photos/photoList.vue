<template>
    <div>
        <ul class="ul1">
            <li>photo</li>
            <li>photo</li>
            <li>photo</li>
            <li>photo</li>
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
            this.$store.commit('change','rgb(63,81,181)');
            this.$store.commit('change2','photo');
        }
    } 
</script>

<style scoped>

</style>