<template>
    <div class="item" @click="fn">
        <template v-if='!flag'>
            <slot name="normalImg"></slot>
        </template>
         <template v-if='flag'>
            <slot name="activeImg"></slot>
        </template><br/>
        <span :class="{active:flag}">{{title}}</span>
    </div>
</template>
<script>
export default {
    props:['mark','curr','title'],
    computed: {
        flag(){
            if(this.mark==this.curr){
                return true
            }
             return false;
        }
    },
    methods: {
        fn(){
            console.log(1);
            this.$emit("change",this.mark)
        }
    },
}
</script>
<style  scoped>
/* .item{
    flex: 1;
} */
.item span{
    color: gray;
    /* font-size: .16rem; */
}
.item span.active{
    color: #42bd56;
}
</style>