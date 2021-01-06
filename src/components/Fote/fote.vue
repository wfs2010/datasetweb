<template>
  <div class="footer-bottom pt-12 pb-14 text-center">
<!--      <div class="row">-->
<!--        <div class="col-xs-12">-->
<!--          <p style="color: white">-->
<!--            <a target="_blank" href="">-->
<!--              <i class="el-icon-s-home"></i>-->
<!--              Copyright &copy; 2020.AImodel市场 All rights reserved.-->
<!--            </a>-->
<!--          </p>-->
<!--          <p style="color: white">-->
<!--            <i class="el-icon-message"></i>-->
<!--            Email: marktobubble@protonmail.com-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
name: "fote",
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
.footer-bottom{background: #262626}
.pt-12 { padding-top: 12px }
.pb-14 { padding-bottom: 14px }
.text-center{text-align:center}

</style>
