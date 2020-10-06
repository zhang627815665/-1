<template>
  <div>
      <div class="box">
        <p class="tit">{{arr[0].title}}</p>
        <div class="box1" v-for="(item,index) in arr1" :key="index">
          <p class="mig"><img :src=item.img_url alt=""></p>
          <div class="rr">
            <p class="co">{{item.group_name}}</p>
            <p class="time">{{item.group_time}}</p>
            <p class="address">{{item.group_address}}</p>
          </div>
        </div>
      </div>

      <div class="box">
        <p class="tit">{{arr[1].title}}</p>
        <div class="box1" v-for="(item,index) in arr2" :key="index">
          <p class="mig"><img :src=item.img_url alt=""></p>
          <div class="rr">
            <p class="co">{{item.group_name}}</p>
            <p class="time">{{item.group_time}}</p>
            <p class="address">{{item.group_address}}</p>
          </div>
        </div>
      </div>

       <div class="box">
        <p class="tit">{{arr[2].title}}</p>
        <div class="box1" v-for="(item,index) in arr3" :key="index">
          <p class="mig"><img :src=item.img_url alt=""></p>
          <div class="rr">
            <p class="co">{{item.group_name}}</p>
            <p class="time">{{item.group_time}}</p>
            <p class="address">{{item.group_address}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    arr:[],
    arr1:[],
    arr2:[],
    arr3:[],
  }
},
mounted() {
  this.$axios.get("../../../../static/data/city.json")
  .then((res)=>{
    console.log(res.data.city);
    this.arr=res.data.city
    this.arr1=res.data.city[0].city_list
    this.arr2=res.data.city[1].city_list
    this.arr3=res.data.city[2].city_list
  })
},
}
</script>

<style lang="less" scoped>
.tit{border-bottom: 1px solid #999;padding: .15rem 0;font-weight: bold;}
  .box1{
    display: flex;
    justify-content: space-around;
    padding-top: .15rem;
    .mig{
      width: 30%;
      height: 120px;
      img{width: 100%;height: 120px;}
      }
     .rr{
       width: 65%;
       height: 120px;
       line-height: 30px;
       font-size: .15rem;
       font-weight: 400;
       .co{color: #3377b2;}
       .time{color: #666;}
       .address{
         color: #999;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         }
     } 
  }


</style>