<template>
  <div>
    <HeadItem title="登录"></HeadItem>
     <router-view></router-view>
  </div>
</template>

<script>
import HeadItem from '../../components/HeadItem'
export default {
components:{
 HeadItem,
},

}
</script>

<style scoped lang='less'>

</style>