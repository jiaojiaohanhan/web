<template>
    <div>
        <ul class="photoData">
            <li v-for="(obj,index) in detail" :key="index">
                <router-link :to="'/photoDetail/'+index">
                    <img :src="obj.src" alt=""/>
                </router-link>
            </li>
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
    import axios from 'axios';
    export default{
        data(){
            return {
                detail:[]
            }
        },
        mounted:function(){
            this.$store.commit('change','rgb(63,81,181)');
            this.$store.commit('change2','photo');
            axios.get('/static/data/photodata.json').then((res)=>{
                this.detail = res.data.photoData;
                this.$store.state.photoData = this.detail;
            }).catch(()=>{
                console.log("请求有问题...");
            })
        }
    } 
</script>

<style scoped>
    .photoData{
        overflow: hidden;
        margin-bottom: 1rem;
    }
    .photoData li{
        width:50%;
        float: left;
    }
    .photoData li img{
        width: 100%;
    }
</style>