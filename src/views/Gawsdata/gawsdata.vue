<template>
  <div>我也不知道我是</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
name: "gdata",
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
