<template>
  <navbar></navbar>
  <router-view :key="$route.fullPath"></router-view>
  <fote/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Navbar from "@/components/Navbar";
import Fote from "@/components/Fote/fote";
// import Fote from "@/components/Fote/fote";

export default {
name: "layout",
  components: {Fote,  Navbar},
  setup() {
const state = reactive({
count: 0,
})
return {
    ...toRefs(state),
    test: require('../../assets/hero.svg')
}
}
}
</script>

<style scoped>
/*.carousel-caption p,h5{*/
/*  !*color: #001528;*!*/
/*}*/

</style>
