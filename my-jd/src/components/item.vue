<template>
    <div class="item" @click="fn">
        <template v-if='!flag'>
            <slot name="normalImg"></slot>
        </template>
         <template v-if='flag'>
            <slot name="activeImg"></slot>
        </template><br/>
    </div>
</template>
<script>
export default {
    props:['mark','curr',],
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

</style>