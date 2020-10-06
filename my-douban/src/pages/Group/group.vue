<template>
  <div>
      <HeadItem title='小组'>
              <template #mystot>
                    <span class="rightimg">
                        <img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="rimg">
                        <img src="../../assets/images/ic_chat_green.png" alt="" class="rimg2">
                    </span>
              </template>
        </HeadItem>
        <Grouping></Grouping>
  </div>
</template>

<script>
import HeadItem from '../../components/HeadItem'
import Grouping from '../../components/grouping'
export default {
components:{
  HeadItem,Grouping
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
</style>