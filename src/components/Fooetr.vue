<template>
   <div id="users">
       <h2>{{copyright}}{{str}}</h2>
         <button @click="changeStr">传z</button>
   </div>
</template>
<script>
export default {
    data(){
        return{
         copyright:'copyright vue demo'
        }
    },
     props:['str'],
     methods:{
          changeStr:function(){
             this.str='changed'
         }
     }
}
</script>
<style scoped>
      h2{
          width:100%;
          padding:30px 0 ;
          background:pink;
          color:#000;
          text-align:center;
      }
</style>