<template>
  <div>
    我是home
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
name: "home",
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
