<template>
  <div class="hello">
  <nut-buttongroup 
  shape="circle"
>
  <nut-button 
    type="light"
  >
    重置
  </nut-button>
  <nut-button>
    确定
  </nut-button>
</nut-buttongroup>
<nut-buttongroup 
  type="menu"
>
  <nut-button 
    type="light" 
    icon="action" 
    color="#f00"
  >
    关于
  </nut-button>
  <nut-button 
    type="light" 
    icon="more" 
    color="#f00"
  >
    更多
  </nut-button>
  <nut-button 
    type="light" 
    icon="search" 
    color="#f00"
  >
    关闭
  </nut-button>
  <nut-badge 
    value="2" 
    top="0.5rem" 
    right="2rem"
  >
    <nut-button 
      type="light" 
      icon="trolley" 
      color="#f00"
    >
      购物车
    </nut-button>
  </nut-badge>      
  <nut-button 
    type="light" 
    icon="tick" 
    color="#f00"
  >
    成功
  </nut-button>
</nut-buttongroup>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
