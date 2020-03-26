<template>
   <div id="users">
       <h2>{{title1}}{{str}}</h2>
          <button @click="changeStr">传值</button>
          <button v-on:click="changeTitle">事件传值</button>
   </div>
</template>
<script>
export default {
    data(){
        return{
         title1:'我是header 哈哈哈啊哈',
         title2:'我是子组件header传过来的值'
        }
    },
    props:['str'],
    methods:{
         changeStr:function(){
             this.str='changed'
         },
         changeTitle:function(){
             this.$emit('changeTit',this.title2);
         }
    }
}
</script>
<style scoped>
         h2{
          width:100%;
          padding:30px 0 ;
          background:red;
          color:#000;
          text-align:center;
      }
</style>