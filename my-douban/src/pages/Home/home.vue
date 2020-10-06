<template>
  <div id="box">
      <HeadItem class="box">
        <template #mystot1>
          <div class="inbox">
            <img src="../../assets/images/ic_group_search_small.png" alt="" class="inimg">
        <input type="text" placeholder="影视 图书 唱片 小组等">
          </div>
        </template>       
              <template #mystot>
                    <span class="rightimg">
                        <img src="../../assets/images/ic_scan_gray.png" alt="" class="rimg">
                        <img src="../../assets/images/ic_chat_white.png" alt="" class="rimg2">
                    </span>
              </template>
        </HeadItem>
        <Banner swiperID='id111' paginationtype='bullets'>
           <template #swiper-slide>
             <div class="swiper-slide">
               <img src="../../assets/images/banner/01.jpg" alt="">
             </div>
            <div class="swiper-slide">
               <img src="../../assets/images/banner/02.jpg" alt="">
            </div>
            <div class="swiper-slide">
               <img src="../../assets/images/banner/03.jpg" alt="">
            </div>
           </template>
        </Banner>
<!-- 
         <Banner swiperID='ID222' :paginationshow='false' effect='flip'>
           <template #swiper-slide>
             <div class="swiper-slide">
               <img src="../../assets/images/banner/01.jpg" alt="">
             </div>
            <div class="swiper-slide">
               <img src="../../assets/images/banner/02.jpg" alt="">
            </div>
            <div class="swiper-slide">
               <img src="../../assets/images/banner/03.jpg" alt="">
            </div>
           </template>
        </Banner> -->
     <Newslist class="Newslist"></Newslist>   
  </div>
</template>

<script>
import HeadItem from '../../components/HeadItem'
import Banner from '../../components/banner'
import Newslist from '../../components/newslist'
export default {
components:{
  HeadItem,Banner,Newslist
},
}
</script>

<style scoped lang='less'>
#box{
  margin-bottom: .2rem;
}
.bg{
  background: #48bd5a;
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
.inbox{
  position: relative;
  position: absolute;
  left: 0px;
  bottom: .03rem;
  .inimg{
     position: absolute;
     left: .15rem;
     bottom: .08rem;
     width: .3rem;
  }
  input{
    height: .4rem;
    width: 2.6rem;
    margin-left: .1rem;
    padding-left: .5rem;
    border-radius: .03rem;
    font-size: .16rem;
    border: none;
  }
}
.Newslist{
  margin-top: .2rem;
}
</style>