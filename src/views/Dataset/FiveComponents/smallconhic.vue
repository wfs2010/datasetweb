<template>
  <tbody>
  <tr >
    <td>{{ll.chr_1}}</td>
    <td>{{ll.start_1}}</td>
    <td>{{ll.end_1}}</td>
    <td>{{ll.chr_2}}</td>
    <td>{{ll.start_2}}</td>
    <td>{{ll.end_2}}</td>
    <td>{{ll.score}}</td>
    <td>{{ll.ID}}</td>
    <td @click="isdjfunc" class="text-center"><i class="bi bi-arrow-bar-down"></i></td>
  </tr>
  <tr v-if="isdj">
    <td colspan="12" class="text-center">
      <img :src="ll.avatar">
    </td>
  </tr>
  </tbody>

</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, ref, computed} from 'vue'
import {HiC} from "@/store";

export default defineComponent({
  name: 'smallconhic',
  props:{
    llarray: {
      type: Array as PropType<HiC[]>,
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
