<template>
  <div class="demo-image__preview">
    <el-image
        class="img"
        :src="url1"
        :preview-src-list="srcList1">
    </el-image>
    <el-image
        class="img"
        :src="url2"
        :preview-src-list="srcList2">
    </el-image>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  name: "bioimg",
  setup() {
    const state = reactive({
      count: 0,
      url1: '/dataimg/img1.bmp',
      srcList1: [
        '/dataimg/img1.bmp'
      ],
      url2: '/dataimg/img2.bmp',
      srcList2: [
        '/dataimg/img2.bmp'
      ],

    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
.img{
  width: 250px;
  height: 250px;
  margin: 40px 120px 70px;
}
</style>
