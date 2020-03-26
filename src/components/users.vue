<template>
   <div id="users">
       <ul>
           <li v-for="user in users" @click="user.show = !user.show">
                 <h3>{{user.name}}</h3>
                 <p v-show="user.show">{{user.position}}</p>
           </li>
       </ul>
       <button @click="changeArr">传引用</button>
    
   </div>
</template>
<script>
export default {
    data(){
        return{
            // users:['南山那','花蝴蝶','百啊','嘻哈哈','呀呀呀']
           
        }
       
    },
     props:['users'],
     methods:{
         changeArr:function(){
             this.users.pop();
         },
        
     }
}
</script>
<style scoped>
      ul{
          width:100%;
          max-width:1200px;
          display:flex;
          flex-wrap:wrap;
          list-style-type: none;
          margin:40px auto;
          padding:0 20px;
          box-sizing:border-box;
      }
      ul li{
          flex-grow: 1;
          flex-basis: 200px;
          padding:30px;
          margin:10px;
          border:1px solid #222;
          text-align:center;
      }
</style>