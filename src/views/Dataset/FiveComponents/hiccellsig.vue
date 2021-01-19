<template>
  <table class="table table-bordered border-dark">
    <thead>
    <tr>
      <th scope="col">chr_1</th>
      <th scope="col">start_1</th>
      <th scope="col">end_1</th>
      <th scope="col">chr_2</th>
      <th scope="col">start_2</th>
      <th scope="col">end_2</th>
      <th scope="col">score</th>
      <th scope="col">ID</th>
    </tr>
    </thead>
    <smallconhic v-for="lldata in ll" :key="lldata.ID" :llarray="lldata"></smallconhic>
  </table>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, computed} from 'vue'
import Smallconhic from "@/views/Dataset/FiveComponents/smallconhic.vue";
import {HiC} from "@/store";

export default defineComponent({
  name: 'hiccellsig',
  components: {Smallconhic},
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
