<template>
  <div id="app"> 

    <router-view/>
    <Tabbar class="floot" v-if='tabbarShow'></Tabbar>
  </div>
</template>

<script>
import {obj} from '../static/utils'
import Tabbar from '../src/components/tabbar'

export default {
  name: 'App',
  components:{
       Tabbar
  },
  data() {
    return {
      tabbarShow:true
    }
  },
  mounted() {
    obj.setRem()
  },
  watch: {
    $route(to,from){
      if(to.name=='login' || to.name=='login1'){
        this.tabbarShow=false
      }else{
        this.tabbarShow=true
      }
    }
  },
}
</script>

<style>
*{
  margin: 0;padding: 0;
}
body{
  font-size: 0.16rem;
}
#app{
  margin-bottom: .95rem;
}
.floot{
  background: #fff;
  border-top: 2px solid #dadce0;
}
</style>
