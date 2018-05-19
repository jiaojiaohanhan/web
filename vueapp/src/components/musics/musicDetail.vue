<template>
    <div>
        <aplayer autoplay :music='details' :showlrc='true' v-if='isShow'>
            <!-- 还有mode属性可控制循环/随机/单曲播放 -->
        </aplayer>
        <!-- <ul>
            <li v-for="(obj,index) in details" :key="index">

            </li>
        </ul> -->
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default{
        data() {
            return {
                // details:{},
                details:[],
                isShow:false
            }
        },
        components: {
            Aplayer
        },
        mounted:function(){
            axios.get('/static/data/musicdata.json').then((res)=>{
                // this.details = res.data.musicData;
                var arr = res.data.musicData;
                for(var i=0;i<arr.length;i++){
                    //指向歌词文件地址
                    arr[i].lrc = '/static/' + arr[i].lrc;
                    //解构
                    var {title,author,src:url,musicImgSrc:pic,lrc} = arr[i];
                    //对象属性简写
                    var obj = {title,author,url,pic,lrc};
                    this.details.push(obj);
                }
                this.isShow = true;
            }).catch(()=>{
                console.log("请求有问题...")
            })
        }
    }
</script>

<style scoped>

</style>