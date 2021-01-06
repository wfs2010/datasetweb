<template>
<div>我是help</div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: "help",
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
