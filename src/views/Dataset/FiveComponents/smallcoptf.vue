<template>
  <tbody>
        <tr>
          <th >{{ll.ID}} | {{ll.Genotype}} | {{ll.Binding_Affinity_Change}}</th>
          <th class="col-1 text-center" @click="isdjfunc">
            <i class="bi bi-arrow-bar-down"></i>
          </th>
        </tr>
        <tr v-if="isdj">
          <td colspan="12">
              <table class="table table-bordered border-dark" >
              <tbody>
              <tr>
                <th scope="row">Factor</th>
                <td>{{ll.Factor}}</td>
              </tr>
              <tr>
                <th scope="row">ID</th>
                <td>{{ll.ID}}</td>
              </tr>
              <tr>
                <th scope="row">Genotype</th>
                <td colspan="2">{{ll.Genotype}}</td>
              </tr>
              <tr>
                <th scope="row">Strand</th>
                <td colspan="2">{{ll.Strand}}</td>
              </tr>
              <tr>
                <th scope="row">Start</th>
                <td colspan="2">{{ll.Start}}</td>
              </tr>
              <tr>
                <th scope="row">End</th>
                <td colspan="2">{{ll.End}}</td>
              </tr>
              <tr>
                <th scope="row">Relative Position</th>
                <td colspan="2">{{ll.Relative_Position}}</td>
              </tr>
              <tr>
                <th scope="row">Binding Affinity Change</th>
                <td colspan="2">{{ll.Binding_Affinity_Change}}</td>
              </tr>
              <tr>
                <th scope="row">Allele Orientation</th>
                <td colspan="2">{{ll.Allele_Orientation}}</td>
              </tr>
              <tr>
                <th scope="row">Variant Affinity Effect</th>
                <td colspan="2">{{ll.Variant_Affinity_Effect}}</td>
              </tr>
              <tr>
                <th scope="row">Effect P-value</th>
                <td colspan="2">{{ll.Effect_P_value}}</td>
              </tr>
              <tr>
                <th colspan="2">
                  <img :src="ll.avatar">
                </th>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
  </tbody>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, ref, PropType, computed} from 'vue'
import {TFannotation} from "@/store";

export default defineComponent({
  name: 'smallcoptf',
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
    let isdj=ref(false)
    const isdjfunc = ()=>{
      if (isdj.value===false){
        isdj.value=true
      }else {
        isdj.value=false
      }
    }
    const ll = computed(()=> props.llarray)
    return {
      ...toRefs(state),
      isdj,
      isdjfunc,
      ll
    }
  }
})
</script>

<style scoped>

</style>
