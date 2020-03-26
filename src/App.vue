<template>
  <div id="app">
       <ul>
         <li>
           <router-link to="/">home</router-link>
         </li>
         <li>
           <router-link to="/HelloWorld">HelloWorld</router-link>
         </li>
       </ul>
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data(){
    return{
       
     
    }
  },
  methods:{
    
  }
}
</script>

<style>
      body{
        font-family:ubuntu;
        color:#555;
      }
</style>
