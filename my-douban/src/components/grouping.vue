<template>
    <div class="box">
        <div class="boxa">
            <h3>{{ arr[0].title }}</h3>
            <ul>
                <li v-for="(item, index) in arr1" :key="index">
                    <p class="pp">
                        <span class="sin"><img :src="item.img_url" alt="" /></span>
                        <span class="sro">{{ item.group_name }}</span>
                        <span class="r">{{item.group_member}}</span>
                    </p>
                    <p class="t">
                        {{ item.topic_title }}
                    </p>
                </li>
            </ul>
            <p class="gengd">更多相关小组</p>
        </div>

        <div class="boxa">
            <h3>{{ arr[1].title }}</h3>
            <ul>
                <li v-for="(item, index) in arr2" :key="index">
                    <p class="pp">
                        <span class="sin"><img :src="item.img_url" alt="" /></span>
                        <span class="sro">{{item.group_name}}</span>
                        <span class="r">{{item.group_member}}</span>
                    </p>
                    <p class="t">
                        {{ item.topic_title }}
                    </p>
                </li>
            </ul>
        </div>

        <div class="boxa">
            <h3>{{ arr[2].title }}</h3>
            <ul>
                <li v-for="(item, index) in arr3" :key="index">
                    <p class="pp">
                        <span class="sin"><img :src="item.img_url" alt="" /></span>
                        <span class="sro">{{item.group_name}}</span>
                        <span class="r">{{item.group_member}}</span>
                    </p>
                    <p class="t">
                        {{ item.topic_title }}
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
            arr: [],
            arr1: [],
            arr2:[],
            arr3:[],
        };
    },
    mounted() {
        this.$axios.get("../../static/data/groupData.json").then((res) => {
            console.log(res.data.group[1]);
            this.arr = res.data.group;
            this.arr1 = res.data.group[0].group_list;
            this.arr2 = res.data.group[1].group_list;
            this.arr3 = res.data.group[2].group_list;
        });
    },
};
</script>

<style lang="less" scoped>
ul > li {
    list-style: none;
    margin: 0.2rem 0;
}
.box {
    margin-left: 20px;
    p {
        margin-right: 10px;
        padding-bottom: 10px;
        .r {
            float: right;
            color: #999;
        }
    }
    .t {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    li {
        border-bottom: 1px solid #999;
    }
    h3 {
        margin: .1rem 0;
    }
    .pp{
        *{vertical-align: middle;}
    }
    .sin{
        width: .4rem;display: inline-block;padding-right: .1rem;
        
        img{
            width: 100%;
        }
    }
    .sro{font-weight: bold;}
    .gengd{text-align: center;color: #51c264;font-weight: bold;}
    .boxa{margin-bottom: .4rem;}
}
</style>