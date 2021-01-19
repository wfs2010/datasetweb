<template>
  <tbody>
  <tr>
    <th >{{ll.CellLine}} | {{ll.CellType}} | {{ll.MarkType}}</th>
    <th class="col-1 text-center" @click="isdjfunc">
      <i class="bi bi-arrow-bar-down"></i>
    </th>
  </tr>
  <tr v-if="isdj">
    <td colspan="12">
      <table class="table table-bordered border-dark">
        <tbody>
        <tr>
          <th scope="row">chr</th>
          <td>{{ll.chr}}</td>
        </tr>
        <tr>
          <th scope="row">chromStart</th>
          <td>{{ll.chromStart}}</td>
        </tr>
        <tr>
          <th scope="row">chromEnd</th>
          <td colspan="2">{{ll.chromEnd}}</td>
        </tr>
        <tr>
          <th scope="row">Signal</th>
          <td colspan="2">{{ll.Signal}}</td>
        </tr>
        <tr>
          <th scope="row">-logP</th>
          <td colspan="2">{{ll._logP}}</td>
        </tr>
        <tr>
          <th scope="row">ProfileSource</th>
          <td colspan="2">{{ll.ProfileSource}}</td>
        </tr>
        <tr>
          <th scope="row">CellLine</th>
          <td colspan="2">{{ll.CellLine}}</td>
        </tr>
        <tr>
          <th scope="row">CellType</th>
          <td colspan="2">{{ll.CellType}}</td>
        </tr>
        <tr>
          <th scope="row">MarkType</th>
          <td colspan="2">{{ll.MarkType}}</td>
        </tr>
        <tr>
          <th scope="row">ID</th>
          <td colspan="2">{{ll.ID}}</td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
  </tbody>

</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, ref, computed} from 'vue'
import {Histonemodification} from "@/store";

export default defineComponent({
  name: 'smallconphi',
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
