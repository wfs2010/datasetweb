<template>
  <div>
    <button @click="datasearch">fdsafadsfsdf</button>
    <ul>
      <li v-for="ll in list" :key="ll.ID">
        {{ll.chr}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs, ref, computed} from 'vue'
import axios from 'axios'
import {useStore} from "vuex";
import {GawDatas} from '@/store'
export interface ColumnProps{
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default {
name: "about",
setup() {
const state = reactive({
count: 0,
})
  // const datasearch = ()=>{
  //   axios.get('/gawdata')
  //       .then(res=>{
  //         console.log(res.data)
  //
  //       })
  //       .catch(err=>{
  //         console.error(err);
  //       })
  // }
  const store = useStore<GawDatas>()
  const list = computed(()=> store.state.gawdatas)
  const datasearch = ()=>{
      store.dispatch('fetchData')
  }
return {
    ...toRefs(state),
  datasearch,
  list
}
}
}
</script>

<style scoped>

</style>
