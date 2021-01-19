<template>
  <div></div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'index',
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
