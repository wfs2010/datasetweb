<template>
<!--  页面的基础布局-->
  <layout />
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
<script lang="ts">

import {onMounted, computed, toRef, ref, watch} from 'vue'
import useScroll from "@/hooks/useScroll";
import Layout from "@/components/Layout/layout.vue";
export default {
  components: {Layout},
  setup() {
    let oldScrollTop = ref(false)
    const isScroll =useScroll()
    watch(isScroll,()=>{
      oldScrollTop.value=!oldScrollTop.value
    })
    return {
      oldScrollTop,
    }
  }
}
</script>
