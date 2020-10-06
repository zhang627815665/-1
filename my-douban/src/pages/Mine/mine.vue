<template>
  <div>
      <HeadItem title='我的'>
              <template #mystot>
                    <span class="rightimg">
                        <img src="../../assets/images/ic_settings.png" alt="" class="rimg2">
                    </span>
              </template>
        </HeadItem>
        <div class="topbox">
          <p><i class="iconfont icon-mima"></i><br/>
            密码管理
            </p>
          <p><i class="iconfont icon-icon-copy"></i><br/>银行卡管理</p>
        </div>
        <ul>
          <li class="myli" v-for="(item,index) in arr" :key="index">
            <div class="libox">
              <i :class=item.myi></i>
              <span>{{item.title}}</span>
              <span class="fr">></span>
            </div>
          </li>
        </ul>
  </div>
</template>

<script>
import HeadItem from '../../components/HeadItem'
export default {
  data() {
    return {
      arr:[
        {myi:'iconfont icon-icon-copy',title:'风险承受能力评估'},
        {myi:'iconfont icon-anquanbaozhang',title:'安全保障'},
        {myi:'iconfont icon-yonghuming-01-01',title:'我的关注'},
        {myi:'iconfont icon-bangzhuzhongxin',title:'帮助中心'},
        {myi:'iconfont icon-yonghuming-01-01',title:'关于我们'},
        {myi:'iconfont icon-jianchagengxin',title:'检查更新'},
        {myi:'iconfont icon-bangzhuzhongxin1',title:'联系客服'},
      ]
    }
  },
components:{
  HeadItem
},
}
</script>

<style scoped lang='less'>

.rightimg>img{
  position: absolute;
  width: .3rem;
  right: .15rem;
  bottom: .1rem;
}
.rightimg>img.rimg{
right: .65rem;
}

.topbox{
  display: flex;
  text-align: center;
  border-bottom: 1px solid#dadce0;
  margin-top: .2rem;
  padding-bottom: .1rem;
  p{
    flex: 1;
  }
  i{
  display: inline-block;
  color: #41bc55;
  font-size: .3rem;
  margin-bottom: .1rem;
  
}

}
.myli{
  border-bottom: 1px solid #dadce0;
  height: .5rem;
  line-height: .5rem;
  .libox{
    margin: 0 .2rem;
  }
  .fr{
    float: right;
    font-size: .2rem;
    color: #41bc55;
  }
  i{
    display: inline-block;
    font-size: .2rem;
    color: #41bc55;
    padding-right: .1rem;
  }
}
</style>