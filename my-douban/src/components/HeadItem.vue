<template>
  <div class="bg">
    <slot name='mystot1'></slot>
    <h2>{{title}}</h2>
    <slot name='mystot'></slot>
  </div>
</template>

<script>
export default {
   props:['title','src'],
}
</script>

<style scopde>
.bg {
            position: relative;
            width: 100%;
            background-color: #f7f7f7;
            text-align: center;
            border-bottom: 1px solid #dbdbdb;
            height: .5rem;
            line-height: .5rem;
        }
 h2{
   font-size: .16rem;
 }       
</style>