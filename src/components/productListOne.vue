<template>
  <div id="product-list-one">
      <h2>product list one </h2>
      <ul>
          <li v-for = "product in saleProducts">
              <span class="name">{{product.name}}</span>
              <span class="price">${{product.price}}</span>
          </li>
      </ul>
      <button @click="reducePrice(10)">降低价格</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    // props:['products'],
    computed:{
        products(){
            return this.$store.state.products;
        },
        // saleProducts(){
        //     return this.$store.getters.saleProducts;
        // }
        ...mapGetters([
            'saleProducts'
        ])
    },
    data(){
        return{

        }
    },
    methods:{
        // reducePrice:function(amount){
        //     // this.$store.commit('reducePrice');
        //     this.$store.dispatch('reducePrice',amount)
        // }
        ...mapActions([
            'reducePrice'
        ])
    }
 
}
</script>

<style scoped>
    #product-list-one{
     background:pink;
     margin-bottom:30px;
     box-shadow:0px 0px 5px rgba(0,0,0,0.6);
     padding:30px;
    }
     #product-list-one h2{
       padding-left:30px;
      
     }
    #product-list-one ul li{
        padding:30px;
        margin-left:30px;
        margin-top:30px;
        list-style: none;
        width:100px;
        display:inline-block;
        background:#fff;
        margin-bottom:10px;
        margin-right:30px;
    }
    #product-list-one ul li .name{
     color:#000;
    }
     #product-list-one ul li .price{
     color:red;
    }
</style>
