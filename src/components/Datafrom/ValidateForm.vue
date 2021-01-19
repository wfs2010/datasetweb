<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit" class="">
        <button type="submit" class="btn btn-primary">sign in</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import {reactive, toRefs, defineComponent, onUnmounted} from 'vue'
import mitt from "mitt";
type ValidateFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  name: 'ValidateForm',
  setup (props,context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func =>func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc | undefined) => {
      if(typeof func !== "undefined"){
        funcArr.push(func)
      }
    }
    emitter.on('form-item-created',callback)
    onUnmounted(()=>{
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    const state = reactive({
      count: 0
    })
    return {
      ...toRefs(state),
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
