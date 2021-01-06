<template>
  <div>
    我是about
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
name: "about",
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
