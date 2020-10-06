<template>
    <div>
        <div class="mybox">
            <p class="tite">{{ arr[0].title }}<span>更多</span></p>
            <div class="box">
                <ul>
                    <li v-for="(item, index) in arr1" :key="index">
                        <p class="imgbox">
                            <img :src="item.cover_url" alt="" />
                        </p>
                        <p class="tit">{{ item.title }}</p>
                        <p class="ping">评分：{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mybox">
            <p class="tite">{{ arr[1].title }}<span>更多</span></p>
            <div class="box">
                <ul>
                    <li v-for="(item, index) in arr2" :key="index">
                        <p class="imgbox">
                            <img :src="item.cover_url" alt="" />
                        </p>
                        <p class="tit">{{ item.title }}</p>
                        <p class="ping">评分：{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mybox">
            <p class="tite">{{ arr[2].title }}<span>更多</span></p>
            <div class="box">
                <ul>
                    <li v-for="(item, index) in arr3" :key="index">
                        <p class="imgbox">
                            <img :src="item.cover_url" alt="" />
                        </p>
                        <p class="tit">{{ item.title }}</p>
                        <p class="ping">评分：{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [],
            arr1: [],
            arr2: [],
            arr3: [],
        };
    },
    mounted() {
        this.$axios.get("../../../../static/data/music.json").then((res) => {
            console.log(res.data.group);
            this.arr = res.data.group;
            this.arr1 = res.data.group[0].group_list;
            this.arr2 = res.data.group[1].group_list;
            this.arr3 = res.data.group[2].group_list;
        });
    },
};
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    overflow-x: auto;

    ul {
        width: 9rem;
        // height: 80px;
        li {
            float: left;
            width: 1.25rem;
            list-style: none;
            text-align: center;
            padding-left: 0.2rem;

            .imgbox {
                width: 1.25rem;
                // height: 1.9rem;

                img {
                    width: 100%;
                }
            }
            .ping {
                color: #838383;
            }
            .tit {
                height: 0.8rem;
            }
        }
    }
}
.tite {
    padding: 0.2rem;
    font-size: 0.18rem;
    font-weight: bold;
    span {
        float: right;
        color: #7ed53d;
        font-size: 0.14rem;
    }
}
</style>