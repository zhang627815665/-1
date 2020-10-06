<template>
    <div class="box">
        <router-link to='/home'>
        <Item mark='home' :curr='currnav' @change='getVal'>
             <template #normalImg>
                 <img src="../assets/images/icon/icon-home.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/icon/icon-home-active.png" alt="">
             </template>
        </Item>
       </router-link>
       <router-link to='/classify'>
         <Item mark='classify' :curr='currnav' @change='getVal'>
             <template #normalImg>
                 <img src="../assets/images/icon/icon-catergry.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/icon/icon-catergry-active.png" alt="">
             </template>
        </Item>
        </router-link>
        <router-link to='/find'>
         <Item mark='find' :curr='currnav' @change='getVal'>
             <template #normalImg>
                 <img src="../assets/images/icon/icon-find.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/icon/icon-find-active.png" alt="">
             </template>
        </Item>
        </router-link>
<router-link to='/shop'>
         <Item mark='shop' :curr='currnav' @change='getVal'>
             <template #normalImg>
                 <img src="../assets/images/icon/icon-cart.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/icon/icon-cart.png" alt="" class="shopin">
             </template>

        </Item>
        </router-link>
<router-link to='/mine'>
         <Item mark='mine' :curr='currnav' @change='getVal'>
             <template #normalImg>
                 <img src="../assets/images/icon/icon-me.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/icon/icon-me-active.png" alt="">
             </template>
        </Item>
        </router-link>
    </div>
    
</template>
<script>
import Item from './item'
export default {
    components:{Item},
    data() {
        return {
            currnav:""
        }
    },
    methods: {
        getVal(val){
            this.currnav=val
        }
    },
}
</script>
<style  scoped>
  .box{
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      font-size: .16rem;
      background: #fff;
  }
  img{
      width: .7rem;
  }
  a{
      flex: 1;
      text-decoration: none;
  }
  .shopin{background: red;}
</style>