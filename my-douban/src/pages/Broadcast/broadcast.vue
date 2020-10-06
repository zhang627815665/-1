<template>
  <div>
      <HeadItem title='书影音'>
              <template #mystot>
                    <span class="rightimg">
                        <img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="rimg">
                        <img src="../../assets/images/ic_chat_green.png" alt="" class="rimg2">
                    </span>
              </template>
        </HeadItem>
        <nav>
          <span :class="{ active:currId==0}" @click="currId=0 ">
            <router-link to='/broadcast/movie'>电影</router-link>
          </span>
           <span :class="{ active:currId==1}" @click="currId=1">
            <router-link to='/broadcast/read'>读书</router-link>
          </span>
           <span :class="{ active:currId==2}" @click="currId=2">
            <router-link to='/broadcast/tv'>电视</router-link>
          </span>
           <span :class="{ active:currId==3}" @click="currId=3">
            <router-link to='/broadcast/city'>同城</router-link>
          </span>
           <span :class="{ active:currId==4}" @click="currId=4">
            <router-link to='/broadcast/music'>音乐</router-link>
          </span>
        </nav>
        <router-view></router-view>
        <Movie v-if="$route.meta.tabbarShow"></Movie>
        
  </div>
</template>

<script>
import HeadItem from '../../components/HeadItem'
import Movie from './sub/movie'
export default {
components:{
  HeadItem,Movie
},
data() {
  return {
    currId:'0',
  }
},
mounted() {
  
},
}
</script>

<style scoped lang='less'>
a{
  text-decoration: none;
}
.rightimg>img{
  position: absolute;
  width: .3rem;
  right: .15rem;
  bottom: .1rem;
}
.rightimg>img.rimg{
right: .65rem;
}
nav{
  width: 100%;
  display: flex;
  text-align: center;
  span{width: 20%;
  display: inline-block;
  line-height: .38rem;
  a{color: #838383;}}
  .active{background: #07d614;a{color: #fff};}
}
</style>