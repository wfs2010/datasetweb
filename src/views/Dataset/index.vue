<template>
  <div class="container">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="dataimg/logo.png" alt="" width="72" height="72">
      <h2>Search form</h2>
      <p class="lead">The following includes four data query methods to meet your needs.</p>
    </div>

    <div class="row my-5">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary" @click="option=1">GWAS</button>
        <button type="button" class="btn btn-outline-primary" @click="option=2">GWAS</button>
        <button type="button" class="btn btn-outline-primary" @click="option=3">QTL</button>
        <button type="button" class="btn btn-outline-primary" @click="option=4">QTL</button>
      </div>
    </div>
    <div>
    </div>
    <datashow1 v-if="option===1"></datashow1>
    <datashow2 v-if="option===2"></datashow2>
    <datashow3 v-if="option===3"></datashow3>
    <datashow4 v-if="option===4"></datashow4>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent,ref } from 'vue'
import Datashow1 from "@/views/Dataset/datashow1.vue";
import Datashow2 from "@/views/Dataset/datashow2.vue";
import Datashow3 from "@/views/Dataset/datashow3.vue";
import Datashow4 from "@/views/Dataset/datashow4.vue";

export default defineComponent({
  name: 'index',
  components: {Datashow4, Datashow3, Datashow2, Datashow1},
  setup () {
    const option = ref(1)
    const state = reactive({
      count: 0
    })
    return {
      option,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>

</style>
