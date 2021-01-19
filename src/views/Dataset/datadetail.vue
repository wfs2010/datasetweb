<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">chr</th>
      <th scope="col">pos</th>
      <th scope="col">ID</th>
      <th scope="col">ref_alt</th>
      <th scope="col">gene_locus</th>
      <th scope="col">P_value</th>
      <th scope="col">tf_motif</th>
      <th scope="col">top_lead_ID</th>
      <th scope="col">top_lead_p</th>
      <th scope="col">top_lead_rsquare</th>
      <th scope="col">mark</th>
      <th scope="col">avatar</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <intable v-for="ll in datalist" :key="ll.ID" :intabledata="ll"></intable>
  </table>

</template>
<script lang="ts">
import { reactive, toRefs, ref, defineComponent,computed, PropType } from 'vue'
import {GawData} from '@/store'
import Description from "@/views/Dataset/description.vue";
import Intable from "@/views/Dataset/intable.vue";
export default defineComponent({
  name: 'datadetail',
  components: {Intable},
  props: {
    list: {
      type: Array as PropType<GawData[]>,
      required: true
    }
  },
  setup (props) {
    const datalist = computed(() => {
      return props.list
    })
    let isdj=ref('none')
    const isdjfunc = ()=>{
      if (isdj.value==='none'){
        isdj.value='block'
      }else {
        isdj.value='none'
      }
    }
    const state = reactive({
      count: 0
    })
    return {
      ...toRefs(state),
      isdj,
      isdjfunc,
      datalist
    }
  }
})
</script>

<style scoped>

</style>
