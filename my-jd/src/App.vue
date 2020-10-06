<template>
  <div id="app">
    <router-view/>
    <Tabbar class="mybottom"></Tabbar>
  </div>
</template>

<script>
import {obj} from '../static/utils'
import Tabbar from './components/tabbar'
export default {
 name: 'App',
 components:{
Tabbar,
 },
 mounted() {
   obj.setRem()
 },
}
</script>

<style>
*{margin: 0;padding: 0;}
body{font-size: .16rem;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
