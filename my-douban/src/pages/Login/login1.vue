<template>
  <div class="box">
      <p class="X">X</p>
      <h1 class="centering">登录豆瓣</h1>
      <p class="centering">登录注册表示同意<span class="aqua">豆瓣使用协议、隐私政策</span></p>
      <form action="">
         <p class="myph">
             <input type="text" placeholder="手机号/邮箱" class="phone">
         </p>   
         <p class="mypw">
             <input type="text" placeholder="密码" class="pw">
             </p>
         <a href="#" class="logining centering">登录</a>
         <div class="mg">
             <router-link to="/login">
             <span class="aqua">免密码登录</span>
             </router-link>
             <span class="aqua">海外手机登录</span>
             <span class="fr">找回密码</span>
             </div>
      </form>
      <div class="flooting">
            <p>第三方登录</p>
            <p>
                <span><i class="iconfont icon-28"></i></span>
                <span><i class="iconfont icon-tubiaozhizuomoban"></i></span>
                </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
*{margin: 0;padding: 0;}
.box{
    width: 3.4rem;
    margin: 10px auto;
    // text-align: center;
}
a{text-decoration: none;}
.fr{
    float: right;
}
.centering{
    text-align: center;
}
.aqua{
    color: #42bd56;
}
form{
    margin-top: .3rem;
    input{
        width: 3.3rem;
        font-size: .16rem;
        height: .4rem;
        padding-left: .1rem;
    }
    // .myph{
    //     position: relative;
    // }
    // .phone{
    //     width: 2.8rem;
    //     padding-left: 60px;
    // }
    // .baliu{
    //     font-size: .16rem;
    //     position: absolute;
    //     left: 0;
    //     bottom: .13rem;
    //     border-right: 1px solid #dadada;
    //     padding: 0 .1rem;
    // }
    // .mypw{
    //     position: relative;       
    //     .pw{padding-left: .1rem;width: 3.3rem;}
    //    .yz{
    //        position: absolute;
    //        right: .1rem;
    //        bottom: .13rem;
    //    }
    // }
    .logining{
        display: block;
        width: 3.43rem;
        height: .4rem;
        line-height: .4rem;
        background: #a0deaa;
        margin-top: .2rem;
        text-decoration: none;
        color: #fff;
    }
    .mg{margin-top: .2rem;}

}
.flooting{
    margin-top: 1.5rem;
    text-align: center;
  i{font-size: .3rem;text-align: center;color: #39bb4a;
        display: inline-block;width: .4rem;height: .4rem; line-height: .4rem; border: 1px solid #dddddd;border-radius: .2rem;margin:.2rem; }      
        .icon-28{color: red;
        }  
}
</style>