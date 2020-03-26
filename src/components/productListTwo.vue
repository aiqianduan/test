<template>
  <div id="product-list-two">
      <h2>product list two </h2>
      <ul>
          <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">${{product.price}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  // props:['products'],
  computed:{
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  },
  data(){
      return{

      }
  }
 
}
</script>

<style scoped>
    #product-list-two{
     background:purple;
     margin-bottom:30px;
     box-shadow:0px 0px 5px rgba(0,0,0,0.6);
      padding:30px;
    }
     #product-list-two h2{
       padding-left:30px;
       color:#fff;
     }
    #product-list-two ul li{
        padding:30px;
        margin-left:30px;
        margin-top:30px;
        list-style: none;
         width:100px;
         background:#fff;
         margin-bottom:10px;
    }
    #product-list-two ul li .name{
     color:#000;
    }
     #product-list-two ul li .price{
     color:red;
    }
</style>
