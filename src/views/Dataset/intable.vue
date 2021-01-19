<template>
  <tbody>
  <tr>
    <th scope="col">{{ll.ID}}</th>
    <th scope="col">{{ll.chr}}</th>
    <th scope="col">{{ll.pos}}</th>
    <th scope="col">{{ll.ID}}</th>
    <th scope="col">{{ll.ref_alt}}</th>
    <th scope="col">{{ll.gene_locus}}</th>
    <th scope="col">{{ll.P_value}}</th>
    <th scope="col">{{ll.tf_motif}}</th>
    <th scope="col">{{ll.top_lead_ID}}</th>
    <th scope="col">{{ll.top_lead_p}}</th>
    <th scope="col">{{ll.top_lead_rsquare}}</th>
    <th scope="col">{{ll.mark}}</th>
    <th scope="col"><img :src="ll.avatar"></th>
    <th scope="col" @click="isdjfunc">
      <i class="bi bi-arrow-bar-down"></i>
    </th>
    <th scope="col" >
      <i class="bi bi-arrow-down-circle" @click="download"></i>
    </th>


  </tr>
  <tr v-if="isdj">
    <td colspan="15">
      <table class="table mb-0" >
        <div style="background-color: #EEE">
          <div class="row my-1 px-4">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-light" style="border-color: #1f2d3d" v-on:click="option=0">Variant Summary</button>
              <button type="button" class="btn btn-light" style="border-color: #1f2d3d" v-on:click="option=1">TF Annotation</button>
              <button type="button" class="btn btn-light" style="border-color: #1f2d3d" v-on:click="option=2">Histone Modification</button>
              <button type="button" class="btn btn-light" style="border-color: #1f2d3d" v-on:click="option=3">Conservation Aggregation</button>
              <button type="button" class="btn btn-light" style="border-color: #1f2d3d" v-on:click="option=4">Hic Cell Sig</button>
            </div>
          </div>
          <div class="row my-1 px-5">
            <variantsummary v-if="option===0" :llarray="intabledata.variantsummary"/>
            <tfannotation v-else-if="option===1" :llarray="intabledata.TFannotation"></tfannotation>
            <histonemodification v-else-if="option===2"  :llarray="intabledata.Histonemodification"></histonemodification>
            <conservationaggregation v-else-if="option===3" :llarray="intabledata.ConservationAggregation"></conservationaggregation>
            <hiccellsig v-else-if="option===4" :llarray="intabledata.HiC"></hiccellsig>
          </div>
          <div class="row">
          </div>
        </div>
      </table>
    </td>
  </tr>
  </tbody>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, computed, ref} from 'vue'
import Variantsummary from "@/views/Dataset/FiveComponents/variantsummary.vue";
import Tfannotation from "@/views/Dataset/FiveComponents/tfannotation.vue";
import Histonemodification from "@/views/Dataset/FiveComponents/histonemodification.vue";
import Conservationaggregation from "@/views/Dataset/FiveComponents/conservationaggregation.vue";
import Hiccellsig from "@/views/Dataset/FiveComponents/hiccellsig.vue";

export default defineComponent({
  name: 'intable',
  components: {Hiccellsig, Conservationaggregation, Histonemodification, Tfannotation, Variantsummary},
  props: {
    intabledata: {
      type: Object,
      required: true
    }
  },
  setup (porps) {
    const state = reactive({
      count: 0,
      option:0,
    })
    const ll = computed(()=> porps.intabledata)
    let isdj=ref(false)
    const isdjfunc = ()=>{
      if (isdj.value===false){
        isdj.value=true
      }else {
        isdj.value=false
      }
    }
    const download = ()=>{
      // router.push('/')
      // store.commit('login')
      alert('sorry, 暂时下不了数据')
    }
    return {
      ...toRefs(state),
      ll,
      isdj,
      isdjfunc,
      download
    }
  }
})
</script>

<style scoped>

</style>
