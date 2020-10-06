<template>
    <div>
        <p class="tite">近期值得看的电视剧</p>
        <div class="box">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <img :src=item.cover alt="" />
                    <p class="tit">{{item.title}}</p>
                    <p class="ping">
                        <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            :score-template="item.rate"
                        >
                        </el-rate>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[],
    }
  },
  mounted() {
    this.$axios.get("../../../../static/data/tv.json")
    .then((res)=>{
      console.log(res.data.subjects);
      this.arr=res.data.subjects
    })
  },
};
</script>

<style lang="less" scoped>
.box{
  width: 100%;
  overflow: auto;
  ul{
    li{
      float: left;
      width: 25%;
      height: 2.4rem;
      list-style: none;
      text-align: center;
      padding-left: .1rem;
      }
    }
    .tit{font-size: .15rem; height: .4rem;}
    
  }
.tite{
  padding: .2rem;
  font-size: .18rem;
}
img{
  width: 100%;
}

</style>