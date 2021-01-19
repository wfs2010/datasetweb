<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-muted">Description</span>
      <span class="badge bg-secondary rounded-pill">?</span>
    </h4>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">GWAS</h6>
          <small class="text-muted">Brief description</small>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">GWAS</h6>
          <small class="text-muted">Brief description</small>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">QTL</h6>
          <small class="text-muted">Brief description</small>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">QTL</h6>
          <small class="text-muted">Brief description</small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'description',
  setup () {
    const state = reactive({
      count: 0
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>

</style>
