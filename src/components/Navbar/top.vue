<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
<!--      <div class="topbar-logo topbar-btn">-->
<!--        <a href="/"><img src="" style="padding-left:8px;"></a>-->
<!--      </div>-->
      <div class="topbar-logos">
        <a href="/" style="color: #fff;">车车综合管理</a>
      </div>
      <div class="topbar-title">
        <!-- 注意：这里就是topNavState作用之处，根据当前路由所在根路由的type值判断显示不同顶部导航菜单 -->
        <el-row >
          <el-col :span="24">
            <el-menu :default-active="defaultActiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
              <el-menu-item index="/">工作台</el-menu-item>
              <el-menu-item index="/enterpriseManager">企业管理</el-menu-item>
              <el-menu-item index="/orderManager">订单管理</el-menu-item>
              <el-menu-item index="/systemManager">系统管理</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24">
            <el-menu :default-active="defaultActiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
              <el-menu-item index="/enterpriseManager">企业信息</el-menu-item>
              <el-menu-item index="/vehicleManager">车辆信息</el-menu-item>
              <el-menu-item index="/deptManager">组织架构</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "top",
  data(){
    return {
      loading: false,
      companyName: '',
      nickname: '',
      defaultActiveIndex: '/',
      homeMenu: false,
      messageCount: 5
    }
  }
}
</script>

<style scoped>

</style>
