// import {getInfor, getVipList, getShowList, getDetail,} from '@/service/getData.js'

const state={
    Infor:{},
    list: [],
    infor: {},
    vipList: {},
}

const mutations={
    setInfor(state, Infor){
        state.Infor=Infor
     },
     setVip(state, vipList) {
         state.vipList= vipList
     },
 
     setShowList(state, list) {
         state.list = list
     },
}


const actions={

    getInfor({commit}) {
        getInfor().then(({data}) => {
            commit('setInfor', data.data)

        })
    },

    getVipList({commit}){
        getVipList().then(({data}) => {
            this.vip = data.data;
            if(data.code==200){
                //调用mutations里的函数
                commit('setVip', data.data)
            }
        })
    },

    getShowList({commit}, id) {
        getShowList(id).then(({data}) => {
            //console.log(data)
         if(data.code==200){
             commit('setShowList', data.data.list)
         }
        })
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}