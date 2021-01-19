<template>
  <table class="table table-bordered border-dark">
    <thead>
    <tr>
      <th scope="col">chr</th>
      <th scope="col">pos</th>
      <th scope="col">anc</th>
      <th scope="col">GC</th>
      <th scope="col">CpG</th>
      <th scope="col">scoreSegDup</th>
      <th scope="col">priPhCons</th>
      <th scope="col">mamPhCons</th>
      <th scope="col">verPhCons</th>
      <th scope="col">verPhyloP</th>
      <th scope="col">bStatistic</th>
      <th scope="col">bStatistic</th>
      <th scope="col">fitCons_all</th>
      <th scope="col">SiPhy</th>
      <th scope="col">ID</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="lldata in ll" :key="lldata.ID" >
      <td>{{lldata.chr}}</td>
      <td>{{lldata.pos}}</td>
      <td>{{lldata.anc}}</td>
      <td>{{lldata.GC}}</td>
      <td>{{lldata.CpG}}</td>
      <td>{{lldata.scoreSegDup}}</td>
      <td>{{lldata.priPhCons}}</td>
      <td>{{lldata.mamPhCons}}</td>
      <td>{{lldata.verPhCons}}</td>
      <td>{{lldata.GerpN}}</td>
      <td>{{lldata.GerpS}}</td>
      <td>{{lldata.bStatistic}}</td>
      <td>{{lldata.fitCons_all}}</td>
      <td>{{lldata.SiPhy}}</td>
      <td>{{lldata.ID}}</td>
    </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, computed} from 'vue'
import {ConservationAggregation} from "@/store";

export default defineComponent({
  name: 'conservationaggregation',
  props:{
    llarray: {
      type: Array as PropType<ConservationAggregation[]>,
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
