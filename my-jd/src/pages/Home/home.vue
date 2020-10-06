<template>
    <div id="box">
        <div class="head">
            <p>
                <i class="jd"></i>
                <i class="ss"></i>
            </p>
            <input type="text" placeholder="请输入你需要查找的内容" />
            <span>登录</span>
        </div>
        <Banner swiperID="id111" paginationtype="bullets">
            <template #swiper-slide>
                <div
                    class="swiper-slide"
                    v-for="(item, index) in arr"
                    :key="index"
                >
                    <img :src="item" alt="" />
                </div>
            </template>
        </Banner>
        <div class="navbox">
            <div class="nav clearfix">
                <div class="fl" v-for="(item,index) in arrNav" :key="index">
                    <p class="navimg">
                        <span><img :src=item.url alt=""/></span>
                        <br />{{item.title}}
                    </p>
                </div>
            </div>
        </div>
        <p class="pi"><img src="../../assets/images/img/fuli.jpg" alt=""></p>
        <div class="ms">
            <div class="djs">
                <i><img src="../../assets/images/icon/seckill-icon.png" alt=""></i>
                <span>掌上秒杀<nut-countdown :end-time="end"  ></nut-countdown></span>
                <span class="sfr">经选轮番秒</span>              
            </div>
            <ul class="clearfix">
                <li v-for="(item,index) in myli" :key="index">
                    <img :src=item.url alt="">
                    <p class="red">{{item.title}}</p>
                    <p class="hua">{{item.title2}}</p>
                </li>
            </ul>           
        </div>
        <p class="pi"><img src="../../assets/images/img/aishenghuo.jpg" alt=""></p>
        <div class="sjzx">
            <div class="sjz">
                <img src="../../assets/images/img/cp1.jpg" alt="">
            </div>
            <div class="sjy">
                <img src="../../assets/images/img/cp2.jpg" alt="" class="tub">
                <img src="../../assets/images/img/cp3.jpg" alt="">
            </div>
        </div>
       <p class="wntj"><span><img src="../../assets/images/img/scroll-to-top-icon.png" alt=""></span>为您推荐</p>
      <div class="wnbox">
          <ul>
              <li v-for="(item,index) in wnt" :key="index">
                  <img :src=item.url alt="">
                  <p class="ove">{{item.title}}</p>
                  <p class="jiaq">{{item.money}}</p>
                  <p class="hpv">{{item.good}}<button>看相似</button></p>
              </li>            
          </ul>
      </div>
     <div class="db">
         <router-link to="/login">登录</router-link>
         <router-link to="/register">注册</router-link>
         <a href="#">反馈</a>
         <a href="#" class="bu"  @click="onClick">返回顶部</a>
     </div>

         <ul class="kh">
             <li>
                 <i class="khd"></i>
                <p>客户端</p>
             </li>
             <li>
                  <i class="cpb"></i>
                <p>触屏版</p>
             </li>
             <li>
                  <i class="dnb"></i>
                <p>电脑版</p>
             </li>
         </ul>
      <p class="wz">Copyright &copy 2004-2018 京东JD.com版权所有</p>
    <nut-backtop 
        :bottom="60"
        :right="20"
        :z-index="10"
>
</nut-backtop>
    </div>
</template>

<script>
import Banner from "../../components/banner";
export default {
    components: {
        Banner,
    },
    data() {
        return {
            arr: [
                require("../../assets/images/img/1.jpg"),
                require("../../assets/images/img/2.jpg"),
                require("../../assets/images/img/3.jpg"),
                require("../../assets/images/img/4.jpg"),
                require("../../assets/images/img/5.jpg"),
                require("../../assets/images/img/6.jpg"),
                require("../../assets/images/img/7.jpg"),
                require("../../assets/images/img/8.jpg"),
            ],
            arrNav:[
                {title:"分类查询",url:require("../../assets/images/icon/nav0.png")},
                {title:"物流查询",url:require("../../assets/images/icon/nav1.png")},
                {title:"购物车",url:require("../../assets/images/icon/nav2.png")},
                {title:"我的京东",url:require("../../assets/images/icon/nav3.png")},
                {title:"京东生鲜",url:require("../../assets/images/icon/nav4.png")},
                {title:"领券中心",url:require("../../assets/images/icon/nav5.png")},
                {title:"京东超市",url:require("../../assets/images/icon/nav6.png")},
                {title:"我的关注",url:require("../../assets/images/icon/nav7.png")},
            ],
            myli:[
                {title:'￥80',title2:'￥150',url:require("../../assets/images/img/pro01.jpg")},
                {title:'￥10',title2:'￥30',url:require("../../assets/images/img/pro02.jpg")},
                {title:'￥40',title2:'￥100',url:require("../../assets/images/img/pro03.jpg")},
                {title:'￥80',title2:'￥140',url:require("../../assets/images/img/pro04.jpg")},
            ],
            wnt:[
                {title:'晋腾家用不锈钢手动压面机手摇多功能面条机水果榨汁两面用',money:'￥99',good:'好评率94%',url:require('../../assets/images/img/item01.jpg')},
                {title:'品柜连衣裙长袖2018春装新款韩版时尚女装修身显瘦好身材',money:'￥198',good:'好评率99%',url:require('../../assets/images/img/item02.jpg')},
                {title:'LG29WK600-W 29英寸 21:9超宽屏 FHD FressSynihkhf',money:'￥1988',good:'好评率99%',url:require('../../assets/images/img/item03.jpg')},
                {title:'劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒',money:'￥23.80',good:'好评率99%',url:require('../../assets/images/img/item04.jpg')},
            ]
        };
    },
     methods: {
    onClick() {
      console.log("触发回到顶部按钮")
    }
  },
};
</script>

<style lang="less" scoped>
#box{margin-bottom: 1rem;}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
.box {
    position: relative;
    font-size: .16rem;
}
.head {
    position: relative;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    z-index: 10;
    text-align: center;
    input {
        height: 0.4rem;
        width: 2.3rem;
        padding-left: 0.8rem;
        border-radius: 0.2rem;
        font-size: 0.16rem;
        border: none;
    }
    i {
        position: absolute;
        display: inline-block;
        width: 0.3rem;
        height: 0.25rem;
        left: 0.3rem;
        bottom: 0.12rem;
        background: url(../../assets/images/img/sprites.png) 0px 0px no-repeat;
        background-size: 3rem;
    }
    .ss {
        background-position: -1.2rem 0px;
        left: 0.65rem;
    }
    span {
        color: #fff;
    }
}
.navbox{border-bottom: 1px solid #999;width: 100%;}
.nav {
    width: 90%;
    margin: 0.1rem auto;
    text-align: center;
    
    .fl {
        width: 25%;
        float: left;
        text-align: center;
        margin-top: 0.1rem;
        .navimg {
            width: 0.7rem;
            text-align: center;
            span {
                display: inline-block;
                width: 0.5rem;
                img {
                    width: 100%;
                }
            }
        }
    }
}
.pi{width: 100%;margin-top:.1rem; img{width: 100%;}}
.ms{
    width: 98%;border: 1px solid #999;margin: .08rem auto;padding-top: .15rem;
    padding-bottom: .2rem;
    .djs{
        i{display: inline-block;width: .3rem;padding-left:.1rem; img{width: 100%;}}
    span{color: #d8505c;}
    .sfr{float: right;padding: .1rem .1rem; font-weight: bold;}
    *{vertical-align: middle;}
    }
   ul{
       text-align: center;
       li{list-style: none;width: 25%;float: left;img{width: 100%;}
       .red{color: red;}.hua{text-decoration: line-through;}}
   } 
}
.sjzx{
    display: flex;
    img{width: 100%;}
    .sjz{width: 50%;border: 1px solid #999;}
    .sjy{width: 50%;border: 1px solid #999;.tub{border-bottom: 1px solid #999;}}
}
.wntj{text-align: center;margin:.2rem 0; span{display: inline-block;width: 7%;
padding-right: .1rem; img{width: 100%;}}
*{vertical-align: middle;}}
.wnbox{
    ul{display: flex;flex-flow:  wrap;justify-content: space-between;
        li{list-style: none;width: 49%;border:1px solid #999;margin-bottom:.1rem; img{width: 100%;}
          .ove{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;} 
          .jiaq{color: red;padding: .1rem 0px;font-weight: bold;}button{float: right;font-size: .14rem;}
         
         .hpv{margin-bottom: 10px;}
          p{margin: 0px .1rem;}
        }
    }
}
.db{display: flex;border-top: 1px solid #999;.bu{border: none;}
border-bottom: 1px solid #999;
a{text-decoration: none;width: 25%;text-align: center;border-right: 1px solid #999;margin: .15rem 0;color: #000;}}
.kh{display: flex;
li{
    list-style: none;width: 33%;text-align: center;border-bottom:1px solid #999;padding:.1rem 0;
    i{display: inline-block;width: .4rem;height: .4rem; 
    background: url(../../assets/images/img/sprites.png) 0px -.65rem no-repeat;background-size: 2rem;}
    .khd{background-position: -1.17rem -.65rem;}
    .cpb{background-position: -.35rem -.65rem;}
    .dnb{background-position: -.75rem -.65rem;}
}
}
.wz{text-align: center;}
</style>