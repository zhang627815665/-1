<template>
    <div>
        <p class="tite">最受关注的书<span>更多</span></p>
        
        <div class="box">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <p class="imgbox">
                        <img :src=item.cover_url alt="" />
                    </p>
                    <p class="tit">{{item.title}}</p>
                    <p class="ping">{{item.score}}</p>
                </li>
            </ul>
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
    this.$axios.get("../../../../static/data/read.json")
    .then((res)=>{
      console.log(res.data.recommend_one);
      this.arr=res.data.recommend_one
    })
  },
};
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    overflow-x:auto;    
    ul {
        width: 9rem;
        // height: 80px; 
        li {
            float: left;
            width: 1.25rem;
            list-style: none;
            text-align: center;
            padding-left: .2rem;

            .imgbox {
                width: 1.25rem;
                height: 1.9rem;
              
                img{
                  width: 100%;
                }
            }
            .ping {
                color: #838383;
            }
        }
    }
}
.tite {
        padding: 20px;
        font-size: .18rem;
        span{float: right;color: #7ed53d;font-size: .14rem;}
    }

</style>