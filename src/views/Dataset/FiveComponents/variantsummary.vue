<template>
  <table class="table table-bordered border-dark">
    <thead>
    <tr>
      <th scope="col">chr</th>
      <th scope="col">pos</th>
      <th scope="col">ref</th>
      <th scope="col">alt</th>
      <th scope="col">AnnoType</th>
      <th scope="col">Consequence</th>
      <th scope="col">GeneID</th>
      <th scope="col">FeatureID</th>
      <th scope="col">GeneName</th>
      <th scope="col">SegwayFeature</th>
      <th scope="col">ID</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="lldata in ll" :key="lldata.ID" >
      <td>{{lldata.chr}}</td>
      <td>{{lldata.pos}}</td>
      <td>{{lldata.ref}}</td>
      <td>{{lldata.alt}}</td>
      <td>{{lldata.AnnoType}}</td>
      <td>{{lldata.Consequence}}</td>
      <td>{{lldata.GeneID}}</td>
      <td>{{lldata.FeatureID}}</td>
      <td>{{lldata.GeneName}}</td>
      <td>{{lldata.SegwayFeature}}</td>
      <td>{{lldata.ID}}</td>
    </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, computed} from 'vue'
import {Variantsummary} from '@/store'
export default defineComponent({
  name: 'variantsummary',
  props:{
    llarray: {
      type: Array as PropType<Variantsummary[]>,
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
