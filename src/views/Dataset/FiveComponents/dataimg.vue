<template>
  <div>
<!--    <img src="..." class="img-fluid" alt="...">-->
    <div class="container my-5 text-center" v-for="ll in datalist" :key="ll.avatar">
      <img :src="ll.avatar" class="img-fluid" alt="...">
    </div>
  </div>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, PropType, computed} from 'vue'
import {GawData} from "@/store";

export default defineComponent({
  name: 'dataimg',
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const datalist = computed(() => {
      return props.list
    })
    return {
      datalist
    }
  }
})
</script>

<style scoped>

</style>
