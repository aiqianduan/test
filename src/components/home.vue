<template>
  <div id="home">
       <product-list-one ></product-list-one>
       <product-list-two ></product-list-two>
       <header-pc v-bind:str="title" v-on:changeTit="changeTit($event)"/>
       <users v-bind:users = "users"/>
       <p>传值和传引用却别</p>
       <users v-bind:users = "users"/>
       <footer-pc v-bind:str="title"/>
  </div>
</template>

<script>
import productListOne from './productListOne'
import productListTwo from './productListTwo'
import users from './users'
import header from './Header'
import footer from './Fooetr'
export default {
  name: 'home',
  components:{
    'product-list-one':productListOne,
    'product-list-two':productListTwo,
    users,
    'header-pc':header,
    'footer-pc':footer,

  },
  data(){
    return{
       users:[
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:true},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
                // {name:'南山那',position:'前端',show:false},
            ],
            title:'哈哈哈哈哈哈哈',
     
    }
  },
  methods:{
    changeTit:function(tit){
      this.title = tit;
    }
  },
  created:function(){
         this.$http.get('http://jsonplaceholder.typicode.com/users')
         .then((data)=>{
             this.users= data.body;
         })
  }
}
</script>

<style>
      body{
        font-family:ubuntu;
        color:#555;
      }
</style>
