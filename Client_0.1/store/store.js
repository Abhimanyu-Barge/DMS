import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        openNevigation:false,
        currentSeletedPeroid : {}
    },
    action: {
    },
    mutations: {
        clickNevigationBar (state){
            state.openNevigation = !state.openNevigation
        },
        selectedPeroid(state,data){
            state.currentSeletedPeroid = data;
        }
    },
    getters: {
    },
    modules: {
    },
    plugins: [createPersistedState({
    })]
})