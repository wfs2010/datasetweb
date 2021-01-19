<template>
  <table class="table table-bordered border-dark">
    <smallconphi v-for="lldata in ll" :key="lldata.ID" :llarray="lldata"></smallconphi>
  </table>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, computed, PropType} from 'vue'
import Smallconphi from "@/views/Dataset/FiveComponents/smallconphi.vue";
import {Histonemodification} from "@/store";

export default defineComponent({
  name: 'histonemodification',
  components: {Smallconphi},
  props:{
    llarray: {
      type: Array as PropType<Histonemodification[]>,
      require:true
    },
  },
  setup (props) {
    const state = reactive({
      count: 0
    })
    const ll = computed(()=> props.llarray)
    return {
      ...toRefs(state),
      ll
    }
  }
})
</script>

<style scoped>

</style>
