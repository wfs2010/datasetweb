<template>
  <div class="row g-3">
    <div class="col-md-5 col-lg-4 order-md-last">
      <description/>
    </div>
    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Feature selection</h4>
      <form class="needs-validation" novalidate >
        <div class="row g-3">
          <div class="col-sm-12">
            <label for="gwas1_select1" class="form-label">Species</label>
            <select  class="form-select" id="gwas1_select1"  v-model="selected1" required>
              <option>Human1</option>
              <option>Human2</option>
              <option>Human3</option>
            </select>
          </div>

          <div class="col-md-12">
            <label for="gwas1_select2" class="form-label">Character</label>
            <select class="form-select" id="gwas1_select2" v-model="selected2" required>
              <option>Coronary Artery Disease1</option>
              <option>Coronary Artery Disease2</option>
              <option>Coronary Artery Disease3</option>
            </select>
          </div>

        </div>
        <hr class="my-4">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="save-info" v-model="check">
          <label class="form-check-label" for="save-info">I guarantee that the data will not be disclosed and used for commercial purposes</label>
           <span v-if="checkback" class="invalid-feedback" style="display:block;">请确认同意数据使用协议</span>
        </div>
        <hr class="my-4">
        <button class="w-100 btn btn-primary btn-lg" type="button" @click="datasearch">Continue to search</button>
      </form >
    </div>
  </div>
  <div :style="{display: issearch}" class="mt-5">
    <div class="row d-flex align-items-center p-3 my-3  bg-purple rounded shadow-sm"  >
      <div class="lh-1">
        <h1 class="h2 mb-0 text-black-50 lh-1">Result</h1>
      </div>
    </div>
    <div class="row">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary" @click="isS=0">Summary table</button>
        <button type="button" class="btn btn-outline-primary" @click="isS=1">LD expansion</button>
      </div>
    </div>
    <div class="table-responsive">
      <datadetail :list="list" v-if="isS===0"></datadetail>
    </div>
    <div class="table-responsive">
    <dataimg :list="imglist" v-if="isS===1"></dataimg>
    </div>
    <div class="row pt-3">
      <div class="text-end"><button type="button" class="btn btn-outline-primary " @click="download">Download all annotation</button></div>
    </div>
  </div>


</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, ref, computed} from 'vue'
import Description from "@/views/Dataset/description.vue";
import {useStore} from "vuex";
import {GawDatas} from "@/store";
import Datadetail from "@/views/Dataset/datadetail.vue";
import Dataimg from "@/views/Dataset/FiveComponents/dataimg.vue";

export default defineComponent({
  name: 'datashow1',
  components: { Dataimg, Datadetail, Description},
  setup () {
    const issearch = ref('none')
    const isS = ref(0)
    const check = ref('')
    const checkback = ref(false)
    const store = useStore<GawDatas>()
    const list = computed(()=> store.state.gawdatas)
    const imglist = computed(()=> store.state.LDexpansion)
    // const list =store.state.gawdatas
    const selected1 = ref('Human1')
    const selected2 = ref('Coronary Artery Disease1')
    const datasearch = ()=>{
      if(check.value) {
        checkback.value=false
        const datapara =reactive({
          selected1 : selected1.value,
          selected2 : selected2.value
        })
        issearch.value='block'
        store.dispatch('fetchData',datapara)
      }else {
        checkback.value=true
      }
    }
    const download = ()=>{
      // router.push('/')
      // store.commit('login')
      alert('sorry, 暂时下不了数据')
    }
    const state = reactive({
      count: 0
    })
    return{
      ...toRefs(state),
      selected1,
      selected2,
      list,
      datasearch,
      issearch,
      download,
      isS,
      imglist,
      check,
      checkback
    }
  }
})
</script>

<style scoped>

</style>
