<template>
    <div>
        <ul class="musicList">
            <li v-for="(obj,index) in musicList" :key="index">
                <router-link :to="'/musicDetail/'+obj.id">
                    <img :src="obj.bg" alt=""/>
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
            return{
                musicList:[]
            }
        },
        mounted:function(){
            this.$store.commit('change','rgb(0, 150, 136)');
            this.$store.commit('change2','music');
            axios.get('/static/data/musiclist.json').then((res)=>{
                this.musicList = res.data.albums;
            }).catch(()=>{
                console.log("请求有问题...")
            })
        }
    }
</script>

<style scoped>
    .musicList li{
        width:50%;
        float: left;
    }
    .musicList li img{
        width:100%;
    }
</style>