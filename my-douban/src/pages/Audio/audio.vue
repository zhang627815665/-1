<template>
    <div>
        <HeadItem title="广播">
            <template #mystot>
                <span class="rightimg">
                    <img
                        src="../../assets/images/ic_status_search_user.png"
                        alt=""
                        class="rimg"
                    />
                    <img
                        src="../../assets/images/ic_chat_green.png"
                        alt=""
                        class="rimg2"
                    />
                </span>
            </template>
        </HeadItem>
        <div class="logbox">
            <router-link to="login">
                <i><img src="../../assets/登录.png" alt="" /></i>
                <span>登录发广播</span>
            </router-link>
        </div>
        <div class="nr">
            <div class="dou">
                <i><img src="../../assets/豆瓣.png" alt="" /></i>
                <p>
                    豆瓣 <span>写了日记</span><br />
                    <span>2018-05-23 10:39:23</span>
                </p>
            </div>
            <div class="myt">
                5月24日凌晨3：00~6：00豆瓣停机维护
                <p class="tp">
                    因业务发展需要，豆瓣计划于5月24日(星期四)凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关的都进行维护
                </p>
            </div>
            <div class="itu">
               <span><i class="iconfont icon-dianzan"></i>29</span>
                <span><i class="iconfont icon-pinglun"></i>14</span>
                <span><i class="iconfont icon-fenxiang"></i>25</span>
                <span class="spain">. . .</span>
            </div>
        </div>
        <div class="nr">
            <div class="dou">
                <i><img src="../../assets/豆瓣.png" alt="" /></i>
                <p>
                    豆瓣 <span>写了日记</span><br />
                    <span>2018-05-23 10:39:23</span>
                </p>
            </div>
            <div class="myt">
                北京事件3月28日19点19分，豆瓣首部被百万评分人数电影诞生
            </div>
            <div class="itu">
                <span><i class="iconfont icon-dianzan"></i>29</span>
                <span><i class="iconfont icon-pinglun"></i>14</span>
                <span><i class="iconfont icon-fenxiang"></i>25</span>
                <span class="spain">. . .</span>
            </div>
        </div>
         <div class="nr">
            <div class="dou">
                <i><img src="../../assets/豆瓣.png" alt="" /></i>
                <p>
                    豆瓣 <span>写了日记</span><br />
                    <span>2018-05-23 10:39:23</span>
                </p>
            </div>
            <div class="myt">
                北京事件3月28日19点19分，豆瓣首部被百万评分人数电影诞生
            </div>
            <div class="itu">
                <span><i class="iconfont icon-dianzan"></i>29</span>
                <span><i class="iconfont icon-pinglun"></i>14</span>
                <span><i class="iconfont icon-fenxiang"></i>25</span>
                <span class="spain">. . .</span>
            </div>
        </div>
    </div>
</template>

<script>
import HeadItem from "../../components/HeadItem";
export default {
    components: {
        HeadItem,
    },
};
</script>

<style scoped lang='less'>
a {
    text-decoration: none;
}
.rightimg > img {
    position: absolute;
    width: 0.3rem;
    right: 0.15rem;
    bottom: 0.1rem;
}
.rightimg > img.rimg {
    right: 0.65rem;
}
.logbox {
    border-bottom: 1px solid #dadce0;
    padding: 0.13rem 0.2rem;
    vertical-align: middle;
    i {
        display: inline-block;
        width: 0.4rem;
        padding-right: 0.12rem;
        img {
            width: 100%;
        }
    }
    * {
        vertical-align: middle;
    }
    span {
        color: #999;
    }
}
.dou {
    position: relative;
    margin: 0.2rem;
    i {
        position: absolute;
        display: inline-block;
        width: 0.49rem;
        padding-right: 0.12rem;
        left: -0.05rem;
        img {
            width: 100%;
        }
    }
    p {
        padding-left: 0.6rem;
    }
    span {
        color: #999;
    }
}
.myt {
    margin-left: .77rem;
    padding: .15rem;
    width: 2.5rem;
    background: #f9f9f9;
    .tp {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 0.14rem;
        padding-top: 0.08rem;
    }
}
.itu {
    margin-left: .77rem;
    margin-top: .2rem;
    span {
        padding-right: .3rem;
        color: #999;
    }
    .spain {
        float: right;
        font-size: .18rem;
    }
}
.nr{margin-top: .3rem;}
</style>