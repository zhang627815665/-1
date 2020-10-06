<template>
<div>
    <div class="box"  v-for="(item,index) in arr" :key="index">
        <div id="box">
            <div class="zuo">
                <p class="p1">{{item.title}}</p>
                <p class="p2">{{item.target.desc}}</p>
                <p class="p3">作者：{{item.target.author.name}}</p>
            </div>
            <div class="you"><img :src=item.target.cover_url alt="" /></div>
        </div>      
    </div>
 
  </div>  
</template>

<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted() {
        this.$axios.get('../../static/data/homeData.json')
        .then(res=>{
            console.log(res.data.recommend_feeds);
            this.arr=res.data.recommend_feeds;
        })
    },
};
</script>

<style lang="less" scoped>
.box {
    border-bottom: 1px solid gray;
}
#box{
   margin: 10px 10px;
   height: 170px;
   display: flex;
   .zuo{
       height: .7rem;
       width: 65%;
       
   }
   .you{
        height: .7rem;
       width: 35%;
       img{
           width: 100%;
           margin-top: .1rem;
       }
   }
   p{
       padding-top: .1rem;
   }
   .p2{
       color: #666;
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
   }
   .p3{
       color: #999;
   }
}
</style>