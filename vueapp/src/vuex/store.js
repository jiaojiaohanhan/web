import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    bgColor:'',
    fontColor:'#ccc',
    title:'movie'
}

const mutations = {
    change(state,bgColor){
        state.bgColor = bgColor;
    },
    change2(state,title){
        state.title = title;
    }
    // clickBottom(state,fontColor){
    //     if(state.fontColor=="#ccc"){
    //         state.fontColor = fontColor;
    //     }else{
    //         state.fontColor = "#ccc"; 
    //     }
    // }
}

export default new Vuex.Store({
    state,
    mutations
});