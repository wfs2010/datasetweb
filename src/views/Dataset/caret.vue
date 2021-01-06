<template>
  <div style="width: 500px;height: 500px;background-color: #1f2d3d"></div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: "caret",
  setup() {
    const state = reactive({
      count: 0,
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>
