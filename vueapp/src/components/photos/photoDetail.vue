<template>
    <v-touch class="photo" @swipeleft="next" @swiperight="prev" :style="{background:bg}">
        <router-link class="link" to="/photo"></router-link>
    </v-touch>
</template>

<script>
    import VueTouch from 'vue-touch';
    import Vue from 'vue';
    Vue.use(VueTouch,{name:'v-touch'});
    export default {
        data(){
            return{
                // str:'',
                idx: this.$route.params.idx
            }
        },
        components:{
            VueTouch
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx==this.$store.state.photoData.length){
                    this.idx=0;
                }
                this.$router.push('/photoDetail/'+this.idx);
            },
            prev(){
                this.idx--;
                if(this.idx==-1){
                    this.idx=this.$store.state.photoData.length-1;
                }
                this.$router.push('/photoDetail/'+this.idx);
            }
        },
        computed:{
            bg:function(){
                // this.str = `#000 url(${this.$store.state.photoData[this.$route.params.idx].src}) no-repeat center/contain`;
                // return this.str;
                return `#000 url(${this.$store.state.photoData[this.idx].src}) no-repeat center/contain`;
            }
        }
    }
</script>

<style scoped>
    .photo{
        position: absolute;
        left: 0;
        right: 0;
        top:1rem;
        bottom: 1rem;
    }
    .link{
        display: block;
        height:100%;
    }
</style>