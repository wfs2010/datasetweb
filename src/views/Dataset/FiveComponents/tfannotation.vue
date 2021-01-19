<template>
  <table class="table table-bordered border-dark">
      <smallcoptf v-for="lldata in ll" :key="lldata.ID" :llarray="lldata"></smallcoptf>
  </table>


</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, computed} from 'vue'
import Smallcoptf from "@/views/Dataset/FiveComponents/smallcoptf.vue";
import {TFannotation} from "@/store";

export default defineComponent({
  name: 'tfannotation',
  components: {Smallcoptf},
  props:{
    llarray: {
      type: Array as PropType<TFannotation[]>,
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
