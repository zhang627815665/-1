<template>
    <div>
        <div class="mybox">
            <p class="tite">正在上映的电影北京</p>
            <div class="box">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <p class="imgbox">
                      <img :src=item.cover_url alt="">
                    </p>
                    <p class="tit">{{item.title}}</p>
                    <p class="ping">评分：{{item.score}}</p>
                </li>
            </ul>
            </div>
        </div>

        <div class="mybox two">
            <p class="tite">即将上映的电影</p>
            <div class="box">
            <ul>
                <li v-for="(item,index) in arr2" :key="index">
                    <p class="imgbox">
                      <img :src=item.cover_url alt="">
                    </p>
                    <p class="tit">{{item.title}}</p>
                    <p class="ping">评分：{{item.score}}</p>
                </li>
            </ul>
            </div>
        </div>
        

        <!-- <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [],
            arr2:[],
            // value: 3.7
        };
    },
    mounted() {
        this.$axios.get("../../../../static/data/broadcast.json").then((res) => {
            console.log(res.data.recommend_one);
            this.arr=res.data.recommend_one,
            this.arr2=res.data.recommend_two
        });
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
    }

</style>