<template>
  <el-container>
<!--    header 一直设计不好 无法自适应-->
<!--    <el-header >-->
<!--    </el-header>-->
    <navbar />
    <el-main >
      <div>
        <router-view></router-view>
      </div>
    </el-main>
    <el-footer>
      <fote />
    </el-footer>
  </el-container>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Navbar from "@/components/Navbar";
import Fote from "@/components/Fote/fote";

export default {
name: "layout",
  components: { Fote, Navbar},
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
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  margin: 0px 0px;
  padding: 0px 0px;
}

</style>
