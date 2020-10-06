<template>
  <div class="box">
      <p class="X">X</p>
      <h1 class="centering">登录豆瓣</h1>
      <p class="centering">登录注册表示同意<span class="aqua">豆瓣使用协议、隐私政策</span></p>
      <form action="">
         <p class="myph">
             <span class="baliu">+86</span>
             <input type="text" placeholder="手机号" class="phone">
         </p>   
         <p class="mypw">
             <input type="text" placeholder="手机验证码" class="pw">
             <span class="aqua yz">获取验证码</span>
             </p>
         <a href="#" class="logining centering">登录</a>
         <div class="mg">
             <router-link to="/login1"><span  class="aqua">账户密码登录</span>
             </router-link>
             
             <span class="fr">验证码收不到？</span>
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
        
        font-size: .16rem;
        height: .4rem;
    }
    .myph{
        position: relative;
    }
    .phone{
        width: 2.8rem;
        padding-left: 60px;
    }
    .baliu{
        position: absolute;
        left: 0;
        bottom: .13rem;
        border-right: 1px solid #dadada;
        padding: 0 .1rem;
    }
    .mypw{
        position: relative;       
        .pw{padding-left: .1rem;width: 3.3rem;}
       .yz{
           position: absolute;
           right: .1rem;
           bottom: .13rem;
       }
    }
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
    span{       
        i{font-size: .3rem;text-align: center;color: #39bb4a;
        display: inline-block;width: .4rem;height: .4rem; line-height: .4rem; border: 1px solid #dddddd;border-radius: .2rem;margin:.2rem; }      
        .icon-28{color: red;
        }
       
        }
}
</style>