import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // 严格模式
    strict:true,
    state:{
        products:[
            {name:'马云',price:200},
            {name:'马化腾',price:200},
            {name:'马冬梅',price:200},
            {name:'马蓉',price:200},
          ]
    },
    getters:{
        saleProducts(state){
         var saleProducts = state.products.map(product=>{
             return {
                 name:'**'+product.name+'**',
                 price:product.price/2
             }
         })
         return saleProducts;
        }
    },
    mutations:{
        reducePrice:(state,payload) =>{
            state.products.forEach(product =>{
                product.price -=payload;

            })
        }
    },
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                context.commit('reducePrice',payload);
            },2000)

        }
    }
    
})
