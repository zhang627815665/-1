<template>
  <div class="bg">
    <slot name='mystot1'></slot>
    <span class="fl"><</span>
    <h2>{{title}}</h2>
    <span class="fr">...</span>
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
            background-color: #f6f6f6;
            text-align: center;
            height: .5rem;
            line-height: .5rem;
        }
 h2{
   font-size: .16rem;
 }  
 span{font-size: .4rem;}
 .fl{position: absolute;left: .2rem;bottom: 0px;} 
  .fr{position: absolute;right: .1rem;bottom: .1rem;}       
</style>