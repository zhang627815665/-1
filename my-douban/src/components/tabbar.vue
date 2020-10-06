<template>
    <div class="box">
        <router-link to='/home'>
        <Item mark='home' :curr='currnav' @change='getVal' title='首页'>
             <template #normalImg>
                 <img src="../assets/images/ic_tab_home_normal.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/ic_tab_home_active.png" alt="">
             </template>
        </Item>
       </router-link>
       <router-link to='/broadcast'>
         <Item mark='broadcast' :curr='currnav' @change='getVal'  title='书影音'>
             <template #normalImg>
                 <img src="../assets/images/ic_tab_subject_normal.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/ic_tab_subject_active.png" alt="">
             </template>
        </Item>
        </router-link>
        <router-link to='/audio'>
         <Item mark='audio' :curr='currnav' @change='getVal'  title='广播'>
             <template #normalImg>
                 <img src="../assets/images/ic_tab_status_normal.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/ic_tab_status_active.png" alt="">
             </template>
        </Item>
        </router-link>
<router-link to='/group'>
         <Item mark='group' :curr='currnav' @change='getVal'  title='小组'>
             <template #normalImg>
                 <img src="../assets/images/ic_tab_group_normal.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/ic_tab_group_active.png" alt="">
             </template>

        </Item>
        </router-link>
<router-link to='/mine'>
         <Item mark='mine' :curr='currnav' @change='getVal'  title='我的'>
             <template #normalImg>
                 <img src="../assets/images/ic_tab_profile_normal.png" alt="">
             </template>
              <template #activeImg>
                 <img src="../assets/images/ic_tab_profile_active.png" alt="">
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
  }
  img{
      width: 100%;
  }
  a{
      flex: 1;
      text-decoration: none;
  }
</style>